import style from './style.css';

const Searchbar = ({searchFunction}) => (
    <span class={style.searchbar}>
        <input placeholder="Search..." onInput={event => searchFunction(event.target.value)} autoFocus />
        <button>
            <img src="/assets/search.png" alt="" />
        </button>
    </span>
);

export default Searchbar;