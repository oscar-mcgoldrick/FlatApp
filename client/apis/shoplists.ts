import request from "superagent";

export async function addItemAPI(items: string) {
  await request.patch('/api/v1/shoplists').send({items})
}

export async function getShopListAPI() {
  const currentList = await request.get('/api/v1/shoplists')
  return currentList.body
}

export async function deleteItemAPI(item: string) {
  await request.delete('/api/v1/shoplists').send({item})
  console.log(item, 'api thing')
}