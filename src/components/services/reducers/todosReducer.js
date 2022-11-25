import { GET_ALL_TODOS_FAILED, GET_ALL_TODOS_REQUEST, GET_ALL_TODOS_SUCCESS } from "../constants/todosConstants";

const initialState = {
    isLoading: false, 
    todos: [], 
    error: null,
}
export const todosReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_ALL_TODOS_REQUEST:
            return {
                ...state, 
                isLoading : true, 
            }
        case GET_ALL_TODOS_SUCCESS:
            return {
                isLoading : false, 
                todos: payload, 
                error: null,
            }
    
        case GET_ALL_TODOS_FAILED: 
            return {
                isLoading : false, 
                todos: [],
                error: payload,
            }
        default:
            return state;
    }
}