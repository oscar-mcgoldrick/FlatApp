import { firestore } from 'firebase-admin'
import db from './index'

export async function addItem(item: string) {
  console.log(item, 'hi this is the db func')
  return await db.collection('flats').doc('HMS62UIfAzCaTZ39wCqX').update({shopList: firestore.FieldValue.arrayUnion(item)})
}

export async function getShopList() {
  const doc = await db.collection('flats').doc('HMS62UIfAzCaTZ39wCqX').get()
  return doc.data().shopList
}

export async function deleteItem(item: string) {
  console.log(item, 'deleting item from the shop list');
  const shopListRef = db.collection('flats').doc('HMS62UIfAzCaTZ39wCqX');

  // Get the current shop list
  const doc = await shopListRef.get();

  if (doc.exists) {
    const shopList = doc.data()?.shopList || [];
    
    // Check if the item exists in the shop list
    const itemIndex = shopList.indexOf(item);

    if (itemIndex !== -1) {
      // If the item exists, remove it from the array
      shopList.splice(itemIndex, 1);
      
      // Update the shop list in Firestore
      await shopListRef.update({ shopList });
      
      console.log(`Item '${item}' has been deleted from the shop list.`);
    } else {
      console.log(`Item '${item}' not found in the shop list.`);
    }
  } else {
    console.log('Document does not exist.');
  }
}