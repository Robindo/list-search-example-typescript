import { Details } from './Details';

export const GET_LIST = 'GET_LIST';
export const GET_DETAILS = 'GET_DETAILS';
export const ADD_DETAILS = 'ADD_DETAILS';
export const REMOVE_DETAILS = 'REMOVE_DETAILS';

export interface GetListAction {
  type: typeof GET_LIST;
  payload: Details[];
}

export interface GetDetailsAction {
  type: typeof GET_DETAILS;
  payload: Details;
}

export interface AddDetailsAction {
  type: typeof ADD_DETAILS;
  payload: Details;
}

export interface RemoveDetailsAction {
  type: typeof REMOVE_DETAILS;
  payload: Details;
}

export type DetailsActionTypes =
  | GetListAction
  | GetDetailsAction
  | AddDetailsAction
  | RemoveDetailsAction;

export type AppActions = DetailsActionTypes;
