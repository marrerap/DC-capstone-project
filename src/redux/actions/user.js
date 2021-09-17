import { doc, updateDoc } from "firebase/firestore";
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
        
        await updateDoc(doc(db,'users', user.refId), user)
        dispatch({
            type: 'UPDATE_USER', 
            user
        })
        
        
    }

}