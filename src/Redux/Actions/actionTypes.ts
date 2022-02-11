import { UserState } from '../Reducers/userReducer'

export const actionTypes = {
  getUser: 'GET_USER',
  successUser: 'SUCCESS_USER',
  errorUser: 'ERROR_USER'
}

export type ActionType = 'GET_USER' | 'SUCCESS_USER' | 'ERROR_USER'

export interface Action {
  type: ActionType
  payload: UserState
  }
