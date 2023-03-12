import style from './style.css';

import projects from './text';

import Showcases from '../../components/showcases';

const Projects = () => {
    return (
        <div class={style.showcases}>
            <Showcases items={projects} />
            <p>
                This is where all my projects are stored. Click any you like the look of!<br />
                <a href="/" rel="noopener noreferrer">Home</a>
            </p>
            <footer />
        </div>
    );
}

export default Projects;
