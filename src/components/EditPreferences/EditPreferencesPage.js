import './styles/EditPreferences.css'
import React, { PureComponent } from 'react'
import { Form , FormGroup, Checkbox, ControlLabel, Grid, Col, FormControl, Button, Label, InputGroup, InputGroupAddon, HelpBlock} from 'react-bootstrap';
import {allGenres, allInstruments, allLocations} from '../../data/alternatives-per-preference';
import {withRouter} from 'react-router-dom';

class EditPreferencesPage extends PureComponent {
  

  state = {
    genres: this.props.preferences[this.props.currentUserId].genres.filter(genre =>
      allGenres.includes(genre)
    ),
    instruments: this.props.preferences[this.props.currentUserId].instruments.filter(instrument =>
      allInstruments.includes(instrument)
    ),
    locations: this.props.preferences[this.props.currentUserId].locations.filter(location =>
      allLocations.includes(location)
    ),
    age: {
      min: this.props.preferences[this.props.currentUserId].age.min,
      max: this.props.preferences[this.props.currentUserId].age.max
    }
  }

  handleChange = (e) => {
   if (e.target.checked && e.target.name !== 'max' && e.target.name !== 'min') {
      if (!this.state[e.target.value].includes(e.target.name)) {
        this.setState({ [e.target.value]: this.state[e.target.value].concat(e.target.name) })
      }
    } else if (!e.target.checked && e.target.name !== 'max' && e.target.name !== 'min') {
      const newArray = this.state[e.target.value].filter(item => {
        if (item !== e.target.name) {
          return item
        }
      })
      this.setState({ [e.target.value]: newArray })
    }
    if (e.target.name === 'min')
      this.setState({ age: { ...this.state.age, [e.target.name]: Number(e.target.value) } })
    if (e.target.name === 'max')
      this.setState({ age: { ...this.state.age, [e.target.name]: Number(e.target.value) } })
  }

  getValidationState = () => {
    const minAge = this.state.age.min
    const maxAge = this.state.age.max
    if (minAge < 0 || maxAge < 0) return 'error'
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.sendNewPreferences(this.state)
    this.props.history.push('/swipe')
  }

