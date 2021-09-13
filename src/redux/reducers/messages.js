const defaultState = []

export function messages (state = defaultState, action) {
    switch(action.type) {
        case 'ADD_MESSAGE':
            return [action.array, ...state]
        
        case 'SET_MESSAGES':
            return action.messages

        default:
            return state

        
    }
}

