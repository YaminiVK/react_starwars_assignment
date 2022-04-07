export const initialState = {};

export const peopleReducer = (state= initialState, action) => {
    switch(action.type){
        case 'FETCH_PEOPLE':
            const {people} = action;
            return {...state, people:people};
        break;
        default:
            return state
        break;
    }
}