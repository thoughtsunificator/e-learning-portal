import middleware from "../middleware";

const { db } = require("@/src/utils/firebase");

async function handler(req, res) {

    if (req.method === 'GET'){
        const metadata = (await db.collection("student_metadata").doc(req.student_username).get()).data();
        const optedCourseNames = Object.keys(metadata)
        const optedCourses = await db.collection("courses").where('__name__', "in", optedCourseNames).get();
        return res.status(200).json(optedCourses.docs.map(doc => doc.data()))
    }
    return res.status(401).json({message: "Unauthorized request"});
}

export default middleware(handler);