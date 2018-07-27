import React, { PureComponent } from 'react'
import './styles/ProfileSetup.css'
import NavComponent from "../Nav/NavComponent";
import { withRouter } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { saveProfile } from '../../actions/profile'
import Multiselect from 'react-widgets/lib/Multiselect'
import Combobox from 'react-widgets/lib/Combobox'
import './styles/ProfileSetup.css'
import 'react-widgets/dist/css/react-widgets.css'

class ProfileSetup extends PureComponent {

  handleSubmit = this.props.handleSubmit;
  pristine = this.props.pristine;
  reset = this.props.reset;
  submitting = this.props.submitting;

  // validation
  required = value => (value || typeof value === 'number' ? undefined : 'Required');
  maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
  maxLength15 = this.maxLength(15);
  minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;
  minLength2 = this.minLength(2);
  number = value =>
    value && isNaN(Number(value)) ? 'Must be a number' : undefined;
  minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;
  minValue13 = this.minValue(13);
  email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? 'Invalid email address'
      : undefined;
  tooYoung = value =>
    value && value < 13
      ? 'You do not meet the minimum age requirement!'
      : undefined;
  aol = value =>
    value && /.+@aol\.com/.test(value)
      ? 'aol? ...seriously?'
      : undefined;
  alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
      ? 'Only alphanumeric characters'
      : undefined;
  phoneNumber = value =>
    value && !/^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/i.test(value)
      ? 'Invalid phone number, must be 10 digits'
      : undefined;



  renderMultiselect = ({ input, data, valueField, textField }) =>
    <Multiselect {...input}
      onBlur={() => input.onBlur()}
      value={input.value || []} // requires value to be an array
      data={data}
      valueField={valueField}
      textField={textField}
    />;

  renderCombobox = ({ input, data }) =>
    <Combobox {...input}
      data={data} />;


  youtubeSerial = value => value && [value.split('&')[0].split('watch?v=')[1],];
  youtubeUrl = value => {
    if ( !value.includes('youtube') ) {
      return "youtube.com/watch?v=" + value
    }
    return value
  };

  renderField = ({
    input,
    label,
    type,
    name,
    meta: { touched, error, warning }
  }) => (<div>
      <label>{label}</label><br/>
        <input {...input} className="form-control" name={name} type={type} />
        {touched &&
          ((error && <span className="validation-error">{error}</span>) ||
            (warning && <span>{warning}</span>))}
  </div>)

  render() {
    return (<div>
      <NavComponent />
      <form onSubmit={this.props.handleSubmit(submit)} id="profile-form">
        <Field name="username" component="input" type="text" className="form-control" 
        label="Username" component={this.renderField} validate={[this.required, this.maxLength15, this.minLength2]} warn={this.alphaNumeric} />

        <Field name="firstName" component="input" type="text" className="form-control" 
        label="First Name" component={this.renderField} validate={[this.required]} />

        <Field name="lastName" component="input" type="text" className="form-control" 
        label="Last Name" component={this.renderField} validate={[this.required]} />

        <Field name="age" component="input" type="text" className="form-control" 
        label="Age" component={this.renderField} validate={[this.required, this.number, this.minValue13]} />

        <Field name="phone" component="input" type="text" className="form-control" 
        label="Phone Number" component={this.renderField} validate={[this.required, this.phoneNumber]} />

        <Field name="email" component="input" type="email" className="form-control" 
        label="Email" component={this.renderField} validate={[this.required, this.email]} />

        <div><label>What city do you live in?</label><br/>
        <Field
        name="address"
        component={this.renderCombobox}
        data={[ 'Amsterdam', 'Leiden', 'Rotterdam', 'Utrecht', 'Den Haag' ]}/>
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

        <Field name="youtube" component="input" type="text" format={this.youtubeUrl} parse={this.youtubeSerial} className="form-control"  
        label="Youtube Link" component={this.renderField} validate={[this.required]} />

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
    youtube: values.youtube //.split('&')[0].split('watch?v=')[1],]
  }
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
  }
  return props
}

ProfileSetup = reduxForm({
  form: 'profile',
  enableReinitialize: true,
  onSubmit: submit
})(ProfileSetup)

export default connect(mapStateToProps, { saveProfile })(withRouter(ProfileSetup))
