const SET_USERS = 'SET_USERS'
const SET_ERROR = 'SET_ERROR'
const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    users:null,
    isLoading: true,
    error:'',
}

export default function usersReducer(state = initialState,action) {
    switch (action.type) {
        case SET_USERS:
            return{
                ...state,
                users:action.payload,
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
    }
    return state
}

export const setUsers = (users) =>({type:SET_USERS,payload:users})
export const setIsLoading = (bool) => ({type: SET_IS_LOADING, payload: bool})
export const setError = (error) =>({type:SET_ERROR,payload:error})