  render() {
    return (
      <div id="preferencespage">
              <div>
                <h1>Edit your preferences</h1>
                <form onSubmit={this.handleSubmit} className="needs-validation form-wrapper" noValidate>
                 {!this.props.preferences &&
                  <div>
                    Loading
                  </div>
                  }

                  <div className="card-body">
                  {this.props.preferences &&
                  <div>
                    <h2>Genres</h2>

                    <ul>
                    {allGenres.map(genre => {

                      if (this.props.preferences[this.props.currentUser].genres.includes(genre)) {
                        return (
                          <div>
                            <li>
                              <FormControlLabel control={
                                <Checkbox value="genres" defaultChecked={true}
                                  name={genre}
                                  labelStyle={{color: '#fff'}}
                                  iconStyle={{fill: '#fff'}}
                                  inputStyle={{color:'#ff4f00'}}
                                  style={{color:'#ff4f00'}}
                                  onChange={this.handleChange}>
                                  {genre}
                                  </Checkbox>}
                              label={genre}/>
                           </li>
                         </div>
                        )
                      } else {
                        return (
                          <div>
                          <li>
                            <FormControlLabel control={
                                <Checkbox
                                    value="genres"
                                    name={genre}
                                    labelStyle={{color: '#fff'}}
                                    iconStyle={{fill: '#fff'}}
                                    inputStyle={{color:'#ff4f00'}}
                                    style={{color:'#ff4f00'}}
                                    onChange={this.handleChange}>
                                    {genre}
                                  </Checkbox>}
                            label={genre}/>

                          </li>
                        </div>

                        )
                      }
                    })}
                    </ul>
                  </div>
                  }
                  </div>

                  {this.props.preferences && 
                  <div className="card-body">
                    <h2>Instruments</h2>
                    <ul>
                    {allInstruments.map(instrument => {
                      if (
                        this.props.preferences[this.props.currentUserId].instruments.includes(
                          instrument
                        )
                      ) {
                        return (
                          <div>
                            <li>
                              <FormControlLabel control={
                                  <Checkbox
                                    value="instruments"
                                    defaultChecked={true}
                                    name={instrument}
                                    labelStyle={{color: '#fff'}}
                                    iconStyle={{fill: '#fff'}}
                                    inputStyle={{color:'#ff4f00'}}
                                    style={{color:'#ff4f00'}}
                                    onChange={this.handleChange}>
                                    {instrument}
                                    </Checkbox>}
                                label={instrument}/>
                           </li>
                         </div>
                        )
                      } else {
                        return (
                          <div>
                            <li>
                              <FormControlLabel control={
                                    <Checkbox
                                      value="instruments"
                                      name={instrument}
                                      labelStyle={{color: '#fff'}}
                                      iconStyle={{fill: '#fff'}}
                                      inputStyle={{color:'#ff4f00'}}
                                      style={{color:'#ff4f00'}}
                                      onChange={this.handleChange}>
                                      {instrument}
                                      </Checkbox>}
                                  label={instrument}/>
                            </li>
                          </div>
                        )
                      }
                    })}
                    </ul>
                  </div>
                  }
                  {this.props.preferences &&
                  <div className="card-body">

                    <h2>Locations</h2>
                    <ul>
                    {allLocations.map(location => {
                      if (
                        this.props.preferences[this.props.currentUserId].locations.includes(
                          location
                        )
                      ) {
                        return (
                          <div>
                            <li>
                              <FormControlLabel control={
                                    <Checkbox
                                      value="locations"
                                      defaultChecked={true}
                                      name={location}
                                      labelStyle={{color: '#fff'}}
                                      iconStyle={{fill: '#fff'}}
                                      inputStyle={{color:'#ff4f00'}}
                                      style={{color:'#ff4f00'}}
                                      onChange={this.handleChange}>
                                      {location}
                                      </Checkbox>}
                                  label={location}/>
                          </li>
                         </div>
                        )
                      } else {
                        return (
                          <div>
                            <li>
                              <FormControlLabel control={
                                    <Checkbox
                                      value="locations"
                                      name={location}
                                      labelStyle={{color: '#fff'}}
                                      iconStyle={{fill: '#fff'}}
                                      inputStyle={{color:'#ff4f00'}}
                                      style={{color:'#ff4f00'}}
                                      onChange={this.handleChange}>
                                      {location}
                                      </Checkbox>}
                                  label={location}/>
                            </li>
                          </div>
                        )
                      }
                    })}
                    </ul>
                  </div>
                  }
                  <div>

                        <Form horizontal className="card-body">
                          <h2>Age range</h2>
                          <FormGroup controlId="formHorizontalEmail" validationState={this.getValidationState()}>
                            <Col componentClass={ControlLabel} sm={5}>
                            </Col>
                            <Col sm={10}>
                              <FormControl onChange={this.handleChange} type="number" name="min" placeholder="The minimum age"/>
                            </Col>
                            <Col componentClass={ControlLabel} sm={7}>
                            <p className="control-message">Enter a minimum age</p>
                            </Col>
                          </FormGroup>

                          <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={5}>
                            </Col>
                            <Col sm={10}>
                              <FormControl onChange={this.handleChange} type="number" name="max" placeholder="The maximum age" />
                            </Col>
                            <Col componentClass={ControlLabel} sm={7}>
                            <p className="control-message">Enter a maximum age</p>
                            </Col>
                          </FormGroup>
                        </Form>

                  </div>

                  {(this.state.age.min >= 0 && this.state.age.max > 0 && (this.state.age.min < this.state.age.max))  &&
                    <div className="btn-card">
                    <Button type="submit" className="btn">Save preferences</Button>
                  </div> 
                  }

                  {(this.state.age.min < 0 || this.state.age.max <=0 || (this.state.age.min > this.state.age.max)) && 
                    <div className="btn-card">
                      <p>
                        <div class="alert alert-danger" role="alert">
                          Make sure that you enter a correct age range!
                        </div>
                      </p>

                      <Button type="submit" disabled className="btn" >Save preferences</Button>

                  </div>
                  }

                  </form>

              </div>
         </div>
    )
  }
}

export default withRouter(EditPreferencesPage)
