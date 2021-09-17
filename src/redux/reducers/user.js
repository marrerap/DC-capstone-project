export function user (state = {
    checked: false,
    user: null
}, action) {
    switch(action.type) {
        case 'CREATE_USER':
            return {
                user: action.object,
                checked: true
            }
        case 'FETCH_USER':
        case 'LOGOUT_USER':
            return {
                user: null,
                checked: false
            }
        case 'UPDATE_USER':
            return {
                user: action.object
            }
        
        default:
            return state
    }
}