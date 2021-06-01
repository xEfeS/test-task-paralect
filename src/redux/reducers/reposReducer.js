const SET_REPOS = 'SET_REPOS'

const initialState = {
    items: []
}

export default function reposReducer(state = initialState, action) {
    switch (action.type) {
        case SET_REPOS:
            return {
                ...state,
                items: action.payload,
            }
    }
    return state
}

export const setRepos = (items) => ({type: SET_REPOS, payload: items})


