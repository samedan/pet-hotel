const firebaseConfig = {
  apiKey: 'AIzaSyDSqtQwKmvtZjgtwv6rvEIMQbxZFB4vokQ',
  authDomain: 'pet-hotel-2004.firebaseapp.com',
  databaseURL: 'https://pet-hotel-2004.firebaseio.com',
  projectId: 'pet-hotel-2004',
  storageBucket: 'pet-hotel-2004.appspot.com',
  messagingSenderId: '186443311535',
  appId: '1:186443311535:web:2ede1e0587b711022de75a',
};

// Cloud Functions
const backendUrl = `https://us-central1-${firebaseConfig.projectId}.cloudfunctions.net/api/graphql`;

// App Engine
// const backendUrl = `<insert app engine url here>`;

export default {
  firebaseConfig,
  backendUrl,
};
