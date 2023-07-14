import middleware from "./middleware";
const { db } = require("@/src/utils/firebase");

async function handler(req, res) {
    if(req.method === 'GET'){
        const querySnapshot = await db.collection("batch").get()
        return res.status(200).json(querySnapshot.docs.map(doc => doc.data()))
    }
    res.status(401).end();
}

export default middleware(handler);