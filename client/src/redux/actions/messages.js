import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";



export function actionAddMessages (array) {
    
    return async function(dispatch, getState) {
        dispatch({
            type: 'CREATE_MESSAGE'
        })
        await addDoc(collection(db, 'messages'), array)
        
    }

}

export function actionSetMessages(messages) {
    return {
        type: 'SET_MESSAGES',
        messages
    }
}