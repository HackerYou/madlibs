import React from 'react';
import Field from './field';

class Editor extends React.Component {
  constructor() {
    super();
    this.number1Changed = this.number1Changed.bind(this);
    this.foreignCountryChanged = this.foreignCountryChanged.bind(this);
    this.adverbChanged = this.adverbChanged.bind(this);
    this.ingVerb1Changed = this.ingVerb1Changed.bind(this);
    this.bodyPartChanged = this.bodyPartChanged.bind(this);
    this.pluralNounChanged = this.pluralNounChanged.bind(this);
    this.buildingChanged = this.buildingChanged.bind(this);
    this.adjectiveChanged = this.adjectiveChanged.bind(this);
    this.bodyPart2Changed = this.bodyPart2Changed.bind(this);
    this.pluralNoun3Changed = this.pluralNoun3Changed.bind(this);
    this.ingVerg2Changed = this.ingVerg2Changed.bind(this);
    this.number2Changed = this.number2Changed.bind(this);
    this.pluralNoun4Changed = this.pluralNoun4Changed.bind(this);
    this.verbChanged = this.verbChanged.bind(this);
    this.languageChanged = this.languageChanged.bind(this);
    this.nounChanged = this.nounChanged.bind(this);
  }


  render() {
      console.log(this.props.errors);
      const { words } = this.props;
      let errors = {};
      if (this.props.errors) {
        errors = this.props.errors.errors;
      }
      console.log(errors);

      return <div>
        {
          this.props.errors ? <div className='error'>There were some errors saving your madlibs!</div> :
                              null
        }

        <Field label="Number" error={ errors.number_1 } value={ words.number_1 } onChange={ this.number1Changed } />
        <Field label="Foreign Country" error={ errors.foreign_country } value={ words.foreign_country } onChange={ this.foreignCountryChanged } />
        <Field label="Adverb" error={ errors.adverb } value={ words.adverb } onChange={ this.adverbChanged } />
        <Field label="Verb ending in ing" error={ errors.ing_verb_1 } value={ words.ing_verb_1 } onChange={ this.ingVerb1Changed } />
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

        <button onClick={ this.props.onSave }>Save</button>
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