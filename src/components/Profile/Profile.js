import React from 'react'

export default function Profile(props) {

  return (<div>
      <h3>{ showGuess( props.word, props.letters ) }</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="letter" onChange={handleChange} />
        </label>
      </form>
      <h4> Wrong guesses so far: { wrongGuessCount( props.word, props.letters ) } </h4>
      <button onClick={props.restart} >Play Again!</button>
  </div>)

}