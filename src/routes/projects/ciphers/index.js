import { Cipher, KeyedCipher, HashedCipher } from "../../../components/cipher";
import { Link } from 'preact-router/match';

class Weezd extends Cipher {
    bEF(string) {
        let output = string[0];
        for (let i = 1; i < string.length; i++) {
            output += String.fromCharCode(string[i].charCodeAt() + string[i - 1].charCodeAt() + 0x0090C4);
        }
        return output;
    };
    bDF(string) {
        let output = string[0];
        for (let i = 1; i < string.length; i++) {
            output += String.fromCharCode(string[i].charCodeAt() - output[i - 1].charCodeAt() - 0x0090C4);
        }
        return output.toString();
    };
    constructor(props) {
        super(props);
        this.state = {title: "Weez'd"};
    };  
};

class Bipher extends Cipher {
    bEF(string) {
        let retVal = string[0];
        for (let i = 1; i < string.length; i++) {
            retVal += this.getChar((this.getVal(string[i]) + this.getVal(string[i - 1])) % 32);
        }
        return retVal;
    };
    bDF(string) {
        var retVal = string[0];
        for (let i = 1; i < string.length; i++) {
            retVal += this.getChar((this.getVal(string[i]) - this.getVal(retVal[i - 1])) % 32);
        }
        return retVal;
    };
    constructor(props) {
        super(props);
        this.state = {title: "Bipher"};
    };  
};

class CaesarVariation extends Cipher {
    bEF(string) {
        let output = "";
        const constant = ((string.length % 16 == 0) ? 1 : string.length % 32);
        for (let i = 0; i < string.length; i++) {
            output += this.getChar(this.getVal(string[i]) + (constant) % 32);
        }
        return output;
    };
    bDF(string) {
        let output = "";
        const constant = ((string.length % 32 == 0) ? 1 : string.length);
        for (let i = 0; i < string.length; i++) {
            output += this.getChar(this.getVal(string[i]) - (constant) % 32);
        }
        return output;
    };
    constructor(props) {
        super(props);
        this.state = {title: "Caesar Variation Cipher"};
    };  
};

class CRC extends Cipher {
    bEF(string) {
        let register = 0;
        let output = "";
        for (let i = 0; i < string.length; i++) {
            register = (register + getVal(string[i])) % 32;
            output += getChar(register);
        }
        return output;
    };
    bDF(string) {
        let output = string[0];
        for (let i = 1; i < string.length; i++) {
            output += getChar(getVal(string[i]) - getVal(string[i - 1]));
        }
        return output;
    };
    constructor(props) {
        super(props);
        this.state = {title: "Continuous Register Cipher"};
    };  
};

class KCRC extends KeyedCipher {
    bEF(string) {
        let register = 0;
        let output = "";
        let key = this.getKey();
        for (let i = 0; i < string.length; i++) {
            register = (register + this.getVal(string[i])) % 32;
            output += this.getChar(register);
        }
        string = output;
        output = "";
        for (let i = 0; i < string.length; i++) {
            output += this.getChar(this.getVal(string[i]) + this.getVal(key[i % key.length]));
        }
        return output;
    };
    bDF(string) {
        let output = "";
        let key = this.getKey();
        for (let i = 0; i < string.length; i++) {
            output += this.getChar(this.getVal(string[i]) - this.getVal(key[i % key.length]));
        }
        string = output;
        output = string[0];
        for (let i = 1; i < string.length; i++) {
            output += this.getChar(this.getVal(string[i]) - this.getVal(string[i - 1]));
        }
        return output;
    };
    constructor(props) {
        super(props);
        this.state = {title: "Keyed CRC"};
    };  
};

