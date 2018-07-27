import shuffle from 'lodash/shuffle'
import intersection from 'lodash/intersection'

const getSwipeQueue = (currentUserId, profiles, preferences, matches) => {
  // is user in candidate's dislikes or matches?
  function isStillViable(userId, candidateMatches) {
    if (!userId || !candidateMatches) return false
    if (candidateMatches.dislikes && candidateMatches.dislikes.includes(userId)) return false
    if (candidateMatches.matches && candidateMatches.matches.includes(userId)) return false
    return true
  }

  // is at least one of the genres in the profile in the preferences?
  function genreMatches(profile, preferences) {
    if (!profile || !preferences) return false
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

  const allIds = Object.keys(profiles)

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
    .filter(candidateId => candidateId !== currentUserId)

  return shuffle(candidateIds)
}

export default getSwipeQueue

// testProfiles = {
//   1: {
//     username: 'Kinney1',
//     firstName: 'Kinney',
//     lastName: 'Tate',
//     age: 20,
//     phone: '974-566-3044',
//     email: 'Kinney@gmail.com',
//     address: 'Amsterdam',
//     genres: ['Rock', 'Jazz', 'Pop'],
//     instruments: ['Guitar'],
//     youtube: ['https://google.com'],
//     image: ['https://google.com']
//   },
//   2: {
//     username: 'Tim2',
//     firstName: 'Tim',
//     lastName: 'van der Voorn',
//     age: 28,
//     phone: '974-566-3044',
//     email: 'tim@gmail.com',
//     address: 'Amsterdam',
//     genres: ['Rock', 'Jazz', 'Pop'],
//     instruments: ['Bass'],
//     youtube: ['https://google.com'],
//     image: ['https://google.com']
//   },
//   3: {
//     username: 'Isabella2',
//     firstName: 'Isabella',
//     lastName: 'Brookes',
//     age: 23,
//     phone: '974-566-3144',
//     email: 'Isabella@gmail.com',
//     address: 'Amsterdam',
//     genres: ['Rock', 'Jazz', 'Pop'],
//     instruments: ['Piano'],
//     youtube: ['https://google.com'],
//     image: ['https://google.com']
//   }
// }

// testPreferences = {
//   1: {
//     genres: ['Rock', 'Jazz', 'Funk'],
//     instruments: ['Flute'],
//     locations: ['Amsterdam'],
//     age: {
//       min: 18,
//       max: 40
//     }
//   },
//   2: {
//     genres: ['Rock', 'Jazz', 'Funk'],
//     instruments: ['Piano'],
//     locations: ['Amsterdam'],
//     age: {
//       min: 18,
//       max: 40
//     }
//   },
//   3: {
//     genres: ['Rock', 'Classic', 'Funk'],
//     instruments: ['Bass'],
//     locations: ['Amsterdam'],
//     age: {
//       min: 18,
//       max: 40
//     }
//   }
// }

// testMatches = {
//   1: {
//     likes: [2, 3],
//     dislikes: [7, 8, 9],
//     matches: [2, 3]
//   },
//   2: {
//     likes: [1],
//     dislikes: [5, 6, 7],
//     matches: [1]
//   },
//   3: {
//     like: [1],
//     dislikes: [5, 6, 7],
//     matches: [1]
//   },
// }
