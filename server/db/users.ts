import db from './index'


export async function getUsers() {
  const users = await db.collection('users').get()
}

async function test() {
  const snapshot = await db.collection('users').get()
  snapshot.forEach((doc) => {
    console.log(doc.data().name);
  });
}