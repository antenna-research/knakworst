import './styles/EditPreferences.css'
import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'
import { Form , FormGroup, Checkbox, ControlLabel, Grid, Col, FormControl, Button, Label} from 'react-bootstrap';
import {allGenres, allInstruments, allLocations} from '../../data/alternatives-per-preference' ;
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>;





export default class EditPreferencesPage extends PureComponent {
 

  state = {
    genres: this.props.preferences[this.props.currentUser].genres.filter(genre => allGenres.includes(genre)),
    instruments: this.props.preferences[this.props.currentUser].instruments.filter(instrument => allInstruments.includes(instrument)),
    locations: this.props.preferences[this.props.currentUser].locations.filter(location => allLocations.includes(location)),
    age: {
      min: this.props.preferences[this.props.currentUser].age.min,
      max: this.props.preferences[this.props.currentUser].age.max
    }
  }

  handleChange = (e) => {
   if (e.target.checked) {
     if (!this.state[e.target.value].includes(e.target.name)) {
       if(e.target.value === 'genres') {
          this.setState({
            [e.target.value]: this.state.genres.concat(e.target.name)
          })
       } else if(e.target.value === 'instruments') {
          this.setState({
            [e.target.value]: this.state.instruments.concat(e.target.name)
          })
       } else if (e.target.value === 'locations') {
          this.setState({
          [e.target.value]: this.state.locations.concat(e.target.name)
         })
       }
      
     } 
   } else if (!e.target.checked) {

      if (e.target.value === "genres") {
        const newArray = this.state.genres.filter(genre => {
          if (genre !== e.target.name) {
            return genre
          }
        })
         this.setState({
           [e.target.value]: newArray
        })
      } 

      if (e.target.value === "instruments") {
        const newArray = this.state.instruments.filter(instrument => {
          if (instrument !== e.target.name) {
            return instrument
          }
        })
         this.setState({
           [e.target.value]: newArray
        })
      } 

      if (e.target.value === "locations") {
        const newArray = this.state.locations.filter(location => {
          if (location !== e.target.name) {
            return location
          }
        })
        this.setState({
          [e.target.value]: newArray
       })
      }
   
      if(e.target.name === 'min') this.setState({ age: { ...this.state.age, [e.target.name]: e.target.value} });
      if(e.target.name === 'max') this.setState({ age: { ...this.state.age, [e.target.name]: e.target.value} });
   }

  }

  handleSubmit = (e) => {
    e.preventDefault()
    
  }

  render() {

    const prevState = {...this.state}
    const prevAge = prevState.age
    const agemin = prevAge.min
    console.log(
      agemin
    )


    return (
      <div>
        <div className="container">
          <div className="col md-6">
              <div className="form profile-form">
            
                 {!this.props.preferences && 
                  <div>
                    Loading
                  </div>
                  }
                  
                  <div className="form-group">
                  {this.props.preferences && 
                  <div>
                    <ControlLabel>Genres</ControlLabel>
                    {allGenres.map(genre => {
                
                      if (this.props.preferences[this.props.currentUser].genres.includes(genre)) {
                        return (
                          <div>
                          <Checkbox value="genres" defaultChecked={true} name={genre} onChange={this.handleChange}>{genre}</Checkbox>
                         </div>
                        )
                      } else {
                        return (
                          <div>
                            <Checkbox value="genres" name={genre} onChange={this.handleChange}>{genre}</Checkbox>
                          </div>
                        )
                      }    
                    })}
                  </div>
                  }
                  </div>
                  
                  <FormGroup>
                  {this.props.preferences && 
                  <div>
                    <ControlLabel>Instruments</ControlLabel>
                    {allInstruments.map(instrument => {
                
                      if (this.props.preferences[this.props.currentUser].instruments.includes(instrument)) {
                        return (
                          <div>
                           <Checkbox value="instruments" defaultChecked={true} name={instrument} onChange={this.handleChange}>{instrument}</Checkbox>
                         </div>
                        )
                      } else {
                        return (
                          <div>
                            <Checkbox value="instruments" name={instrument} onChange={this.handleChange}>{instrument}</Checkbox>
                          </div>
                        )
                      }    
                    })}
                  </div>
                  }
                  </FormGroup>
  
                   <FormGroup>
                  {this.props.preferences && 
                  <div>
                    <ControlLabel>Locations</ControlLabel>
                    {allLocations.map(location => {
                
                      if (this.props.preferences[this.props.currentUser].locations.includes(location)) {
                        return (
                          <div>
                          <Checkbox value="locations" defaultChecked={true} name={location} onChange={this.handleChange}>{location}</Checkbox>
                         </div>
                        )
                      } else {
                        return (
                          <div>
                            <Checkbox value="locations" onChange={this.handleChange} name={location} >{location}</Checkbox>
                          </div>
                        )
                      }    
                    })}
                  </div>
                  }
                  </FormGroup>

                  <FormGroup>
                      <p>Your current age range:</p>
                      <p>{this.state.age.min} - {this.state.age.max}</p>
                      <p>
                        <label>New mininum age</label>
                        <input onChange={this.handleChange} type="number" name="min" placeholder="The minimum age"/>
                      </p>
                      <p>
                        <label>New maximum age</label>
                        <input onChange={this.handleChange} type="number" name="max"placeholder="The maximum age"/> 
                      </p> 
                  </FormGroup> 
                  <Button type="submit">Save preferences</Button>
              </div>
            </div>
        </div>
      </div>
    )
  }
}