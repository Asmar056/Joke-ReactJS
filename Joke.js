import React from "react"

export default function Joke(probs) {
    return(
        <div>
            <label>Setup:</label> <span>{probs.setup}</span>
            <br/>
            <label>Punchline:</label> <span>{probs.punchline}</span>
            <br/><br/>
        </div>
    )
}