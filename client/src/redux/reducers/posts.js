const defaultState = []

export function posts (state = defaultState, action) {
    switch(action.type) {
        case 'ADD_POST':
            return [action.array, ...state]
        
        case 'SET_POSTS':
            return action.posts

        default:
            return state

        
    }
}

