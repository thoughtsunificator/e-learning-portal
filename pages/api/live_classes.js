import middleware from "./middleware";

const { db } = require("@/src/utils/firebase");

async function handler(req, res) {
    const batch_id = req.query.batch_id
    if(req.method === 'GET'){
        if(req.query.batch_id) {
            const documentSnapshot = await db.collection("live_classes").doc(batch_id).get()
            return res.status(200).json(Object.values(documentSnapshot.data()))
        } else {
            res.status(404).end();
        }
    }
    res.status(401).end();
}

export default middleware(handler);