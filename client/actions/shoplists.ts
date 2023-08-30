import * as api from '../apis/shoplists'
import { ThunkAction } from '../store'
import { ShoplistData } from '../../models/shoplists'

export const SET_LIST = 'SET_LIST'
export const DEL_LIST = 'DEL_LIST'
export const UPDATE_LIST = 'UPDATE_LIST'
export const ADD_LIST = 'ADD_LIST'

export function setLists(list: ShoplistData) {
  return {
    type: SET_LIST,
    payload: list
  }
}

export function delListAction(id: number) {
  return {
    type: DEL_LIST,
    payload: id,
  }
}

export function addCityAction(list: ShoplistData | null) {
  return {
    type: ADD_LIST,
    payload: list
  }
}

export function updateCityAction(id: number, list: ShoplistData) {
  return {
    type: UPDATE_LIST,
    payload: {id, list}
  }
}

export function getLists(): ThunkAction {
  return async (dispatch) => {
    try {
      const shopLists = await api.getShopListAPI()
      dispatch(setLists(shopLists))
    } catch (e) {
      console.error('action pooped the bed...', e)
    }
  }
}


export function addList(list: ShoplistData | null): ThunkAction {
  return async (dispatch) => {
    try {
      const newList = await api.addShopList(list)
      dispatch(addCityAction(newList))
    } catch (e) {
      console.error('these actions keep pooping :(', e)
    }
  }
}

export function updateList(id: number, list: ShoplistData): ThunkAction {
  return async (dispatch) => {
    try {
      await api.updateShopListAPI(list)
      dispatch(updateCityAction(id, list))
    } catch (e) {
      console.error('poopy hecking actions :C', e)
    }
  }
}