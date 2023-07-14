import middleware from "../middleware";
const { db } = require("@/src/utils/firebase");

async function handler(req, res) {

    if(req.method === 'GET'){
        const batchSnapshot = await db.collection("batch").get()
        const batches = batchSnapshot.docs.map(doc => ({ ...doc.data(), batch_id: doc.id }))
        for(const batch of batches) {
            console.log(batch)
            const attendanceDocument = db.collection("attendance").doc(batch.batch_id).get()
            if((await attendanceDocument).exists) {
                batch.total_classes = Object.keys((await attendanceDocument).data()).length
            }
        }
        res.status(200).json(batches)
    } else {
        res.status(401).end();
    }
}

export default middleware(handler);