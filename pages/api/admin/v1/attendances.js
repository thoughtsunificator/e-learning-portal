import middleware from "../middleware";
const { db } = require("@/src/utils/firebase");

async function handler(req, res) {
    if(req.method === 'GET'){
        const attendanceSnapshots = await db.collection("attendance").get()
        const attendances = []
        for(const attendanceDocument of attendanceSnapshots.docs) {
            const attendance = attendanceDocument.data()
            const batchDocument = await db.collection("batch").doc(attendanceDocument.id).get()
            if(batchDocument.exists) {
                for(const studentAttendance of Object.values(attendance).flat()) {
                    const batch = batchDocument.data()
                    attendances.push({ 
                        ...studentAttendance,
                        batch_id: attendanceDocument.id, 
                        course_id: batch.course_id, 
                        batch_incharge: batch.batch_incharge,
                    })
                }
            }
        }
        res.status(200).json(attendances)
    } else if(req.method === 'POST'){
        const requiredProperties = ["student_date", "student_username", "batch_id"]
        if(Object.keys(req.body).filter(property => property in requiredProperties).length === requiredProperties.length) {
            const attendance = (await db.collection("attendance").doc(req.body.batch_id).get()).data()
            attendance.push({
                student_date: req.body.student_date,
                student_username: req.body.student_username
            })
            await db.collection("attendance").doc(req.body.batch_id).set(attendance)
            res.status(201).end()
        } else {
            res.status(400).end()
        }
    } else {
        res.status(401).end()
    }
}

export default middleware(handler);