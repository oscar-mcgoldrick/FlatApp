import request from "superagent";
import { ShoplistData } from "../../models/shoplists";

export async function getShopListAPI() {
  const res = await request.get('/api/v1/shoplists')
  return res
}

export async function updateShopListAPI(list: ShoplistData) {
  await request.patch('/api/v1/shoplists').send(list)
}

export async function addShopList(list: string[]) {
  await request.post('api/v1/shoplilsts').send(list)
}