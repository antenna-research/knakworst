import React from 'react'
import './styles/Swipe.css'
import ProfileCard from "../Profile/ProfileCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default function swipe(props) {
  const currentCandidate = props.profile[props.currentCandidateId]
  if (!currentCandidate) return 'Loading'
  return (
    <div id={'swipe'}>
      {!props.currentUserId && !props.currentCandidateId && 'Loading'}
      <h1>Swipe page is rendered</h1>
      <ProfileCard profile={currentCandidate} />
      <button onClick={() => props.setDislikeUser(props.currentUserId, props.currentCandidateId)}>
        <FontAwesomeIcon icon={'times-circle'} size="2x" />
      </button>
      <button onClick={() => props.setLikeUser(props.currentUserId, props.currentCandidateId)}>
        <FontAwesomeIcon icon={'heart'} size="2x" />
      </button>
    </div>
  )
}
