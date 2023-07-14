import { db } from './firebase'

export async function getStaticProps() {
  const snapshot = await db.collection('test').get()
  const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  return { props: { users } }
}