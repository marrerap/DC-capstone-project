import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";



export function actionAddMessage (message) {
    
    return async function(dispatch, getState) {
        
        const messageRef = await addDoc(collection(db, 'messages'), message)
        dispatch({
            type: 'ADD_MESSAGE', 
            message: message
        })
        
        
    }

}

export function actionSetMessages(messages) {
    return {
        type: 'SET_MESSAGES',
        messages
    }
}