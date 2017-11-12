import React from 'react';

class Editor extends React.Component {
    render() {
      const { words } = this.props;
      return <div>
        <Field label="Number" value={ words.number_1 } onChange={ this.number1Changed } />
        <Field label="Foreign Country" value={ words.foreign_country } onChange={ this.foreignCountryChanged } />
        <Field label="Adverb" value={ words.adverb } onChange={ this.adverbChanged } />
        <Field label="Verb ending in ing" value={ words.ing_verb_1 } onChange={ this.ingVerb1Changed } />
        <Field label="Body Part" value={ words.body_part_1 } onChange={ this.bodyPartChanged } />
        <Field label="Plural Noun" value={ words.plural_noun_1 } onChange={ this.pluralNounChanged } />
        <Field label="Type of Building" value={ words.building } onChange={ this.buildingChanged } />
        <Field label="Adjective" value={ words.adjective } onChange={ this.adjectiveChanged } />
        <Field label="Body Part" value={ words.body_part_2 } onChange={ this.bodyPart2Changed } />
        <Field label="Plural Noun" value={ words.plural_noun_3 } onChange={ this.pluralNoun3Changed } />
        <Field label="Verb ending in ing" value={ words.ing_verb_2 } onChange={ this.ingVerg2Changed } />
        <Field label="Number" value={ words.number_2 } onChange={ this.number2Changed } />
        <Field label="Plural Noun" value={ words.plural_noun_4 } onChange={ this.pluralNoun4Changed } />
        <Field label="Verb" value={ words.verb } onChange={ this.verbChanged } />
        <Field label="Language" value={ words.language } onChange={ this.languageChanged } />
        <Field label="Noun" value={ words.noun } onChange={ this.nounChanged } />
      </div>
    }

    number1Changed(e) { this.props.onChange("number_1", e.target.value)}
    foreignCountryChanged(e) { this.props.onChange("foreign_country", e.target.value)}
    adverbChanged(e) { this.props.onChange("adverb", e.target.value)}
    ingVerb1Changed(e) { this.props.onChange("ing_verb_1", e.target.value)}
    bodyPartChanged(e) { this.props.onChange("body_part_1", e.target.value)}
    pluralNounChanged(e) { this.props.onChange("plural_noun_1", e.target.value)}
    buildingChanged(e) { this.props.onChange("building", e.target.value)}
    adjectiveChanged(e) { this.props.onChange("adjective", e.target.value)}
    bodyPart2Changed(e) { this.props.onChange("body_part_2", e.target.value)}
    pluralNoun3Changed(e) { this.props.onChange("plural_noun_3", e.target.value)}
    ingVerg2Changed(e) { this.props.onChange("ing_verb_2", e.target.value)}
    number2Changed(e) { this.props.onChange("number_2", e.target.value)}
    pluralNoun4Changed(e) { this.props.onChange("plural_noun_4", e.target.value)}
    verbChanged(e) { this.props.onChange("verb", e.target.value)}
    languageChanged(e) { this.props.onChange("language", e.target.value)}
    nounChanged(e) { this.props.onChange("noun", e.target.value)}
  }

  export default Editor;