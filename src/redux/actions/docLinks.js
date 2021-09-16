import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";



export function actionAddDocs (array) {
    
    return async function(dispatch, getState) {
        dispatch({
            type: 'CREATE_DOC'
        })
        await addDoc(collection(db, 'doclinks'), array)
        
    }

}

export function actionSetDocs(docLinks) {
    return {
        type: 'SET_DOCS',
        docLinks
    }
}