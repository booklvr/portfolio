import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBWq9URCVucUZI7OZFVQJgzpjlpm2zNWHo',
  authDomain: 'portfolio-ba1e8.firebaseapp.com',
  projectId: 'portfolio-ba1e8',
  storageBucket: 'portfolio-ba1e8.appspot.com',
  messagingSenderId: '797753854405',
  appId: '1:797753854405:web:a3989db5775c0d421b23ac',
  measurementId: 'G-7PNGR68G1L',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()


