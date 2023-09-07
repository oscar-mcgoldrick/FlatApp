import db from './index'
const getUsers = db.collection('users').get()

export async function getUsers() {
  const list = await getUsers
}

async function test() {
  const snapshot = await db.collection('users').get()
  snapshot.forEach((doc) => {
    console.log(doc.data().name);
  });
}