import React, { Component } from 'react';

import CharacterAttributes from './components/CharacterAttributes'
import CharacterBackgrounds from './components/CharacterBackgrounds'
import {attributes, backgrounds} from './fixtures/character-sheet'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false,
    }
  }

  beginEdit() {
    this.setState({
      editing: true
    })
  }

  cancelEdit() {
    this.setState({
      editing: true
    })
  }

  render() {
    return (
      <div className="App">
        <CharacterAttributes attributes={attributes} />
        <CharacterBackgrounds backgrounds={backgrounds} />
      </div>
    );
  }
}

export default App;
