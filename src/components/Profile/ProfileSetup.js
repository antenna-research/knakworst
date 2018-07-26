import React, { PureComponent } from 'react'
import './styles/ProfileSetup.css'
import NavComponent from "../Nav/NavComponent";
import { connect } from 'react-redux'
import { saveProfile } from '../../actions/profile'

class ProfileSetup extends PureComponent {

  handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const currentUserProfile = this.props.users[parseInt(this.props.currentUserId)]
    if (this.state && this.state !== undefined) {

      const updatedProfileData = {
        id: this.props.currentUserId,
        username: this.state.username ? this.state.username : currentUserProfile.username,
        firstName: this.state.firstName ? this.state.firstName : currentUserProfile.firstName,
        lastName: this.state.lastName ? this.state.lastName : currentUserProfile.lastName,
        age: this.state.age ? this.state.age : currentUserProfile.age,
        phone: this.state.phone ? this.state.phone : currentUserProfile.phone,
        email: this.state.email ? this.state.email : currentUserProfile.email,
        address: this.state.address ? this.state.address : currentUserProfile.address,
        instruments: this.state.instruments ? this.state.instruments : currentUserProfile.instruments,
        genres: this.state.genres ? this.state.genres : currentUserProfile.genres,
      }
      console.log('updatedProfileData', updatedProfileData)
      this.props.saveProfile( updatedProfileData, this.props.currentUserId )
    }

  }

  render() {
    const currentUserProfile = this.props.users[this.props.currentUserId]
    return (<div id="profile-form">
      <NavComponent/>      
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />

      <h2>Set up your profile</h2>

      <form onSubmit={this.handleSubmit}>

        <p>
          <label>Username</label><br/>
          <input type="text" name="username" className="form-control" onChange={this.handleChange} defaultValue={this.props.users[parseInt(this.props.currentUserId)].username} />
        </p>

        <p>
          <label>First Name</label><br/>
          <input type="text" name="firstName" className="form-control" onChange={this.handleChange} defaultValue={currentUserProfile.firstName} />
        </p>

        <p><label>Last Name</label><br/>
           <input type="text" name="lastName" className="form-control" onChange={this.handleChange} defaultValue={currentUserProfile.lastName} />
        </p>

        <p><label>Age</label><br/>
           <input type="text" name="age" className="form-control" onChange={this.handleChange} defaultValue={currentUserProfile.age} />
        </p>

        <p><label>Phone</label><br/>
           <input type="text" name="phone" className="form-control" onChange={this.handleChange} defaultValue={currentUserProfile.phone} />
        </p>

        <p><label>Email</label><br/>
           <input type="text" name="email" className="form-control" onChange={this.handleChange} defaultValue={currentUserProfile.email} />
        </p>

        <p><label>City</label><br/>
           <input type="text" name="address" className="form-control" onChange={this.handleChange} defaultValue={currentUserProfile.address} />
        </p>

        <p><label>What genres do you play?</label><br/>
          <select multiple name="genres" className="form-control" onChange={this.handleChange} defaultValue={currentUserProfile.genres}>
            <option value="Rock">Rock</option>
            <option value="Jazz">Jazz</option>
            <option value="Funk">Funk</option>
            <option value="Classic">Classic</option>
          </select>
        </p>

        <p><label>What instruments do you play?</label><br/>
          <select multiple name="instruments" className="form-control" onChange={this.handleChange} defaultValue={currentUserProfile.instruments}>
          <option value="Piano">Piano</option>
          <option value="Guitar">Guitar</option>
          <option value="Bass">Bass</option>
          <option value="Drums">Drums</option>
          <option value="Flute">Flute</option>
          <option value="Timpani">Timpani</option>
          </select>
        </p>

        <p><label>Youtube Link</label><br/>
          <input type="text" name="youtube" className="form-control" onChange={this.handleChange} defaultValue={"youtube.com/watch?v="+currentUserProfile.youtube} />
        </p>

        <input type="submit" value="Submit" />
      </form>

    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    currentUserId: state.currentUser,
    users: state.users
  }
}

export default connect(mapStateToProps, { saveProfile })(ProfileSetup)
