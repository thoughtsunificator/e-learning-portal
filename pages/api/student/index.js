import middleware from "../middleware";
import { db } from "@/src/utils/firebase";

async function handler(req, res) {
    if(req.method === 'GET'){
        const { student_password, ...student } = ( await db.collection("student").doc(req.student_username).get() ).data();
        return res.status(200).json(student)
    }
    res.status(401).end();
}

export default middleware(handler);