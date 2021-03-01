import firebase from 'firebase/app';
import "@firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAXwCYbNrkw3AhHeWTvIlJCvGr5VnY85bo",
	authDomain: "push-notification-test-d9f80.firebaseapp.com",
	databaseURL: "https://push-notification-test-d9f80.firebaseio.com",
	projectId: "push-notification-test-d9f80",
	storageBucket: "push-notification-test-d9f80.appspot.com",
	messagingSenderId: "405139637664",
	appId: "1:405139637664:web:b7091bf08c06418e1210c5",
	measurementId: "G-YE4Q3S3P2Y"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase
