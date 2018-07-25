import React, { PureComponent } from 'react'
import './styles/ProfileSetup.css'

export default class ProfileSetupContainer extends PureComponent {

  // username: 'Kinney1',
  // firstName: 'Kinney',
  // lastName: 'Tate',
  // age: 20,
  // phone: '974-566-3044',
  // email: 'Kinney@gmail.com',
  // address: 'Amsterdam',
  // instruments: ['Guitar'],

  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // todo: validate, normalize
    let updatedProfileData = this.props.currentUserProfile
    if (this.state && this.state !== undefined) {
      updatedProfileData = {
        id: this.props.currentUserId,
        username: this.state.username ? this.state.username : this.props.currentUserProfile.username,
        firstName: this.state.firstName ? this.state.firstName : this.props.currentUserProfile.firstName,
        lastName: this.state.lastName ? this.state.lastName : this.props.currentUserProfile.lastName,
        age: this.state.age ? this.state.age : this.props.currentUserProfile.age,
        phone: this.state.phone ? this.state.phone : this.props.currentUserProfile.phone,
        email: this.state.email ? this.state.email : this.props.currentUserProfile.email,
        address: this.state.address ? this.state.address : this.props.currentUserProfile.address,
        instruments: this.state.instruments ? this.state.instruments : this.props.currentUserProfile.instruments,
      }
    }
    this.props.saveProfile(updatedProfileData)
  }

  render() {
    console.log('this.props.currentUserProfile.username', this.props.currentUserProfile.username)
    return (<div id="profile-form">
      <h2>Set up your profile</h2>

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />

      <form onSubmit={this.handleSubmit}>

        <p>
          <label>Username</label><br/>
          <input type="text" name="username" className="form-control" onChange={this.handleChange} defaultValue={this.props.currentUserProfile.username} />
        </p>

        <p>
          <label>First Name</label><br/>
          <input type="text" name="firstName" className="form-control" onChange={this.handleChange} defaultValue={this.props.currentUserProfile.firstName} />
        </p>

        <p><label>Last Name</label><br/>
           <input type="text" name="lastName" className="form-control" onChange={this.handleChange} defaultValue={this.props.currentUserProfile.lastName} />
        </p>

        <p><label>Age</label><br/>
           <input type="text" name="age" className="form-control" onChange={this.handleChange} defaultValue={this.props.currentUserProfile.age} />
        </p>

        <p><label>Phone</label><br/>
           <input type="text" name="phone" className="form-control" onChange={this.handleChange} defaultValue={this.props.currentUserProfile.phone} />
        </p>

        <p><label>Email</label><br/>
           <input type="text" name="email" className="form-control" onChange={this.handleChange} defaultValue={this.props.currentUserProfile.email} />
        </p>

        <p><label>City</label><br/>
           <input type="text" name="address" className="form-control" onChange={this.handleChange} defaultValue={this.props.currentUserProfile.address} />
        </p>

        <p><label>What genres do you play?</label><br/>
          <select multiple name="genres" className="form-control" onChange={this.handleChange} defaultValue={this.props.currentUserProfile.genres}>
            <option value="Rock">Rock</option>
            <option value="Jazz">Jazz</option>
            <option value="Funk">Funk</option>
            <option value="Classic">Classic</option>
          </select>
        </p>

        <p><label>What instruments do you play?</label><br/>
          <select multiple name="instruments" className="form-control" onChange={this.handleChange} defaultValue={this.props.currentUserProfile.instruments}>
          <option value="Piano">Piano</option>
          <option value="Guitar">Guitar</option>
          <option value="Bass">Bass</option>
          <option value="Drums">Drums</option>
          <option value="Flute">Flute</option>
          <option value="Timpani">Timpani</option>
          </select>
        </p>

        <p><label>Youtube Link</label><br/>
          <input type="text" name="youtube" className="form-control" onChange={this.handleChange} defaultValue={"youtube.com/watch?v="+this.props.currentUserProfile.youtube} />
        </p>

        <input type="submit" value="Submit" />
      </form>

    </div>)
  }
}
/*

*/