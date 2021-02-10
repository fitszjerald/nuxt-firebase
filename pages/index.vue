<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title"> 
        nuxt-firebase
      </h1>
      <div class="links">
        <a
          @click="firebaseInit"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
      </div>
      
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import '@firebase/messaging';

export default {
  name: 'Index',
  methods: {
    firebaseInit (){
      const messaging = firebase.messaging();
      messaging.getToken({ vapidKey: 'BHCQsKptKxoQqVX6-MmLlupvbrJ3rW0E8sW0xlyBy_1TveAMqTs1QTJQxQfia0Db-DjO4tJgMcKRMtj53aC9pTg'})
      .then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          console.log(currentToken)
          // ...
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');
          // ...
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
