import connection from './connection'

const db = connection

export function getShopList() {
  return db('shoplists').select()
}

export function updateShopList(shoplist: string[]) {
  const list = shoplist
  return db('shoplists').update(list)
}

export function addShopList(list: string[]) {
  return db('shoplists').insert(list)
}