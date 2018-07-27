import './styles/EditPreferences.css'
import React, { PureComponent } from 'react'
import { Form , FormGroup, Checkbox, ControlLabel, Grid, Col, FormControl, Button, Label, InputGroup, InputGroupAddon, HelpBlock} from 'react-bootstrap';
import {allGenres, allInstruments, allLocations} from '../../data/alternatives-per-preference';
import {withRouter} from 'react-router-dom';

class EditPreferencesPage extends PureComponent {

  state = {
    genres: this.props.preferences[this.props.currentUserId].genres.filter(genre => allGenres.includes(genre)),
    instruments: this.props.preferences[this.props.currentUserId].instruments.filter(instrument => allInstruments.includes(instrument)),
    locations: this.props.preferences[this.props.currentUserId].locations.filter(location => allLocations.includes(location)),
    age: {
      min: this.props.preferences[this.props.currentUserId].age.min,
      max: this.props.preferences[this.props.currentUserId].age.max
    }
  }

  // componentDidMount=() =>{
  //   this.setState()
  // }

  handleChange = (e) => {
   if (e.target.checked && e.target.name !== 'max' && e.target.name !== 'min') {
      if (!this.state[e.target.value].includes(e.target.name)) {
        this.setState({[e.target.value]: this.state[e.target.value].concat(e.target.name)})
        }
      }
      else if (!e.target.checked && e.target.name !== 'max' && e.target.name !== 'min') {
      const newArray = this.state[e.target.value].filter(item => {if (item !== e.target.name) {
        return item}})
      this.setState({[e.target.value]: newArray})
      }
   if(e.target.name === 'min') this.setState({ age: { ...this.state.age, [e.target.name]: Number(e.target.value)} });
   if(e.target.name === 'max') this.setState({ age: { ...this.state.age, [e.target.name]: Number(e.target.value)} });
  }

  getValidationState = () => {
    const minAge = this.state.age.min;
    const maxAge = this.state.age.max
    if (minAge < 0 || maxAge < 0) return 'error'
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.sendNewPrefences(this.state)
    this.props.history.push('/swipe')
  }

  render() {
    console.log(this.props.preferences[this.props.currentUserId].age.min)
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
        <div className="container">
          <div className="col md-6">
            <div className="card">
              <form onSubmit={this.handleSubmit} className="needs-validation" noValidate>

                {!this.props.preferences &&
                  <div>
                    Loading
                  </div>
                }

                <div className="form-group card-body">
                  {this.props.preferences &&
                    <div>
                      <ControlLabel>Genres</ControlLabel>
                      {allGenres.map(genre => {

                        if (this.props.preferences[this.props.currentUserId].genres.includes(genre)) {
                          return (

                            <div key={genre}>

                              <Checkbox value="genres" defaultChecked={true} name={genre} onChange={this.handleChange}>{genre}</Checkbox>
                            </div>
                          )
                        } else {
                          return (
                            <div  key={genre}>
                              <Checkbox value="genres" name={genre} onChange={this.handleChange}>{genre}</Checkbox>
                            </div>
                          )
                        }
                      })}
                    </div>
                  }
                </div>



                {this.props.preferences &&
                  <div className="card-body">
                    <ControlLabel>Instruments</ControlLabel>
                    {allInstruments.map(instrument => {

                      if (this.props.preferences[this.props.currentUserId].instruments.includes(instrument)) {
                        return (
                          <div  key={instrument}>
                            <Checkbox value="instruments" defaultChecked={true} name={instrument} onChange={this.handleChange}>{instrument}</Checkbox>
                          </div>
                        )
                      } else {
                        return (
                          <div key={instrument}>
                            <Checkbox value="instruments" name={instrument} onChange={this.handleChange}>{instrument}</Checkbox>
                          </div>
                        )
                      }
                    })}
                  </div>
                }


                {this.props.preferences &&
                  <div className="card-body">
                    <ControlLabel>Locations</ControlLabel>
                    {allLocations.map(location => {

                      if (this.props.preferences[this.props.currentUserId].locations.includes(location)) {
                        return (
                          <div key={location}>
                            <Checkbox value="locations" defaultChecked={true} name={location} onChange={this.handleChange}>{location}</Checkbox>
                          </div>
                        )
                      } else {
                        return (
                          <div key={location}>
                            <Checkbox value="locations" onChange={this.handleChange} name={location} >{location}</Checkbox>
                          </div>
                        )
                      }
                    })}
                  </div>
                  }


                  <div className="card-body">
                  <ControlLabel>Adjust age range</ControlLabel>
                    <FormGroup validationState={this.getValidationState()}>
                      <InputGroup>
                        <InputGroup.Addon>Minimum age</InputGroup.Addon>
                        <FormControl onChange={this.handleChange} type="number" name="min" placeholder="The minimum age" ref="minAge"/>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup validationState={this.getValidationState()}>
                    <InputGroup>
                        <InputGroup.Addon>Maximum age</InputGroup.Addon>
                        <FormControl onChange={this.handleChange} type="number" name="max" placeholder="The maximum age" required ref="maxAge"/>
                        <div class="invalid-feedback">
                         Please provide a valid city.
                       </div>
                      </InputGroup>
                    </FormGroup>
                    </div>



                  {(this.state.age.min >= 0 && this.state.age.max > 0 && (this.state.age.min < this.state.age.max))  &&
                    <div className="card-body">
                    <Button type="submit">Save preferences</Button>
                  </div>
                  }

                  {(this.state.age.min < 0 || this.state.age.max <=0 || (this.state.age.min > this.state.age.max)) &&
                    <div className="card-body">
                    <p>
                      <div class="alert alert-danger" role="alert">
                         Make sure that you enter a correct age range!
                       </div>
                    </p>
                    <Button type="submit" disabled >Save preferences</Button>
                  </div>
                  }


                  </form>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default withRouter(EditPreferencesPage)
