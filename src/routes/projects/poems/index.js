import { Component } from "preact";
import Showcases, { Showcase } from "../../../components/showcases";
import style from './style.css'

import { useState } from 'preact/hooks';
import { Link } from "preact-router";

const poems = [
    {
        "link": "/projects/poetry/Ignorance",
        "desc": "Ignorance",
        "keywords": "ignorance"
    },
    {
        "link": "/projects/poetry/someoneElsesPanopticon",
        "desc": "Someone Else's Panopticon",
        "keywords": "someone elses else's panopticon"
    },
    {
        "link": "/projects/poetry/nothingWithoutMe",
        "desc": "You are Nothing without me",
        "keywords": "you are nothing without me",
        "hidden": true
    },
    {
        "link": "/projects/poetry/moonlitOverpass",
        "desc": "Moonlit Overpass",
        "keywords": "moonlit overpass",
        "hidden": true
    }
    
]

class Index extends Component {
    render() {
        return (
            <PoemsShowcases items={poems} />
        )
    }
}

class PoemsShowcases extends Showcases {
    constructor(props) {
		super(props);
		let showcaseWidgets = [];
		for (let showcase of props.items) {
            if (showcase.hidden) continue;
			showcaseWidgets.push(
				<Showcase item={showcase} key={showcase.link} />
			);
		}
		this.state = {showcaseWidgets: showcaseWidgets};
	}
	search(query, items) {
		query = query.toLowerCase();
		let searchedShowcases = [];
        if (query != "hidden") {
            for (let showcase of items) {
                if (showcase.hidden) continue;
                if (showcase.keywords.includes(query)) {
                    searchedShowcases.push(<Showcase item={showcase} key={showcase.link}/>);
                }
            }
        } else {
            for (let showcase of items) {
                if (showcase.hidden) {
                    searchedShowcases.push(<Showcase item={showcase} key={showcase.link}/>);
                }
            }
        }
		this.setState({showcaseWidgets: searchedShowcases});
	}
}

/* abstract */ class Poem extends Component {
    constructor(props) {
        super(props);
        this.state = {title: "", poem: ""}
    }
    render(props, state) {
        return (
            <span class={style.poemcontainer}>
                <br />
                <fieldset>
                    <legend>{this.state.title}</legend>
                    <span>{this.state.poem}</span>
                </fieldset>
                <br />
                <Link href="/projects/poetry">Back</Link>
                <p />
            </span>
        )
    }
}

class Igno extends Poem {
    constructor(props) {
        super(props);
        const text = [
            "I laid still, in a field of grass,",
            "The curve of a lifetime forgotten,",
            "Traceable,",
            "",
            "The grass of a thousand lives before me,",
            "Each identical under the gaze of the masses,",
            "Each with such story,",
            "Such individuality,",
            "",
            "A tree stands, squats: the horizon calls,",
            "You ignore it,",
            "",
            "As you distance, trees disappear,",
            "Forests give way to cities;",
            "Give way to the trap,",
            "",
            "Hundreds of trees stand, still,",
            "Surrounded by smoke and steel,",
            "A breath of fresh air no more than a myth,",
            "",
            "I lay once again in this former field,",
            "",
            "You see me, silently approach;",
            "I think: I know your words;",
            "But you just walk away,",
            "Once more."
        ];
        let poem = [];
        for (let line of text) {
            poem.push(line);
            poem.push(<br />);
        }
        this.setState({
            title: "Ignorance",
            poem: poem
        });
    }
}
class Smep extends Poem {
    constructor(props) {
        super(props);
        const text = [
            "I look outside, after silence,",
            "I look inside, I see flashes,",
            "Flashes of light reflected in me,",
            "",
            "Flashes in the past tense,",
            "Thoughts from sounds ago,",
            "",
            "Can't hold a conversation,",
            "Too caught up in my own",
            "Head, turning to look at another screen,",
            "",
            "Spot another camera,",
            "Regulate my behaviour,",
            "",
            "What concrete madness we live in,",
            "Block it all out; next time it shows,",
            "I'm different, it's all alien. "
        ];
        let poem = [];
        for (let line of text) {
            poem.push(line);
            poem.push(<br />);
        }
        this.setState({
            title: "Someone Else's Panopticon",
            poem: poem
        });
    }
}
class Yanwe extends Poem {
    constructor(props) {
        super(props);
        const text = [
            "A ray of hope, caught in a razor,",
            "what's next is anyone's guess,",
            "",
            "A sharp line of skin,",
            "A slicing, stinging, burning pain,",
            "and the past comes rushing back.",
            "",
            "Rushing, like the veins,",
            "like the arteries,",
           " which don't suffer thought:",
            "saying, \"You are Nothing without me\"",
            "",
            "They are not alone in their message,",
            "Echoed by scars,",
            "Repeated by the scales,",
            "A prisoner turned against its sole possesor."
        ];
        let poem = [];
        for (let line of text) {
            poem.push(line);
            poem.push(<br />);
        }
        this.setState({
            title: "You are Nothing without me",
            poem: poem
        });
    }
}
class Mnop extends Poem {
    constructor(props) {
        super(props);
        const text = [
            "The beauty of the moon,",
            "seen from a million miles away,",
            "stunning still from a pillow,",
            "A view rivalled only by:",
            "",
            "That of a rural bridge,",
            "over the tracks, chasing,",
            "A rolling landscape,",
            "Ended by a tree.",
            "",
            "Soaring.",
            "",
            "A bridge chased away,",
            "Supports a body not,",
            "So it soars and falls,",
            "Towards the tracks below.",
            "",
            "Onwards and downwards,",
            "As gravity runs course,",
            "A body finds the ground,",
            "Passing underneath.",
            "",
            "Searing."
        ];
        let poem = [];
        for (let line of text) {
            poem.push(line);
            poem.push(<br />);
        }
        this.setState({
            title: "Moonlit Overpass",
            poem: poem
        });
    }
}

const Poems = {
    Index: Index,
    Igno: Igno,
    Smep: Smep,
    Yanwe: Yanwe,
    Mnop: Mnop
}

export default Poems;