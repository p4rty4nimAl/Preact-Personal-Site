import style from './style.css';

const Searchbar = ({searchFunction}) => {
    const handleChange = event => searchFunction(event.target.value);
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