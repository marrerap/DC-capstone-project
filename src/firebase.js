// npm install firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { initializeApp } from "firebase/app"
import { onSnapshot, collection, query, getDocs, where, orderBy } from "firebase/firestore";
import { store } from './redux/store'
import { actionSetMessages } from './redux/actions/messages';
import { actionCreateUser } from './redux/actions/user';
import { actionSetChannels } from './redux/actions/channels';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBwS9rKFJTES-y6UQoL6g6SGTU_9SIMZVw",
    authDomain: "smac-overflow.firebaseapp.com",
    projectId: "smac-overflow",
    storageBucket: "smac-overflow.appspot.com",
    messagingSenderId: "660112770776",
    appId: "1:660112770776:web:d12894ff609094fcfb79ad",
    measurementId: "G-RSCVDCQECW"
});

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);


// const docRef = doc(db, "users");
// const docSnap = getDoc(docRef);

// // if (docSnap.exists()) {
// //     console.log("Document data:", docSnap.data());
// // } else {
// //   // doc.data() will be undefined in this case
// //     console.log("No such document!");
// // }







// detect auth state
// takes an argument of either the service returned from the getter 
// function or some relevant container object

onAuthStateChanged(auth, async user => {
    // Check for user status

    if (user !== null) {
        // Create a reference to the users collection
        const usersRef = collection(db, "users");

        // Create a query against the collection
        const q = query(usersRef, where("id", "==", user.uid));

        // Query the user that matches uid
        const querySnapshot = await getDocs(q);

        // dispatch that user in actionCreateUser
        if (querySnapshot.size > 0) {
            const userRef = querySnapshot.docs[0]
            const userdata = userRef.data()
            userdata.refId =  userRef.id
            store.dispatch(actionCreateUser(userdata));
            
        } else {
            console.log("No such document!");
        }

    } else {
        store.dispatch(actionCreateUser(null));
    }
});

// Queries posts from firebase DB
const q = query(collection(db, "messages"), orderBy("time", "desc"));
onSnapshot(q, async (querySnapshot) => {
    const messages = [];
    querySnapshot.forEach(async (doc) => {
        const data = doc.data();
        const user = await (await getDoc(data.UserId)).data()
        data.user = user
        messages.push(data);
    });
    store.dispatch(actionSetMessages(messages));
});

// (async () => {
//     const querySnapshot = await getDocs( query(collection(db, "messages"), orderBy("time", "desc")));
//     const messages = [];
//     await querySnapshot.forEach( async (doc) => {
//         const data = doc.data();
//         const user = await (await getDoc(data.UserId)).data()
//         data.user = user
//         messages.push(data);
//     });
//     store.dispatch(actionSetMessages(messages));

// })()


// Query Channels from DB
const q2 = query(collection(db, "channels"));
onSnapshot(q2, (querySnapshot) => {
    const channels = [];
    querySnapshot.forEach((doc) => {
        channels.push(doc.data());
    });
    store.dispatch(actionSetChannels(channels));
});



(async () => {
    const querySnapshot = await getDocs(query(collection(db, "channels")));
    const channels = [];
    querySnapshot.forEach((doc) => {
        channels.push(doc.data());
    });
    store.dispatch(actionSetChannels(channels));

})()

export default firebase