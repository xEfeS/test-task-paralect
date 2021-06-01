import {setRepos} from "../reducers/reposReducer";
import {setIsLoading,setError,setUsers} from "../reducers/usersReduser"

export const getRepo = (userName,currentPage=1,perPage=4) =>{
    return async (dispatch) =>{
        const reposResponse = await fetch(`https://api.github.com/users/${userName}/repos?page=${currentPage}&per_page=${perPage}`)
        const repos = await reposResponse.json()
        dispatch(setRepos(repos))
    }
}

export const getData = (userName) =>{
    return async (dispatch) =>{
        dispatch(setError(''))
        dispatch(setIsLoading(true))
        const userResponse = await fetch(`https://api.github.com/users/${userName}`)
        const user = await userResponse.json()
        if (!userResponse.ok) dispatch(setError('User not found'))
        dispatch(setUsers(user))
        await dispatch(getRepo(userName))
        dispatch(setIsLoading(false))
    }
}