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

export function selectCategory( category ){
    return {
        type:SELECT_CATEGORY,
        payload:category
    }
}


export default function reducer( state = initialState, action){
    switch(action.type){
        case SELECT_CATEGORY:
            return Object.assign({}, state, {category:action.payload});
        default: return state
    }
}