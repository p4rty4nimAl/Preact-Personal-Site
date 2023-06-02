import style from './style.css';

import projects from './text';

import Showcases from '../../components/showcases';
import { Link } from 'preact-router';

const Projects = () => {
    return (
        <div class={style.showcases}>
            <Showcases items={projects} />
            <p>
                This is where all my projects are stored. Click any you like the look of!<br />
                <Link href="/" rel="noopener noreferrer">Home</Link>
            </p>
            <footer />
        </div>
    );
}

export default Projects;
