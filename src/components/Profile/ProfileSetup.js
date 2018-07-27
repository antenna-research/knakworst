import React, { PureComponent } from 'react'
import './styles/ProfileSetup.css'
import NavComponent from "../Nav/NavComponent";
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { saveProfile } from '../../actions/profile'
import Multiselect from 'react-widgets/lib/Multiselect'
import './styles/ProfileSetup.css'
import 'react-widgets/dist/css/react-widgets.css'

class ProfileSetup extends PureComponent {

  handleSubmit = this.props.handleSubmit
  pristine = this.props.pristine
  reset = this.props.reset
  submitting = this.props.submitting

  renderMultiselect = ({ input, data, valueField, textField }) =>
    <Multiselect {...input}
      onBlur={() => input.onBlur()}
      value={input.value || []} // requires value to be an array
      data={data}
      valueField={valueField}
      textField={textField}
    />

  render() {
    return (<div>
      <NavComponent />
      <form onSubmit={this.props.handleSubmit(submit)} id="profile-form">
          <div>
            <label>Username</label><br/>
            <Field name="username" component="input" type="text" className="form-control"  />
          </div>

          <div>
            <label>First Name</label><br/>
            <Field name="firstName" component="input" type="text" className="form-control" />
          </div>

          <div>
            <label>Last Name</label><br/>
            <Field name="lastName" component="input" type="text" className="form-control" />
          </div>

          <div>
            <label>Age</label><br/>
            <Field name="age" component="input" type="text" className="form-control" />
          </div>

          <div>
             <label>Phone</label><br/>
             <Field name="phone" component="input" type="text" className="form-control" />
          </div>

          <div>
             <label>Email</label><br/>
             <Field name="email" component="input" type="email" className="form-control" />
          </div>

          <div>
             <label>City</label><br/>
             <Field name="address" component="input" type="text" className="form-control" />
          </div>

          <div><label>What genres do you play?</label><br/>
          <Field
          name="genres"
          component={this.renderMultiselect}
          data={[ 'Rock', 'Jazz', 'Funk', 'Reggae', 'SynthPop', 'Experimental' ]}/>
          </div>

          <div><label>What instruments do you play?</label><br/>
          <Field
          name="instruments"
          component={this.renderMultiselect}
          data={[ 'Piano', 'Guitar', 'Bass', 'Drums', 'Tambourine', 'Vocals', 'Flute', 'Violin', 'Viola', 'Cello', 'Contrabass' ]}/>
          </div>

          <div>
             <label>Youtube Link</label><br/>
             <Field name="youtube" component="input" type="text" className="form-control" />
          </div>

    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>)
  }

}

const submit = (values, x, other) => {
  const newData = {
    id: other.currentUserId,
    username: values.username,
    firstName: values.firstName,
    lastName: values.lastName,
    age: values.age,
    phone: values.phone,
    email: values.email,
    address: values.address,
    instruments: values.instruments,
    genres: values.genres,
    youtube: [values.youtube.split('&')[0].split('watch?v=')[1],]
  }
  // console.log(newData.youtube)
  other.saveProfile( newData, other.currentUserId )
  other.history.push('/profile/'+other.currentUserId)
}

const mapStateToProps = (state) => {
  let props = {
    currentUserId: state.currentUser,
    users: state.users
  }
  if (state.users && state.currentUser) {
    const currentProfile = state.users[parseInt(state.currentUser)]
    props['initialValues'] =  currentProfile
    if ( !props['initialValues'].youtube.includes('youtube') ) {
      props['initialValues'].youtube = "youtube.com/watch?v=" + currentProfile.youtube
    }
  }
  return props
}

ProfileSetup = reduxForm({
  form: 'profile',
  enableReinitialize: true,
  onSubmit: submit
})(ProfileSetup)

export default connect(mapStateToProps, { saveProfile })(withRouter(ProfileSetup))
