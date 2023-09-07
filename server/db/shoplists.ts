import db from './index'

export async function updateShopList(items: string[]) {
  return await db.collection('flats').doc('HMS62UIfAzCaTZ39wCqX').update({shopList: [...items]})
}

export async function getShopList() {
  const doc = await db.collection('flats').doc('HMS62UIfAzCaTZ39wCqX').get()
  return doc.data().shopList
}