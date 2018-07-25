import React from 'react'
import './styles/Swipe.css'
import Profile from "../Profile/ProfileCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default function swipe(props) {
  return (
    <div id={'swipe'}>
      {!props.currentUserId && !props.currentCandidateId && 'Loading'}
      <Profile profile={props.profile} userId={props.currentCandidateId}/>
      <button className={'swipe-button'} onClick={() => props.setDislikeUser(props.currentUserId, props.currentCandidateId)}>
        <FontAwesomeIcon icon={'times-circle'} size="3x" />
      </button>
      <button className={'swipe-button'} onClick={() => props.setLikeUser(props.currentUserId, props.currentCandidateId)}>
        <FontAwesomeIcon icon={'heart'} size="3x" />
      </button>
    </div>

  )
}