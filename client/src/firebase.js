import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app"
// import { onSnapshot, collection, query, getDocs, where, orderBy } from "firebase/firestore";
// import { store } from './redux/store'
// import { actionSetPosts } from './redux/actions/posts';
// import { actionCreateUser } from './redux/actions/user';


const firebaseApp = initializeApp({
    apiKey: "AIzaSyCLRBtW4r57H0dY8U4_EsSOpXD0l2OPlek",
    authDomain: "smac-chat-7daec.firebaseapp.com",
    projectId: "smac-chat-7daec",
    storageBucket: "smac-chat-7daec.appspot.com",
    messagingSenderId: "39361045894",
    appId: "1:39361045894:web:19963faf18f8f23140f807",
    measurementId: "G-LE38B8JJJ4"
});

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

// ! Below copied and pasted from old firebase File...
// ! will decide how to change this for our project later 


// detect auth state
// takes an argument of either the service returned from the getter 
// function or some relevant container object

// onAuthStateChanged(auth, async user => {
//     // Check for user status
//     if (user !== null) {
//         // Create a reference to the users collection
//         const usersRef = collection(db, "users");

//         // Create a query against the collection
//         const q = query(usersRef, where("id", "==", user.uid));

//         // Query the user that matches uid
//         const querySnapshot = await getDocs(q);
        
//         // dispatch that user in actionCreateUser
//         if (querySnapshot.size > 0) {
//             store.dispatch(actionCreateUser(querySnapshot.docs[0].data()));
//         } else {
//             console.log("No such document!");
//         }

//     } else {
//         store.dispatch(actionCreateUser(null));
//     }
// });


// const q = query(collection(db, "posts"), orderBy("time", "desc"));
// onSnapshot(q, (querySnapshot) => {
//     const posts = [];
//     querySnapshot.forEach((doc) => {
//         posts.push(doc.data());
//     });
//     store.dispatch(actionSetPosts(posts));
    
// });



// (async () => {
//     const querySnapshot = await getDocs(query(collection(db, "posts"), orderBy("time", "desc")));
//     const posts = [];
//     querySnapshot.forEach((doc) => {
//         posts.push(doc.data());
//     });
//     store.dispatch(actionSetPosts(posts));
    
// })()

export default firebase