import { ADD_LIST, UPDATE_LIST, DEL_LIST, SET_LIST } from '../actions/shoplists'
import { ShoplistData, Action } from '../../models/shoplists'

const initialState = [] as ShoplistData[]

export default function shopListsReducers(state = initialState, action: Action) {
  const {type, payload} = action
  switch(type) {
    case ADD_LIST: 
      return [...state, payload]

    case SET_LIST:
      return payload

    case DEL_LIST: 
      return state.filter(list => list)

    case UPDATE_LIST: 
      return state.map((list) => {
        if (list.id === payload.id) {
          return payload.list
        }
      })
    default:
      return state
  }
}