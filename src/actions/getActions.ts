import { Dispatch } from 'redux';
import { getApiDetails } from '../api/dataApi'; //  getApiDetailsById
import { GET_LIST, AppActions } from '../types/actions'; // GET_DETAILS
import { Details } from '../types/Details';

export const getAllDetails = (query: string) => (
  dispatch: Dispatch<AppActions>
): unknown =>
  getApiDetails(query)
    .then((response: Details[]) => {
      //  set result to Redux
      dispatch({
        type: GET_LIST,
        payload: response
      });
    })
    .catch((error: string) => console.error(error));

// export const getDetailsById = ( id: string ): any => async (dispatch: Dispatch<AppActions>) => {
//   return getApiDetailsById(id)
//     .then((response: Details[]): AppActions => {
//       dispatch({
//         type: GET_DETAILS,
//         payload: response
//       });
//       return response[0];
//     })
//     .catch(error => console.error(error));
//   }
