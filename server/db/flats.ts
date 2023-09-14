import db from './index'


export async function getUsers() {
  const users = await db.collection('flats').get()
}

