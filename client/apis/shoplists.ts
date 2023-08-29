import request from "superagent";

export async function getShopListAPI() {
  const res = await request.get('/api/v1/shoplists')
  return res
}

export async function updateShopListAPI(list: string[]) {
  await request.patch('/api/v1/shoplists').send(list)
}