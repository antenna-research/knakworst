import React from 'react'

export default function ProfileSetup(props) {

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }
  return (<div>
    <h2>Set up your profile</h2>

    <form onSubmit={this.handleSubmit}>

      { // username: 'Kinney1',
                                }
      <label>Username:<input type="text" name="username" onChange={this.handleChange} /></label>


      { // firstName: 'Kinney',
                                }
      <label>First Name:<input type="text" name="firstName" onChange={this.handleChange} /></label>


      { // lastName: 'Tate',
                                }
      <label>Last Name:<input type="text" name="lastName" onChange={this.handleChange} /></label>

      { // age: 20,
                                  }
      <label>Age:<input type="text" name="age" onChange={this.handleChange} /></label>

      { // phone: '974-566-3044',
                                }
      <label>Phone:<input type="text" name="phone" onChange={this.handleChange} /></label>

      { // email: 'Kinney@gmail.com',
                                }
      <label>Email:<input type="text" name="email" onChange={this.handleChange} /></label>


      { // address: 'Amsterdam',
                                }
      <label>City:<input type="text" name="address" onChange={this.handleChange} /></label>


      { // genres: ['Rock', 'Jazz', 'Pop'],
                                      }

      <label>What genres do you play?
      <select name="genres">
          <option value="">--Please choose an option--</option>
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
          <option value="Funk">Funk</option>
          <option value="Classic">Classic</option>
      </select>
      </label>

      { // instruments: ['Guitar'],
                                }
      <label>What instruments do you play?
      <select name="instruments">
          <option value="">--Please choose an option--</option>
          <option value="dog">Piano</option>
          <option value="cat">Guitar</option>
          <option value="hamster">Bass</option>
          <option value="parrot">Drums</option>
          <option value="parrot">Flute</option>
          <option value="parrot">Timpani</option>
      </select>
      </label>

      <label>Youtube Link:<input type="text" name="youtube" onChange={this.handleChange} /></label>

      <input type="submit" value="Submit" />
    </form>

  </div>)


}
/*

*/