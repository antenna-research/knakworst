

testProfiles = {
  1: {
    username: 'Kinney1',
    firstName: 'Kinney',
    lastName: 'Tate',
    age: 20,
    phone: '974-566-3044',
    email: 'Kinney@gmail.com',
    address: 'Amsterdam',
    genres: ['Rock', 'Jazz', 'Pop'],
    instruments: ['Guitar'],
    youtube: ['https://google.com'],
    image: ['https://google.com']
  },
  2: {
    username: 'Tim2',
    firstName: 'Tim',
    lastName: 'van der Voorn',
    age: 28,
    phone: '974-566-3044',
    email: 'tim@gmail.com',
    address: 'Amsterdam',
    genres: ['Rock', 'Jazz', 'Pop'],
    instruments: ['Bass'],
    youtube: ['https://google.com'],
    image: ['https://google.com']
  },
  3: {
    username: 'Isabella2',
    firstName: 'Isabella',
    lastName: 'Brookes',
    age: 23,
    phone: '974-566-3144',
    email: 'Isabella@gmail.com',
    address: 'Amsterdam',
    genres: ['Rock', 'Jazz', 'Pop'],
    instruments: ['Piano'],
    youtube: ['https://google.com'],
    image: ['https://google.com']
  }
}


testPreferences = {
  1: {
    genres: ['Rock', 'Jazz', 'Funk'],
    instruments: ['Flute'],
    locations: ['Amsterdam'],
    age: {
      min: 18,
      max: 40
    }
  },
  2: {
    genres: ['Rock', 'Jazz', 'Funk'],
    instruments: ['Piano'],
    locations: ['Amsterdam'],
    age: {
      min: 18,
      max: 40
    }
  },
  3: {
    genres: ['Rock', 'Classic', 'Funk'],
    instruments: ['Bass'],
    locations: ['Amsterdam'],
    age: {
      min: 18,
      max: 40
    }
  }
}

testMatches = {
  1: {
    likes: [2, 3],
    dislikes: [7, 8, 9],
    matches: [2, 3]
  },
  2: {
    likes: [1],
    dislikes: [5, 6, 7],
    matches: [1]
  },
  3: {
    like: [1],
    dislikes: [5, 6, 7],
    matches: [1]
  },
}


function isStillViable(userId, candidateMatches) {
  // is user in candidate's dislikes
  if ( candidateMatches.dislikes.includes(userId) ) {
    return false
  }
  // is user in candidate's matches
  if ( candidateMatches.matches.includes(userId) ) {
    return false
  }
  return true
}

// is at least one of the genres in the profile in the preferences?
function genreMatches(profile, preferences) {
  match = false
  profile.genres.forEach( function(genre) {
    if (preferences.genres.includes(genre)) {
      match = true
    }
  })
  return match
}

// is at least one of the instruments in the profile in the preferences?
function instrumentMatches(profile, preferences) {
  match = false
  profile.instruments.forEach( function(instrument) {
    if (preferences.instruments.includes(instrument)) {
        match = true
    }
  })
  return match
}

// is at least one of the locations in the profile in the preferences?
function locationMatches(profile, preferences) {
  if (preferences.locations.includes(profile.address)) {
    return true
  }
  return false
}

// is the age in the profile within the range given in the preferences?
function ageMatches(profile, preferences) {
  if (preferences.age[0] < profile.age < preferences.age[1]) {
    return true
  }
  return false
}

// shuffle array in place
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

export default makeQueue = function(currentUserId=3, profiles=testProfiles, preferences=testPreferences, matches=testMatches) {
  // get current user preference
  const userPreferences = preferences[currentUserId]
  const userProfile = profiles[currentUserId]
  const userMatches = matches[currentUserId]

  allCandidates = Object.keys(profiles)
  candidates = []

  allCandidates.forEach( function(candidateId) {
    const candidatePreferences = preferences[candidateId]
    const candidateProfile = profiles[candidateId]
    const candidateMatches = matches[candidateId]

    // eligible by match
    const isViableUser = isStillViable(currentUserId, candidateMatches)

    const isViableCandidate = isStillViable(candidateId, userMatches)

    // eligible by preferences
    // is one of the genres in user profile in the candidate's preferences?
    const genreMatchesUser = genreMatches(userProfile, candidatePreferences)

    // is one of the genres in candidate profile in the user's preferences?
    const genreMatchesCandidate = genreMatches(candidateProfile, userPreferences)

    // is one of the instruments in the user profile in the candidate's preferences?
    const instrumentMatchesUser = instrumentMatches(userProfile, candidatePreferences)

    // is one of the instruments in the candidate profile in the user's preferences?
    const instrumentMatchesCandidate = instrumentMatches(candidateProfile, userPreferences)

    // is one of the locations in the user profile in the candidates's preferences?
    const locationMatchesUser = locationMatches(userProfile, candidatePreferences)

    // is one of the locations in the candidate profile in the user's preferences?
    const locationMatchesCandidate = locationMatches(candidateProfile, userPreferences)

    // is the age in the user profile within the range given in the candidate's preferences?
    const ageMatchesUser = locationMatches(userProfile, candidatePreferences)

    // is the age in the candidate profile within the range given in the user's preferences?
    const ageMatchesCandidate = locationMatches(candidateProfile, userPreferences)

    if (
      isViableUser &&
      isViableCandidate &&
      genreMatchesUser && 
      genreMatchesCandidate && 
      instrumentMatchesUser && 
      instrumentMatchesCandidate && 
      locationMatchesUser &&
      locationMatchesCandidate)
    {
      candidates.push(candidateId)
    }
  });

  // return array of those profiles
  return shuffle(candidates);

}