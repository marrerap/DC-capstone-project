
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