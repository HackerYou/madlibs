import React from 'react';
import Editor from './editor';
import Viewer from './viewer';
import EditToggle from './edit_toggle';

class MadLibs extends React.Component {
  constructor() {
    super();
    this.state = {
      words: {
        number_1: '',
        foreign_country: '',
        adverb: '',
        ing_verb_1: '',
        body_part_1: '',
        plural_noun_1: '',
        building: '',
        adjective: '',
        body_part_2: '',
        body_part_2: '',
        plural_noun_3: '',
        ing_verb_2: '',
        number_2: '',
        plural_noun_4: '',
        verb: '',
        plural_noun_3: '',
        language: '',
        noun: '',
      },
      mode: 'edit',
      errors: null
    }
    this.toggleMode = this.toggleMode.bind(this);
    this.wordUpdated = this.wordUpdated.bind(this);
    this.save = this.save.bind(this);
  }

  render() {
    const { mode, words, errors } = this.state;

    return <div>
      <EditToggle mode={ mode } onChange={ this.toggleMode } />
      {
        mode === 'edit' ?
          <Editor words={ words } errors={ errors } onChange={ this.wordUpdated } onSave={ this.save } /> : 
          <Viewer words={ words } />
      }
    </div>
  }

  toggleMode(mode) {
    this.setState({ mode: mode });
  }

  wordUpdated(field, value) {
    const words = this.state.words;
    words[field] = value;
    this.setState({ words: words });
  }

  save() {
    fetch('/words', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify(this.state.words)
    })
    .then(res => {
      if (res.ok) {
        this.setState({ errors: null });
        this.refresh();
        this.toggleMode('view');
      } else {
        window.scrollTo(0,0);
        res.json().then(errors => this.setState({ errors }))
      }
    })
  }

  refresh() {
    fetch('/words', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(words => this.setState({ words: words }));
  }

  componentDidMount() {
    this.refresh();
  }
}

export default MadLibs;