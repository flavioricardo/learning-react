const INITIAL_STATE = { count: 0, text: '' }

export const countReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'ADD_ONE':
            return { ...state, count: state.count + 1 }
        case 'REMOVE_ONE':
            return {  count: state.count - 1 }
        case 'ADD_TXT':
            return { ...state, text: action.payload }
        default:
            return state
    }

}