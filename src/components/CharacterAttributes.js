import React from 'react'
import CharacterAttribute from './CharacterAttribute'

function CharacterAttributes(props) {
    return props.attributes.map(
        attribute => <CharacterAttribute title={attribute.title} default={attribute.default} />
    )
}

export default CharacterAttributes;