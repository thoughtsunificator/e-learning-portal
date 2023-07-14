import middleware from "../middleware";
const { db } = require("@/src/utils/firebase");

async function handler(req, res) {
    if(req.method === 'GET'){
        const batch_id = req.query.batch_id
        const attendance = ( await db.collection("attendance").doc(batch_id).get() ).data()
        const batch = ( await db.collection("batch").doc(batch_id).get() ).data()
        if(attendance) {
            const attendances = []
            for(const session of Object.values(attendance)) {
                const student_session = session.find(session => session.student_username == req.student_username)
                if(student_session) {
                    attendances.push({ student_date: student_session.student_date, course_id: batch.course_id })
                }
            }
            return res.status(200).json(attendances)
        } else {
            return res.status(404).json({message: "resource not found"})
        }
    }
    res.status(401).end();
}

export default middleware(handler);