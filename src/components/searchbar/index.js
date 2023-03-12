import style from './style.css';

const Searchbar = (props) => {
    const {parent} = props;
    const handleChange = (event) => {
        parent.search(event.target.value, parent.props.items);
    }
    return (
        <span class={style.searchbar}>
            <input placeholder="Search..." onInput={handleChange} autoFocus />
            <button>
                <img src="/assets/search.png" alt="" />
            </button>
        </span>
    );
}

export default Searchbar;