import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDPl-nucCXt_bJ7Flc3fvoZw8Dh8u5hN0I',
	authDomain: 'todo-app-cp-699af.firebaseapp.com',
	databaseURL: 'https://todo-app-cp-699af.firebaseio.com',
	projectId: 'todo-app-cp-699af',
	storageBucket: 'todo-app-cp-699af.appspot.com',
	messagingSenderId: '310419838603',
	appId: '1:310419838603:web:4b20ddc8e873ddfc14a68e',
	measurementId: 'G-P5KRNPESC1',
})

const db = firebaseApp.firestore()

export default db
