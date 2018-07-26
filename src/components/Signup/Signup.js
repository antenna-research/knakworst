import React from 'react'

const Signup = props => (
  <div>
    <form onSubmit={props.onSubmit}>
      <label>email</label>
      <input type="email" name="email" onChange={props.onInputChange} value={props.email} />
      <label>pass</label>
      <input
        type="password"
        name="password"
        onChange={props.onInputChange}
        value={props.password}
      />
      <button type="submit">Sign up!</button>
    </form>
  </div>
)

export default Signup
