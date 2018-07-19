let initialState = {
    category:'',
    subcategory:'',
    projectImage:'',
    projectTitle:'',
    shortBlurb:'',
    projectLocation:'',
    fundingDuration:30,
    fundingEndDate:'',
    fundingGoal:0,
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

export function selectCategory( category ){
    return {
        type:SELECT_CATEGORY,
        payload:category
    }
}
export function setBlurb( blurb ){
    return{
        type:SET_BLURB,
        payload:blurb
    }
}


export default function reducer( state = initialState, action){
    switch(action.type){
        case SELECT_CATEGORY:
            return Object.assign({}, state, { category: action.payload});
        case SET_BLURB:
            return Object.assign({}, state, { shortBlurb: action.payload});
        default: return state
    }
}