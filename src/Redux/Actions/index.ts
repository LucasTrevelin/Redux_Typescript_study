import { callApi } from '../../Utils/Services'
import { UserState } from '../Reducers/userReducer'
import { Action, ActionType, actionTypes } from './actionTypes'

export const getUser = () => (dispatch: (arg0: { type: string; payload?: { name: string; gender: string; picture: any } }) => void) => {
  dispatch(requestUser())
  try {
    callApi().then((response) => {
      console.log('response:', response.data.results)
      return dispatch(successUser(response.data.results))
    })
  } catch (error) {
    console.log(error)
    return dispatch(errorUser())
  }
}

const requestUser = () => {
  return ({ type: actionTypes.getUser })
}

const successUser = (apiPayload: {name: {title: string, first: string, last: string}, gender: string, picture: {large: string, medium: string, thumbnail: string}}[]) => {
  console.log('succesPayload: ', [{ name: `${apiPayload[0].name.title} ${apiPayload[0].name.first} ${apiPayload[0].name.last}`, gender: apiPayload[0].gender, picture: apiPayload[0].picture }])
  return ({ type: (actionTypes.successUser as ActionType), payload: { name: `${apiPayload[0].name.title} ${apiPayload[0].name.first} ${apiPayload[0].name.last}`, gender: apiPayload[0].gender, picture: apiPayload[0].picture.large } })
}

const errorUser = () => {
  return ({ type: actionTypes.errorUser })
}
