import { Fragment } from 'preact';
import style from './style';

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
        </span>
    )
}

const poems = [
    {
        id: 0,
        title: "Ignorance",
        desc: [
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
        ]
    },
    {
        id: 1,
        title: "Someone Else's Panopticon",
        desc: [
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
        ]
    },
    {
        id: 2,
        title: "You are Nothing without me",
        desc: [
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
        ]
    },
    {
        id: 3,
        title: "Moonlit Overpass",
        desc: [
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
        ]
    },
    {
        id: 4,
        title: "Heartbroken",
        desc: [
            "an embrace... a kiss... a date...",
            "all of a past life... none familiar...",
            "What is it for?",
            "Am I broken? Am I?",
            "",
            "A hole in my heart,",
            "told I should hope,",
            "get a filling, or two,",
            "Am I broken?",
            "",
            "Deemed a worthless piece,",
            "reduced to a problem,",
            "emotion as an extra,",
            "Am I broken?",
            "",
            "Tell me I'm loveable",
            "and I am deserving,",
            "I'm still broken, discarded.",
            "You can't ever fill an empty heart,", 
            "",
            "except with more holes.",
            "",
        ]
    },
    {
        id: 5,
        title: "Regulation",
        desc: [
            "Grant that: a word is just that.",
            "No more. No less.",
            "Can it be they have meaning?",
            "As mathematics once was",
            "separated. Symbols.",
            "",
            "Reality.",
            "Detached from origins,",
            "Can it be they still have meaning?",
            "A schism, a rift",
            "between word and form.",
            "",
            "By word, only another may be referred.",
            "An object of reality,",
            "cannot interact with a fake:",
            "Construction of the mind.",
            "",
            "What use was connection?",
            "Coordinated society?",
            "A society split as easily as words?",
            "My vision may be your smell,",
            "my green:",
            "",
            "your blue; your blood,",
            "What use are words to describe fleeting vision?",
            "Extremes elude words,",
            "as do emotions,",
            "as do words themselves."

        ]
    },
    {
        id: 6,
        title: "My Own Terms",
        desc: [
            "I dreamt.",
            "",
            "Of freedom:",
            "  to walk.",
            "  to walk alone at night.",
            "  to walk alone in June",
            "  with a wife.",
            "",
            "I once dreamt that one day,",
            "perhaps a June night,",
            "I could one day walk a beach",
            "among a sea breeze",
            "- one that did not smell of sewage.",
            "",
            "Beyond my furthest hopes:",
            "  I walk there, over hellish tarmac",
            "  past tortured homes,",
            "  under tremendous trees",
            "- and I cannot see the stars",
            "",
            "yet I never once dreamt:",
            "  that walk could contain",
            "  noise so loud; pop no doubt,",
            "  blasted over hills",
            "  to the beach",
            "- and I cannot hear the waves.",
            "",
            "But upon this beach,",
            "one I never dreamed about:",
            "I see stars, I hear waves, I smell only air.",
            "I am here:",
            "  in June...",
            "  At night...",
            "  With a wife:",
            "    but no life, in death."
        ]
    },
    {
        id: 7,
        title: "Spite",
        desc: [
            "Because I would stay up",
            "all night, if it would make you any better,",
            "perhaps no rhyme, no reason, no rhythm, ",
            "but what is love if it rhymes?",
            "",
            "Because I would write you a poem",
            "and if I had to hide my love,",
            "address it to a tree, a tower, a beach",
            "or dedicate it to an anthology,",
            "if I could not dedicate myself to you.",
            "",
            "Passion, irrelevant.",
            "Hypotheticals unnecessary, for what can be ",
            "done in a moment.",
            "Why bother, with metaphors, comparisons, delusions?",
            "You could be here, now",
            "with me and my mind, to share.",
            "",
            "The freedom to love;",
            "a right within Europe, France.",
            "The city of love, Paris,",
            "I left a lock on that bridge",
            "to symbolise our love like so many others.",
            "",
            "And that is where it ends, isn't it?",
            "Why bother, in the face of rhyme, repetition and refrain?"
        ]
    }
].map((poem) => ({
    ...poem, 
    desc: <Poem 
        title={poem.title}
        poem={poem.desc.map((value, index) => <Fragment key={index}>{value}<br /></Fragment>)}
    />
}
));
let contentMap = {};
for (const {title, desc} of poems) {
    contentMap[title] = desc;
}
export {contentMap, poems};