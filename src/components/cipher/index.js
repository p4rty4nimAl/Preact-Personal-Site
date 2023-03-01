import { Component, createRef } from "preact";
import style from './style.css';


export /* abstract */ class Cipher extends Component {
    bEF(string) {};
    bDF(string) {};

    handleInputBoxChange(event) {
        this.setState({value: event.target.value})
        this.encipher(false);
    }

    constructor(props) {
        super(props);
        this.inputTextBox = createRef();
        this.outputTextBox = createRef();
    }

    reverseString(string) {
        return string.split("").reverse().join("");
    };
    getVal(char) {
        if (char != undefined) return char.toLowerCase().charCodeAt(0) - 96;
    }
    getChar(val) {
        return String.fromCharCode((val % 32) + 96);
    }

    decipher(keepCase) {
        const output = this.outputTextBox.current.value;
        if (keepCase) {
            this.inputTextBox.current.value = this.bDF(this.reverseString(this.bDF(this.reverseString(output)))).replaceAll("`", " ");
        } else {
            this.inputTextBox.current.value = this.bDF(this.reverseString(this.bDF(this.reverseString(output)))).replaceAll("`", " ").toLowerCase();
        }
    };
    encipher(keepCase) {
        const input = this.inputTextBox.current.value;
        if (keepCase) {
            this.outputTextBox.current.value = this.reverseString(this.bEF(this.reverseString(this.bEF(input)))).replaceAll("`", " ");
        } else {
            this.outputTextBox.current.value = this.reverseString(this.bEF(this.reverseString(this.bEF(input)))).replaceAll("`", " ").toLowerCase();
        }
    }

    render(props, state) {
        return (
            <span class={style.ciphercontainer}>
                <h1>{this.state.title}</h1>
                <p>
                    <textarea ref={this.inputTextBox} cols="80" rows="12" autoFocus onKeyUp={() => this.encipher()} value={this.state.value}></textarea>
                </p>
                <p class={style.arrow}>↑</p>
                <p>
                    <button onClick={() => this.decipher()}>Decipher</button>
                </p>
                <p class={style.arrow}>↑</p>
                <p>
                    <textarea ref={this.outputTextBox} cols="80" rows="12"></textarea>
                </p>
            </span>
        )
    };
};

export /* abstract */ class KeyedCipher extends Cipher {
    constructor(props) {
        super(props);
        this.keyTextBox = createRef();
    };
    getKey() {
        return this.keyTextBox.current.value;
    };
    render(props, state) {
        return (
            <span class={style.ciphercontainer}>
                <h1>{this.state.title}</h1>
                <p>
                    <textarea ref={this.inputTextBox} cols="80" rows="12" autoFocus onKeyUp={() => this.encipher()} value={this.state.value}></textarea>
                </p>
                <p class={style.arrow}>↑</p>
                <p style="display: flex; align-items: center; justify-content: center;">
                    <textarea ref={this.keyTextBox} class={style.keyarea} id="key" cols="20" rows="1" maxlength="20" placeholder="Key:"></textarea>
                    <button class={style.keybutton} onClick={() => this.decipher()}>Decipher</button>
                </p>
                <p class={style.arrow}>↑</p>
                <p>
                    <textarea ref={this.outputTextBox} cols="80" rows="12"></textarea>
                </p>
            </span>
        )
    };
};

//TODO: note, i cannot support anything in this class
//quick, hacky copy+paste job - breaks in strict mode, needed workaround - not sure why workaround even works??
// TOUCH ONLY WITH A POOL ROD
export /* abstract */ class HashedCipher extends KeyedCipher {
    hash = (function() {
        function getVal(char) {
            if (char != undefined) return char.toLowerCase().charCodeAt(0) - 96;
        }
        function getChar(val) {
            return String.fromCharCode((val % 32) + 96);
        }

        const complexity = 2;
        let i, j;
        function combineBlocks(array) {
            if (array.length == 1) return array;
            let output = [];
            let interm = "";
            for (i = 1; i < array.length; i++) {
                for (j = 0; j < 64; j++) {
                    interm = interm + getChar(getVal(array[i - 1][j]) ^ getVal(array[i][j]));
                }
                output.push(interm);
                interm = "";
            }
            return combineBlocks(output)//.replaceAll("\x7F", " ");
        }

        function hash(input) {
            if (input.length == 0) return input;
            return rentropise(combineBlocks(split(rentropise(input.toString())))).replaceAll("\x7F", " ").substring(0, 63);
        }

        function split(string) {
            for (i = 0; string.length % 64 != 0; i++) {
                string = string + rentropise(string[string.length - 1])[i % 256];
            }
            string = string + rentropise(string[string.length - 1])[62];
            let cnt = 0;
            let output = [""];
            for (let i = 0; i < string.length; i += 64) {
                output[cnt] = string.substring(i - 64, i);
                cnt++;
            }
            output.shift();
            return output;
        }

        function rentropise(string) {
            return entropise(string, string.length);
        }
        function entropise(string, sL) {
            if (string.length > 64 * complexity) return string;
            string += getChar(sL ** 2 + Math.sqrt(string.length ** 3) + 2 * (getTotalVal(string, 0) + getTotalVal(string, 1)));
            return entropise(string, 0);
        }

        function getTotalVal(string, mode) {
            let total = 0;
            switch (mode) {
                case 0:
                    for (i = 0; i < string.length; i++) {
                        total += getVal(string[i]);
                    }
                    return total;
                default:
                    for (i = 0; i < string.length; i++) {
                        if (i % 2 == 0) total = Math.max(total, 1) * Math.ceil((getVal(string[i])));
                    }
                    return total;
            }
            
        }
        return hash;
    }
    )();
};