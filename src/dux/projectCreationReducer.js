// import axios from 'axios';
// require('dotenv').config();
// const { REACT_APP_PROJECT_NUMBER } = process.env
import moment from 'moment'

let initialState = {
  category: "",
  subcategory: "",
  country: "",
  projectImage: "",
  projectTitle: "",
  shortBlurb: "",
  projectLocation: "",
  fundingDuration: 30,
  fundingEndDate: "2019-12-31T08:30",
  fundingGoal: 0,
  atLeastEighteen: false,
  canVerifyBankAndId: false,
  hasDebitOrCreditCard: false,
  projectId: 0,
  rewards: [
    {
      title: "",
      pledgeAmount: 0,
      description: ""
    }
  ],
  user: {},
};

const SELECT_CATEGORY = "SELECT_CATEGORY";
const SELECT_SUBCATEGORY = "SELECT_SUBCATEGORY";
const SET_BLURB = "SET_BLURB";
const SET_TITLE = "SET_TITLE";
const SET_GOAL = "SET_GOAL";
const SELECT_COUNTRY = "SET_COUNTRY";
const TOGGLE_AGE_EIGHTEEN = "TOGGLE_AGE_EIGHTEEN";
const TOGGLE_VERIFY_ID = "TOGGLE_VERIFY_ID";
const TOGGLE_DEBIT_CREDIT = "TOGGLE_DEBIT_CREDIT";
const SAVE_SETUP_TYPE = "SAVE_SETUP";
const SET_PROJECT_FROM_DB = "SET_PROJECT_FROM_DB";
const SET_USER = "SET_USER";
const SET_END_DATE = "SET_END_DATE";
const SET_LOCATION = 'SET_LOCATION';

export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    payload: category
  };
}

export function selectSubcategory(subcategory) {
  return {
    type: SELECT_SUBCATEGORY,
    payload: subcategory
  };
}
export function setBlurb(blurb) {
  return {
    type: SET_BLURB,
    payload: blurb
  };
}

export function selectCountry(country) {
  return {
    type: SELECT_COUNTRY,
    payload: country
  };
}

export function toggleAgeEighteen(bool) {
  return {
    type: TOGGLE_AGE_EIGHTEEN,
    payload: bool
  };
}

export function toggleVerifyId(bool) {
  return {
    type: TOGGLE_VERIFY_ID,
    payload: bool
  };
}

export function toggleDebitCredit(bool) {
  return {
    type: TOGGLE_DEBIT_CREDIT,
    payload: bool
  };
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
export function saveSetup(id) {
  return {
    type: SAVE_SETUP_TYPE,
    payload: id
  };
}
export function setProjectFromDB(project) {
  return {
    type: SET_PROJECT_FROM_DB,
    payload: project
  };
}
export function setTitle(title) {
  return {
    type: SET_TITLE,
    payload: title
  };
}

export function setGoal(goal) {
  return {
    type: SET_GOAL,
    payload: goal
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  };
}

export function setEndDate( date ){
    return {
        type: SET_END_DATE,
        payload:date
    }
}

export function setLocation( location ){
    return {
        type:SET_LOCATION,
        payload:location
    }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return Object.assign({}, state, { category: action.payload });
    case SELECT_SUBCATEGORY:
      return Object.assign({}, state, { subcategory: action.payload });
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
      return Object.assign({}, state, { projectId: action.payload });
    case SET_PROJECT_FROM_DB:
      console.log('payload ', action.payload)
      const {
        id: projectId,
        category,
        idea: shortBlurb,
        country,
        image,
        title:projectTitle,
        subcategory,
        project_location: projectLocation,
        end_date_time: fundingEndDate,
        funding_goal: fundingGoal
      } = action.payload;
      // change picture/title on user object if they change during editing.
      return Object.assign({}, state, {
        projectId:projectId || 0,
        category: category || '',
        shortBlurb: shortBlurb || '',
        country: country || '',
        image: image || '',
        projectTitle: projectTitle || '',
        subcategory: subcategory || '',
        projectLocation: projectLocation || '',
        fundingEndDate: moment(fundingEndDate).format("YYYY-MM-DDTHH:mm") || '',
        fundingGoal: fundingGoal || 0
      });
    case SET_TITLE:
      return Object.assign({}, state, { projectTitle: action.payload });
    case SET_GOAL:
      return Object.assign({}, state, { fundingGoal: action.payload });
    case SET_USER:
      return Object.assign({}, state, { user: action.payload });
    case SET_END_DATE:
      return Object.assign({}, state, { fundingEndDate: action.payload })
    case SET_LOCATION:
      return Object.assign({}, state, { projectLocation: action.payload })
    default:
      return state;
  }
}
