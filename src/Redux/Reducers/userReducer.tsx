import { Action, actionTypes } from '../Actions/actionTypes'

export interface UserState{
  gender: string,
  name: string,
  picture: string
}

export interface UsersState {
  users: UserState[]
  loading?: boolean
}


export const userReducer = (state = ({} as UsersState), action: Action): UsersState => {
  switch (action.type) {
    case actionTypes.getUser: {
      return { ...state, loading: true }
    }
    case actionTypes.successUser: {
      return { ...state, users: [{ name: action.payload.name, gender: action.payload.gender, picture: action.payload.picture }], loading: false }
    }
    case actionTypes.errorUser: {
      return { users: [{ gender: '', name: '', picture: '' }], loading: false }
    }
    default:
      return state
  }
}
