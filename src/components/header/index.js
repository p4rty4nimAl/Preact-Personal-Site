import { Link } from 'preact-router/match';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';

const Header = () => {
    const [_, rerender] = useState();
    useEffect(() => {
        const resizeHandler = () => rerender({});
        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    })
    let isHidden = false;
    // not a fan of the hiding rn, so its getting removed temporarily
    //if (typeof window !== "undefined") isHidden = screen.height === window.innerHeight;
    return (
        <>
            <header class={style.header} hidden={isHidden}>
                <h1>xtraea.com</h1>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/docs">Documentation</Link>
                </nav>
            </header>
            <header />
        </>
    )
}

export default Header;
