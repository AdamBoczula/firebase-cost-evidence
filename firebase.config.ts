// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyC7cazCkCoTtIFj0oAO0mAR3FJIrq3dVSE',
  authDomain: 'cost-evidence.firebaseapp.com',
  projectId: 'cost-evidence',
  storageBucket: 'cost-evidence.appspot.com',
  messagingSenderId: '1043535636824',
  appId: '1:1043535636824:web:9944449cd6480a04261d2d',
  measurementId: 'G-2SW3K1C3PE',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
