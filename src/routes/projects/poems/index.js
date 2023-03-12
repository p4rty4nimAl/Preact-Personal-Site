/* eslint-disable react/jsx-key */
import Showcases, { Showcase } from "../../../components/showcases";
import { Link } from "preact-router";
import style from './style.css'

const poems = [
    {
        link: "/projects/poetry/Ignorance",
        desc: "Ignorance",
        keywords: "ignorance"
    },
    {
        link: "/projects/poetry/someoneElsesPanopticon",
        desc: "Someone Else's Panopticon",
        keywords: "someone elses else's panopticon"
    },
    {
        link: "/projects/poetry/nothingWithoutMe",
        desc: "You are Nothing without me",
        keywords: "you are nothing without me",
        hidden: true
    },
    {
        link: "/projects/poetry/moonlitOverpass",
        desc: "Moonlit Overpass",
        keywords: "moonlit overpass",
        hidden: true
    }
    
]

const Index = () => {
    return <PoemsShowcases items={poems} />
}

class PoemsShowcases extends Showcases {
    constructor(props) {
		super(props);
		const showcaseWidgets = props.items.filter(item => !item.hidden)
            .map(item => {
                return <Showcase item={item} key={item.link} />
            });
		this.state = {showcaseWidgets};
	}
	search(query, items) {
		query = query.toLowerCase();
		let showcaseWidgets;
        if (query === "hidden") {
            showcaseWidgets = items.filter(item => item.hidden)
                .map(item => <Showcase item={item} key={item.link} />);
        } else {
            showcaseWidgets = items.filter(item => !item.hidden && item.keywords.includes(query))
                .map(item => <Showcase item={item} key={item.link} />);
        }
		this.setState({showcaseWidgets});
	}
}

const Poem = (props) => {
    const {title, poem} = props;
    return (
        <span class={style.poemcontainer}>
            <br />
            <fieldset>
                <legend>{title}</legend>
                <span>{poem}</span>
            </fieldset>
            <br />
            <Link href="/projects/poetry">Back</Link>
            <p />
        </span>
    )
}
const Igno = () => {
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
    const poem = text.map(line => {
        return <>{line}<br /></>
    });
    return <Poem title="Ignorance" poem={poem} />
}
const Smep = () => {
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
    const poem = text.map(line => {
        return <>{line}<br /></>
    });
    return <Poem title="Someone Else's Panopticon" poem={poem} />
}
const Yanwe = () => {
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
    const poem = text.map(line => {
        return <>{line}<br /></>
    });
    return <Poem title="You are Nothing without me" poem={poem} />
}
const Mnop = () => {
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
    const poem = text.map(line => {
        return <>{line}<br /></>
    });
    return <Poem title="Moonlit Overpass" poem={poem} />
}

const Poems = {
    Index,
    Igno,
    Smep,
    Yanwe,
    Mnop
}

export default Poems;