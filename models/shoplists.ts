export interface ShoplistData {
  id: number
  list: string[]
}

export interface UpdateShopLIst {
  id: number,
  list: ShoplistData
}

export type Action = 
| { type: 'SET_LIST', payload: ShoplistData[] }
| { type: 'ADD_LIST', payload: ShoplistData }
| { type: 'DEL_LIST', payload: number }
| { type: 'UPDATE_LIST', payload: UpdateShopLIst}