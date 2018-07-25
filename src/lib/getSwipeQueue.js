import shuffle from 'lodash.shuffle';
import intersection from 'lodash.intersection';

export default getSwipeQueue = function(currentUserId, profiles, preferences, matches) {

  // is user in candidate's dislikes or matches?
  function isStillViable(userId, candidateMatches) {
    if ( candidateMatches.dislikes.includes(userId) ) return false
    if ( candidateMatches.matches.includes(userId) ) return false
    return true
  }

  // is at least one of the genres in the profile in the preferences?
  function genreMatches(profile, preferences) {
    if (intersection(profile.genres, preferences.genres).length > 0) return true    
    return false
  }

  // is at least one of the instruments in the profile in the preferences?
  function instrumentMatches(profile, preferences) {
    if (intersection(profile.instruments, preferences.instruments).length > 0) return true    
    return false
  }

  // is at least one of the locations in the profile in the preferences?
  function locationMatches(profile, preferences) {
    if (preferences.locations.includes(profile.address)) return true
    return false
  }

  // is the age in the profile within the range given in the preferences?
  function ageMatches(profile, preferences) {
    if (preferences.age['min'] < profile.age < preferences.age['max']) return true
    return false
  }

  allIds = Object.keys(profiles)

  const candidateIds = allIds
    .filter(candidateId => isStillViable(currentUserId, matches[candidateId]))
    .filter(candidateId => isStillViable(candidateId, matches[currentUserId]))
    .filter(candidateId => genreMatches(profiles[currentUserId], preferences[candidateId]))
    .filter(candidateId => genreMatches(profiles[candidateId], preferences[currentUserId]))
    .filter(candidateId => instrumentMatches(profiles[currentUserId], preferences[candidateId]))
    .filter(candidateId => instrumentMatches(profiles[candidateId], preferences[currentUserId]))
    .filter(candidateId => locationMatches(profiles[currentUserId], preferences[candidateId]))
    .filter(candidateId => locationMatches(profiles[candidateId], preferences[currentUserId]))
    .filter(candidateId => ageMatches(profiles[candidateId], preferences[currentUserId]))
    .filter(candidateId => ageMatches(profiles[currentUserId], preferences[candidateId]))

  return shuffle(candidateIds)

}