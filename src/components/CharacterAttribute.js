import React, { useState } from 'react';

function CharacterAttribute(props) {
    const [editing, setEditing] = useState(false)
    const [temporaryValue, setTemporaryValue] = useState(null)
    const [value, setValue] = useState(null)

    const beginEdit = () => {
        setEditing(true)
    }

    const cancelEdit = () => {
        setEditing(false)
    }

    const saveValue = () => {
        setValue(temporaryValue)
        cancelEdit()
    }

        return (
            <div>
                <h3>{props.title}</h3>
                <p>{value ? value : props.default}</p>
                {
                    editing ?
                        (<div>
                            <input onChange={(event) => setTemporaryValue(event.target.value)}></input>
                            <button onClick={() => saveValue()}>Save</button>
                            <button onClick={() => cancelEdit()}>Cancel</button>
                        </div>) :
                        <button onClick={() => beginEdit()}>Edit</button>
                }

            </div>
        );
}

export default CharacterAttribute;
