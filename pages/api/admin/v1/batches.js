import middleware from "../middleware";
const { db } = require("@/src/utils/firebase");



async function handler(req, res) {
    if(req.method === 'GET'){
        const batchSnapshots = await db.collection("batch").get()
        return res.status(200).json(batchSnapshots.docs.map(doc => doc.data()))
    } else if(req.method === 'POST'){
        const requiredProperties = ["batch_date", "batch_incharge", "batch_status", "batch_strength", "course_id"]
        if(Object.keys(req.body).filter(property => property in requiredProperties).length === requiredProperties.length) {
            await db.collection("batch").doc(req.body.batch_id).set(req.body)
            return res.status(201).end()
        } else {
            return res.status(400).end()
        }
    } else if(req.method === 'PATCH'){
        const batch = (await db.collection("batch").doc(req.body.batch_id).get(req.body)).data()
        await db.collection("batch").doc(req.body.batch_id).set({ ...batch, req,body })
        return res.status(204).end()
    } else if(req.method === 'DELETE'){
        await db.collection("batch").doc(req.query.course_id).delete()
        return res.status(204).end()
    } else {
        res.status(401).end();
    }
}

export default middleware(handler);