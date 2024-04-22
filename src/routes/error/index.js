import style from './style.css';

const Error = () => (
	<span class={style.errorbody}>
        <p class={style.title}>404: Page Not Found</p>
        <p class={style.text}>
            One of us has made a mistake... <br />
            But neither wants to admit it. You could skedaddle to the <br />
            <a class={style.link} href="/">home</a> page and forget this ever happened.
        </p>
    </span>
);

export default Error;
