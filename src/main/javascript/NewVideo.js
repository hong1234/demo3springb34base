import React, { useState } from 'react';

export default function NewVideo () {
    const [inputText, setInputText] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()
        await fetch("/api/videos", {
            method: "POST",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify({name: inputText})
        }).then(response =>
            window.location.href = "/react")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   value={inputText}
                   onChange={ event => setInputText(event.target.value) }/>
            <button type="submit">Submit</button>
        </form>
    )
}

