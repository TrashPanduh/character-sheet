import React from 'react';

function CharacterBackgrounds(props) {
  return (
    props.backgrounds
      .map(background => {
          return (
            <div>
              <p>{background.title}</p>
              <p>{background.value}</p>
            </div>
          )
      })
  );
}

export default CharacterBackgrounds;