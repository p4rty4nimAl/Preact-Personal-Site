import { Component, h } from 'preact';
import { createRef } from 'preact'
import style from './style.css';

class Searchbar extends Component {
	textInput = createRef();
	render() {
        return (
            <span class={style.searchbar}>
                <input ref={this.textInput} placeholder="Search..." onInput={this.handleChange.bind(this)} autoFocus />
                <button>
                <img src="/assets/search.png" alt="" />
                </button>
            </span>
        );
	}
	handleChange() {
	  this.props.parent.search(this.textInput.current.value, this.props.parent.props.items);
	}
}

export default Searchbar;