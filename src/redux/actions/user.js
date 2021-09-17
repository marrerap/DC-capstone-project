import { collection, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export function actionCreateUser (object) {
    return {
        type: 'CREATE_USER',
        object
    }
}

export function actionFetchUser () {
    return {
        type: 'FETCH_USER'
        
    }
}

export function actionLogoutUser () {
    return {
        type: 'LOGOUT_USER'
        
    }
}

export function actionUpdateUser (user) {
    
    return async function(dispatch, getState) {
        
        const userRef = await updateDoc(collection(db,'users'), user)
        dispatch({
            type: ' UPDATE_USER', 
            user
        })
        
        
    }

}