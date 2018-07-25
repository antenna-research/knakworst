import React from 'react'
import sdafas from 'bootstrap'

export default function ProfileSetup(props) {

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // if (this.state.name && this.state.description) {
    //   this.props.addPizza({
    //     name: this.state.name,
    //     description: this.state.description,
    //     ingredients: []
    //   })
    // }
  }

  return (<div>
    <h2>Set up your profile</h2>

      { // username: 'Kinney1',
        // firstName: 'Kinney',
        // lastName: 'Tate',
        // age: 20,
        // phone: '974-566-3044',
        // email: 'Kinney@gmail.com',
        // address: 'Amsterdam',
        // instruments: ['Guitar'],
                                }

    <form onSubmit={handleSubmit}>

      <p>
        <label>Username</label><br/>
        <input type="text" name="username" class="form-control form-control-lg" onChange={handleChange} />
      </p>

      <p><label>First Name:<input type="text" name="firstName" class="form-control" onChange={handleChange} /></label></p>
      <p><label>Last Name:<input type="text" name="lastName" class="form-control" onChange={handleChange} /></label></p>
      <p><label>Age:<input type="text" name="age" class="form-control" onChange={handleChange} /></label></p>
      <p><label>Phone:<input type="text" name="phone" class="form-control" onChange={handleChange} /></label></p>
      <p><label>Email:<input type="text" name="email" class="form-control" onChange={handleChange} /></label></p>
      <p><label>City:<input type="text" name="address" class="form-control" onChange={handleChange} /></label></p>
      <p><label>What genres do you play?
         <select name="genres" class="form-control">
          <option value="">--Please choose an option--</option>
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
          <option value="Funk">Funk</option>
          <option value="Classic">Classic</option>
          </select>
          </label></p>
      <p><label>What instruments do you play?
         <select name="instruments" class="form-control">
          <option value="">--Please choose an option--</option>
          <option value="Piano">Piano</option>
          <option value="Guitar">Guitar</option>
          <option value="Bass">Bass</option>
          <option value="Drums">Drums</option>
          <option value="Flute">Flute</option>
          <option value="Timpani">Timpani</option>
          </select>
          </label></p>

      <label>Youtube Link:<input type="text" name="youtube" class="form-control" onChange={handleChange} /></label>

      <input type="submit" value="Submit" />
    </form>

  </div>)

}
/*

*/