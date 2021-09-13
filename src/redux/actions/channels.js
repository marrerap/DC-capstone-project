import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";



export function actionAddChannels (array) {
    
    return async function(dispatch, getState) {
        dispatch({
            type: 'CREATE_CHANNEL'
        })
        await addDoc(collection(db, 'channels'), array)
        
    }

}

export function actionSetChannels(channels) {
    return {
        type: 'SET_CHANNELS',
        channels
    }
}