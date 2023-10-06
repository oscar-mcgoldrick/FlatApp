import { firestore } from 'firebase-admin'
import db from './index'

export async function getJobList() {
  const doc = await db.collection('flats').doc('HMS62UIfAzCaTZ39wCqX').get()
  return doc.data().Joblist
}