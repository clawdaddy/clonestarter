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
        default: return state;
    }
}