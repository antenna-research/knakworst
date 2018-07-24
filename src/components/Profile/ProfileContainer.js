import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Profile from '../../components/Profile/Profile'

class ProfileContainer extends PureComponent {

  
  render() {
   
    return (
      <div>
  
       <Profile profile={this.props.users}/>
       
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(ProfileContainer)