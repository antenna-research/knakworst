import React from 'react'

const Signup = props => (
  <div>
    <form onSubmit={e => e.preventDefault()}>
      <label>email</label>
      <input type="email" name="email" onChange={props.onInputChange} value={props.email} />
      <label>pass</label>
      <input
        type="password"
        name="password"
        onChange={props.onInputChange}
        value={props.password}
      />
      <button type="submit" onClick={props.onCreateUser}>
        Sign up!
      </button>
      <button type="submit" onClick={props.onLogin}>
        Sign in!
      </button>
    </form>
  </div>
)

export default Signup
