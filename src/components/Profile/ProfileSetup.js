import React, { PureComponent } from 'react'
import NavComponent from "../Nav/NavComponent";
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { saveProfile } from '../../actions/profile'
import Multiselect from 'react-widgets/lib/Multiselect'
import './styles/ProfileSetup.css'
import 'react-widgets/dist/css/react-widgets.css'

class ProfileSetup extends PureComponent {

  // { handleSubmit, pristine, reset, submitting } = this.props
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

  submit = (values, x, other) => {
    console.log('values', values)
    console.log('other', other)
    console.log('other.currentUserId', other.currentUserId)
    values.id = other.currentUserId
    saveProfile( values, other.currentUserId )
    other.history.push('/profile/'+other.currentUserId)
  }

  render() {
    if (this.state) {
      console.log('this.state.form.values', this.state.form.profile.values)      
    }
    console.log('this', this)
    // console.log('this.props.initialValues', this.props.initialValues)

    return (<div>
      <NavComponent />
      { console.log('submit', submit) }
      <form onSubmit={this.props.handleSubmit(submit)} id="profile-form">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
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
             <Field name="youtube" component="input" type="text" className="form-control" /> { // // {"youtube.com/watch?v="+value.youtube} 
                                                                     }
          </div>

    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>)
  }

}

const submit = (values, x, other) => {
  console.log('values', values)
  console.log('other', other)
  console.log('other.currentUserId', other.currentUserId)
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
    youtube: values.youtube // .split('watch?v=')[1].split('&')[0]
  }
  other.saveProfile( newData, other.currentUserId )
  other.history.push('/profile/'+other.currentUserId)
}

const mapStateToProps = (state) => {
  let ob = {
    currentUserId: state.currentUser,
    users: state.users
  }
  if (state.users && state.currentUser) {
    ob['initialValues'] =  state.users[parseInt(state.currentUser)]  
  }
  return ob
}

ProfileSetup = reduxForm({
  form: 'profile',
  enableReinitialize: true,
  onSubmit: submit
})(ProfileSetup)

export default connect(mapStateToProps, { saveProfile })(withRouter(ProfileSetup))
