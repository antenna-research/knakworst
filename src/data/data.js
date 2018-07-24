export default [
  {
    id: 1,
    username: 'Kinney1',
    firstName: 'Kinney',
    lastName: 'Tate',
    age: 20,
    phone: '974-566-3044',
    email: 'Kinney@gmail.com',
    address: 'Amsterdam',
    profile: {
      genres: ['Rock', 'Jazz', 'Pop'],
      instrument: ['Guitar'],
      youtube: ['https://google.com'],
      image: ['https://google.com']
    },
    matches: {
      like: [2, 3],
      dislike: [7, 8, 9],
      match: [2, 3]
    },
    searchPreference: {
      genres: ['Rock', 'Jazz', 'Funk'],
      instrument: ['Flute'],
      locations: ['Amsterdam'],
      age: {
        min: 18,
        max: 40
      }
    }
  },
  {
    id: 2,
    username: 'Tim2',
    firstName: 'Tim',
    lastName: 'van der Voorn',
    age: 28,
    phone: '974-566-3044',
    email: 'tim@gmail.com',
    address: 'Leiden',
    profile: {
      genres: ['Rock', 'Jazz', 'Pop'],
      instrument: ['Bass'],
      youtube: ['https://google.com'],
      image: ['https://google.com']
    },
    matches: {
      like: [1],
      dislike: [5, 6, 7],
      match: [1]
    },
    searchPreference: {
      genres: ['Rock', 'Jazz', 'Funk'],
      instrument: ['Piano'],
      locations: ['Amsterdam'],
      age: {
        min: 18,
        max: 40
      }
    }
  },
  {
    id: 3,
    username: 'Isabella2',
    firstName: 'Isabella',
    lastName: 'Brookes',
    age: 23,
    phone: '974-566-3144',
    email: 'Isabella@gmail.com',
    address: 'Leiden',
    profile: {
      genres: ['Rock', 'Jazz', 'Pop'],
      instrument: ['Piano'],
      youtube: ['https://google.com'],
      image: ['https://google.com']
    },
    matches: {
      like: [1],
      dislike: [5, 6, 7],
      match: [1]
    },
    searchPreference: {
      genres: ['Rock', 'Classic', 'Funk'],
      instrument: ['Bass'],
      locations: ['Amsterdam'],
      age: {
        min: 18,
        max: 40
      }
    }
  }
]