class FHKCRC extends HashedCipher {
    bEF(string) {
        let register = 0;
        let output = "";
        for (let i = 0; i < string.length; i++) {
            register = (register + this.getVal(string[i])) % 32;
            output += this.getChar(register);
        }
        string = output;
        const key = this.hash(this.getKey());
        output = "";
        for (let i = 0; i < string.length; i++) {
            output += this.getChar(this.getVal(string[i]) + this.getVal(key[i % key.length]));
        }
        return output;
    };
    bDF(string) {
        let output = "";
        const key = this.hash(this.getKey());
        for (let i = 0; i < string.length; i++) {
            output += this.getChar(this.getVal(string[i]) - this.getVal(key[i % key.length]));
        }
        string = output;
        output = string[0];
        for (let i = 1; i < string.length; i++) {
            output += this.getChar(this.getVal(string[i]) - this.getVal(string[i - 1]));
        }
        return output;
    };
    constructor(props) {
        super(props);
        this.state = {title: "Fast Hashed CRC"};
    };  
};

class HKCRCR extends HashedCipher {
    bEF(string) {
        let register = 0;
        let output = "";
        for (let i = 0; i < string.length; i++) {
            register = (register + this.getVal(string[i])) % 32;
            output += this.getChar(register);
        }
        string = output;
        const key = this.hash(this.getKey());
        output = "";
        for (let i = 0; i < string.length; i++) {
            output += this.getChar(this.getVal(string[i]) + this.getVal(key[i % key.length]));
        }
        return output;
    };
    bDF(string) {
        let output = "";
        const key = this.hash(this.getKey());
        for (let i = 0; i < string.length; i++) {
            output += this.getChar(this.getVal(string[i]) - this.getVal(key[i % key.length]));
        }
        string = output;
        output = string[0];
        for (let i = 1; i < string.length; i++) {
            output += this.getChar(this.getVal(string[i]) - this.getVal(string[i - 1]));
        }
        return output;
    };
    constructor(props) {
        super(props);
        this.state = {title: "Hashed CRC: Reworked"};
    };  
};

class Weezd2 extends HashedCipher {
    bEF(string) {
        const hashedK = this.hash(this.getKey());
        let output = string[0];
        for (let i = 1; i < string.length; i++) {
          output += String.fromCharCode(string[i].charCodeAt() + string[i - 1].charCodeAt() + 0x0090C4 - hashedK[i % hashedK.length].charCodeAt());
        }
        return output;
    };
    bDF(string) {
        const hashedK = this.hash(this.getKey());
        let output = string[0];
        for (let i = 1; i < string.length; i++) {
            output += String.fromCharCode(string[i].charCodeAt() - output[i - 1].charCodeAt() - 0x0090C4 + hashedK[i % hashedK.length].charCodeAt());
        }
        return output.toString();
    };
    constructor(props) {
        super(props);
        this.state = {title: "Weez'd 2"};
    };  
};

class Keysmash extends Cipher {
    encipher() {
        const input = this.inputTextBox.current.value;
        let output = input[0];
        for (let i = 1; i < input.length; i++) {
            output += this.getChar((this.getVal(input[i]) + this.getVal(input[i - 1])) % 32);
        }
        this.outputTextBox.current.value = output;
    };
    decipher() {
        const input = this.outputTextBox.current.value;
        let output = input[0];
        for (let i = 1; i < input.length; i++) {
            output += this.getChar((this.getVal(input[i]) - this.getVal(output[i - 1])) % 32);
        }
        this.inputTextBox.current.value = output;
    };
    constructor(props) {
        super(props);
        this.state = {title: "Keysmash Cipher"};
    };  
};
class HashKeyCipher extends Cipher {
    render() {
        return (
            <>
                <h1>This cipher has been removed due to design choices previously made that I have decided to drop support for.</h1>
                <p>If this causes issues, open one on GitHub. The repository may be found in the <Link href="/docs/">documentation</Link> for the site.</p>
            </>
        )
    }
}

//TODO: what happened to caps?? (noticed in weezd2)
const Ciphers = {
    Weezd: Weezd,
    Bipher: Bipher,
    CaesarVariation: CaesarVariation,
    CRC: CRC,
    KCRC: KCRC,
    HKCRCR: HKCRCR,
    Weezd2: Weezd2, //do
    Keysmash: Keysmash,
    HashKeyCipher: HashKeyCipher

};
export default Ciphers;