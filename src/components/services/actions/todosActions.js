import axios from "axios"
import { GET_ALL_TODOS_REQUEST, GET_ALL_TODOS_SUCCESS } from "../constants/todosConstants"


export const getAllToDos = () => async (dispatch) => {
    try {
        dispatch({type: GET_ALL_TODOS_REQUEST})
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
        dispatch({type: GET_ALL_TODOS_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: GET_ALL_TODOS_REQUEST, payload: error.message})
    }
}