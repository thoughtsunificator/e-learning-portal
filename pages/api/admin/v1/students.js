import middleware from "../middleware";
const { db } = require("@/src/utils/firebase");

async function handler(req, res) {
    if(req.method === 'GET'){
        const studentSnapshot = ( await db.collection("student").get() )
        res.status(200).json(studentSnapshot.docs.map(doc => doc.data()))
    } else if(req.method === 'POST'){
        const requiredProperties = ["country", "enrolled_date", "phone_number", "student_email", "student_name", "student_password", "student_username", "batch"]
        if(Object.keys(req.body).filter(property => property in requiredProperties).length === requiredProperties.length) {
            await db.collection("student").doc(req.body.student_username).set(req.body)
            res.status(201).end()
        } else {
            res.status(400).end()
        }
    } else if(req.method === 'PATCH'){
        const student = (await db.collection("student").doc(req.body.batch_id).get(req.body)).data()
        await db.collection("student").doc(req.body.batch_id).set({ ...student, req,body })
        res.status(204).end()
    } else if(req.method === 'DELETE'){
        await db.collection("student").doc(req.query.student_username).delete()
        res.status(204).end()
    } else {
        res.status(401).end();
    }
}

export default middleware(handler); 