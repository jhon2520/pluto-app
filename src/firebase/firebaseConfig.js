import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// import {GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBiWYfrG2BMxJXqOEnh-hvOC5FgKRhFOgI",
    authDomain: "pluto-8c7de.firebaseapp.com",
    projectId: "pluto-8c7de",
    storageBucket: "pluto-8c7de.appspot.com",
    messagingSenderId: "460050404118",
    appId: "1:460050404118:web:a55995985e833a09ccb637"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp)

// //const googleAuthProvider = new GoogleAuthProvider();

// export{
//     db,
//     googleAuthProvider
// }

export default firebaseApp;