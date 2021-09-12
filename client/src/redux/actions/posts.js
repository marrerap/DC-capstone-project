import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";



export function actionAddPost (array) {
    
    return async function(dispatch, getState) {
        dispatch({
            type: 'CREATE_POST'
        })
        await addDoc(collection(db, 'posts'), array)
        
    }

}

export function actionSetPosts(posts) {
    return {
        type: 'SET_POSTS',
        posts
    }
}