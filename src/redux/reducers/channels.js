const defaultState = []

export function channels (state = defaultState, action) {
    switch(action.type) {
        case 'ADD_CHANNEL':
            return [action.array, ...state]
        
        case 'SET_CHANNELS':
            return action.channels

        default:
            return state

        
    }
}