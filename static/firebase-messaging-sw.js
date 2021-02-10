// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
	apiKey: "AIzaSyAXwCYbNrkw3AhHeWTvIlJCvGr5VnY85bo",
	authDomain: "push-notification-test-d9f80.firebaseapp.com",
	databaseURL: "https://push-notification-test-d9f80.firebaseio.com",
	projectId: "push-notification-test-d9f80",
	storageBucket: "push-notification-test-d9f80.appspot.com",
	messagingSenderId: "405139637664",
	appId: "1:405139637664:web:b7091bf08c06418e1210c5",
	measurementId: "G-YE4Q3S3P2Y"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
console.log(messaging)

messaging.onBackgroundMessage((payload) => {
	console.log('[firebase-messaging-sw.js] Received background message ', payload);
	// Customize notification here
	const notificationTitle = 'Background Message Title';
	const notificationOptions = {
	  body: 'Background Message body.',
	  icon: '/firebase-logo.png'
	};
  
	self.registration.showNotification(notificationTitle,
	  notificationOptions);
  });