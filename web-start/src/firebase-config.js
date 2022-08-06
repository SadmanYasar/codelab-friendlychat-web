/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCGXvu0rZK4rWoiCgdNBo6p_PyhWUMNJTs",
  authDomain: "fir-fireship-learning.firebaseapp.com",
  projectId: "fir-fireship-learning",
  storageBucket: "fir-fireship-learning.appspot.com",
  messagingSenderId: "688918449604",
  appId: "1:688918449604:web:cc6a99122d6600eb456891"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
  } else {
    console.log(config)
    return config;
  }
}