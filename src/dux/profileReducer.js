const initialState = {
    profileName:""
}
const SET_PROFILE_NAME = 'SET_PROFILE_NAME'

export function setProfileName( name ){
    return {
        type:SET_PROFILE_NAME,
        payload:name
    }
}

export default function profileReducer(state = initialState, action){
    switch(action.type){
        case SET_PROFILE_NAME:
            return Object.assign({}, state, {profileName:action.payload})
        default:
            return state
    }
        
}