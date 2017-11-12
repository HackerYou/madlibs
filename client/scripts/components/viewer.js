import React from 'react';

class Viewer extends React.Component {
    render() {
        const { words } = this.props;
        return <div>
        <p>Since you'll most likely be on your computer for {words.number_1} hours a day,
        it's very important that you learn how to type quicly. That way, you'll
        be able to finish your research project on {words.foreign_country} {words.adverb} and amaze your 
        friends with your {words.ing_verb_1} skills!</p>

        <p>Since my {words.body_part_1} would never land on the {words.plural_noun_1} correctly, I decided to take a 
        keyboarding class at my local {words.building}. My teacher was {words.adjective}! The first thing 
        he told me was to properly position my {words.body_part_2} on the keyboard. Then he showed me
        how to move my {words.body_part_2} to be able to type actual {words.plural_noun_3}!</p>

        <p>I practiced my {words.ing_verb_2} skills every night until I could type {words.number_2} words a 
        minute! All of my {words.plural_noun_4} are so jealous -- I {words.verb} so fast that I am always the
        first one to finish typing my {words.plural_noun_3} for {words.language} class. All of those hours of
        hard {words.noun} were worth it.</p>
        </div>
    }
}

export default Viewer;