const initialState = {
    profileName:"",
    biography:"",
    profileLocation:"",
}
const SET_PROFILE_NAME = 'SET_PROFILE_NAME';
const SET_BIOGRAPHY = 'SET_BIOGRAPHY';
const SET_LOCATION = 'SET_LOCATION';


export function setProfileName( name ){
    return {
        type:SET_PROFILE_NAME,
        payload:name
    }
}
export function setBiography( biography ){
    return {
        type:SET_BIOGRAPHY,
        payload: biography
    }
}
export function setProfileLocation( location ){
    return {
        type:SET_LOCATION,
        payload: location
    }
}

export default function profileReducer(state = initialState, action){
    switch(action.type){
        case SET_PROFILE_NAME:
            return Object.assign( {}, state, { profileName:action.payload } )
        case SET_BIOGRAPHY:
            return Object.assign( {}, state, { biography: action.payload } )
        case SET_LOCATION:
            return Object.assign( {}, state, { profileLocation: action.payload})
        default:
            return state
    }
        
}