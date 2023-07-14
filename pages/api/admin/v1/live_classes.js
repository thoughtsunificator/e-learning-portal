import middleware from "../middleware";
const { db } = require("@/src/utils/firebase");

async function handler(req, res) {
    if(req.method === 'GET'){
        const liveClassSnapshots = await db.collection("live_classes").get()
        res.status(200).json(liveClassSnapshots.docs.map(doc => doc.data()))
    } else if(req.method === 'POST'){
        const requiredProperties = ["title", "date", "meeting_description", "passcode", "meeting_link", "time", "instructor"]
        if(Object.keys(req.body).filter(property => property in requiredProperties).length === requiredProperties.length) {
            await db.collection("live_classes").doc(req.body.batch_id).set(req.body)
            res.status(201).end()
        } else {
            res.status(400).end()
        }
    } else if(req.method === 'DELETE'){
        await db.collection("live_classes").doc(req.query.batch_id).delete()
        res.status(204).end()
    } else if(req.method === 'PATCH'){
        const liveClass = (await db.collection("live_classes").doc(req.body.batch_id).get(req.body)).data()
        await db.collection("live_classes").doc(req.body.batch_id).set({ ...liveClass, req,body })
        res.status(204).end()
    } else {
        res.status(401).end();
    }
}

export default middleware(handler);