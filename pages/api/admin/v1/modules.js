import middleware from "../middleware";
const { db } = require("@/src/utils/firebase");

async function handler(req, res) {
    if(req.method === 'GET'){
        const courseSnapshots = await db.collection("modules").get()
        const courses = courseSnapshots.docs.map(doc => doc.data())
        for(const course of courses) {
            const moduleDocument = await db.collection("modules").doc(course.course_id).get()
            course.modules_count = Object.keys(moduleDocument).length
        }
        res.status(200).json(courses)
    } else if(req.method === 'POST'){
        const requiredProperties = ["course_id", "module_desc", "module_duration", "module_id", "module_image", "module_short_desc", "module_id", "order"]
        if(Object.keys(req.body).filter(property => property in requiredProperties).length === requiredProperties.length) {
            await db.collection("modules").doc(req.body.course_id).set(req.body)
            res.status(201).end()
        } else {
            res.status(400).end()
        }
    } else if(req.method === 'PATCH'){
        const module = (await db.collection("modules").doc(req.body.course_id).get(req.body)).data()
        await db.collection("modules").doc(req.body.course_id).set({ ...module, req,body })
        res.status(204).end()
    } else if(req.method === 'DELETE'){
        await db.collection("modules").doc(req.query.course_id).delete()
        res.status(204).end()
    } else {
        res.status(401).end();
    }
}

export default middleware(handler);