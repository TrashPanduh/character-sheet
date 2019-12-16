import React from 'react';

import CharacterAttributes from './components/CharacterAttributes'
import CharacterBackgrounds from './components/CharacterBackgrounds'
import {attributes, backgrounds} from './fixtures/character-sheet'
import './App.css';

function App(props) {
  return (
    <div className="App">
      <CharacterAttributes attributes={attributes} />
      <CharacterBackgrounds backgrounds={backgrounds} />
    </div>
  );
}

export default App;
