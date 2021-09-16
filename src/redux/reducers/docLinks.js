const defaultState = []

export function docLinks (state = defaultState, action) {
    switch(action.type) {
        case 'ADD_DOC':
            return [action.array, ...state]
        
        case 'SET_DOCS':
            return action.docLinks

        default:
            return state

        
    }
}