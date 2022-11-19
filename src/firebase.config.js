import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBV0BzkrOH0UicZ3u1QIik_pehNFt1uMuM",
    authDomain: "restaurantapp-a34e8.firebaseapp.com",
    databaseURL: "https://restaurantapp-a34e8-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-a34e8",
    storageBucket: "restaurantapp-a34e8.appspot.com",
    messagingSenderId: "311751426152",
    appId: "1:311751426152:web:beb2d720bde2ee0304fbdd"
  };


  const app =  getApps.length > 0 ? getApp() : initializeApp(firebaseConfig); 

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage} ;