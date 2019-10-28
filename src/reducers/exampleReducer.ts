import {
  GET_LIST
  // GET_DETAILS,
  // ADD_DETAILS,
  // REMOVE_DETAILS
} from '../types/actions';
import { Example } from '../types/Example';
import { AppActions } from '../types/actions';

// const initialState: Example = {
//     list: [],
//     details: {
//         id: 0,
//         title: '',
//         description: {}
//     }
// };

// const initialState: Details[] = [];
const initialState: Example = {
  list: [],
  details: {
    id: 0,
    title: '',
    description: {}
  }
};

const exampleReducer = (state = initialState, action: AppActions): Example => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        list: action.payload
      };
    //   case GET_DETAILS:
    //     return {
    //       ...state,
    //       details: action.payload
    //     };
    //   case ADD_DETAILS:
    //     return {
    //       ...state,
    //       list: [...state, { ...action.payload }],
    //       details: action.payload
    //     };
    //   case REMOVE_DETAILS:
    //     //  Note: state.list.filter(item => item.id !== action.payload) should be in a separate selector
    //     //  TODO: use reselect and normalizr in seperate selectors
    //     return {
    //       ...state,
    //       list: state.list.filter(item => item.id !== action.payload),
    //       details: {}
    //     };
    default:
      return state;
  }
};

export default exampleReducer;
