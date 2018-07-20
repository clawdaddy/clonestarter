// import axios from 'axios';

let initialState = {
    category:'',
    subcategory:'',
    country:'',
    projectImage:'',
    projectTitle:'',
    shortBlurb:'',
    projectLocation:'',
    fundingDuration:30,
    fundingEndDate:'',
    fundingGoal:0,
    atLeastEighteen:false,
    canVerifyBankAndId:false,
    hasDebitOrCreditCard:false,
    projectId:0,
    rewards:[
        {
            title:'',
            pledgeAmount:0,
            description:'',
        }
    ]
}

const SELECT_CATEGORY = 'SELECT_CATEGORY';
const SET_BLURB = 'SET_BLURB';
const SELECT_COUNTRY = 'SET_COUNTRY';
const TOGGLE_AGE_EIGHTEEN = 'TOGGLE_AGE_EIGHTEEN';
const TOGGLE_VERIFY_ID = 'TOGGLE_VERIFY_ID';
const TOGGLE_DEBIT_CREDIT = 'TOGGLE_DEBIT_CREDIT';
const SAVE_SETUP_TYPE = 'SAVE_SETUP';
const SET_PROJECT_FROM_DB = 'SET_PROJECT_FROM_DB';

export function selectCategory( category ){
    return {
        type:SELECT_CATEGORY,
        payload: category
    }
}
export function setBlurb( blurb ){
    return{
        type:SET_BLURB,
        payload: blurb
    }
}

export function selectCountry ( country ){
    return{
        type:SELECT_COUNTRY,
        payload: country
    }
}

export function toggleAgeEighteen( bool ){
    return{
        type:TOGGLE_AGE_EIGHTEEN,
        payload: bool
    }
}

export function toggleVerifyId( bool ){
    return{
        type:TOGGLE_VERIFY_ID,
        payload: bool
    }
}

export function toggleDebitCredit ( bool ){
    return{
        type: TOGGLE_DEBIT_CREDIT,
        payload: bool
    }
}

// export function saveSetup( category, blurb, country ){
//     //I'm not currently using this version, but haven't decided to get rid of it. See the associated cases below.
//     return{
//         type:SAVE_SETUP_TYPE,
//         payload: axios.post('/api/addProject', {category, blurb, country}).then( response => {
//             return response.data[0].id
//         })
//     }
// }
export function saveSetup( id ){
    return {
        type:SAVE_SETUP_TYPE,
        payload:id
    }
}
export function setProjectFromDB( project ){
    return {
        type:SET_PROJECT_FROM_DB,
        payload:project
    }
}

export default function reducer( state = initialState, action){
    switch(action.type){
        case SELECT_CATEGORY:
            return Object.assign({}, state, { category: action.payload });
        case SET_BLURB:
            return Object.assign({}, state, { shortBlurb: action.payload });
        case SELECT_COUNTRY:
            return Object.assign({}, state, { country: action.payload });
        case TOGGLE_AGE_EIGHTEEN:
            return Object.assign({}, state, { atLeastEighteen: action.payload });
        case TOGGLE_VERIFY_ID:
            return Object.assign({}, state, { canVerifyBankAndId: action.payload });
        case TOGGLE_DEBIT_CREDIT:
            return Object.assign({}, state, { hasDebitOrCreditCard: action.payload });
        //The following cases are associated with the version of saveSetup that uses promise middleware to make an axios call. I'm not currently using this, but it's a good example in case I need to use it in the future.
        // case `${SAVE_SETUP_TYPE}_PENDING`:
        //     return state;
        // case `${SAVE_SETUP_TYPE}_FULFILLED`:
        //     console.log(action.payload)
        //     return Object.assign({},state, { isFulfilled:true, projectId:action.payload } );
        // case `${SAVE_SETUP_TYPE}_REJECTED`:
        //     return Object.assign({}, state, { isRejected:true, error:action.payload })
        case SAVE_SETUP_TYPE:
            return Object.assign({}, state, {projectId:action.payload})
        case SET_PROJECT_FROM_DB:
            const { id:projectId, category, idea:shortBlurb,country, image, title, subcategory, project_location:projectLocation, funding_duration:fundingDuration, funding_goal:fundingGoal } = action.payload;
            console.log(projectId, category, shortBlurb, country, image, title, subcategory, projectLocation, fundingDuration, fundingGoal);
            
            return Object.assign({}, state, 
                {
                    projectId, category, shortBlurb, country, image, title, subcategory, projectLocation, fundingDuration, fundingGoal
                })
        default: return state;
    }
}