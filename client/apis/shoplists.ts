import request from "superagent";
import { ShoplistData } from "../../models/shoplists";


export async function updateShopListAPI(items: string[]) {
  await request.patch('/api/v1/shoplists').send(items)
}

export async function getShopListAPI() {
  const currentList = await request.get('/api/v1/shoplists')
  return currentList.body
}