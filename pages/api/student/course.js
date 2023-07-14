import middleware from "../middleware";

const { db } = require("@/src/utils/firebase");

async function handler(req, res) {

    if(req.method === 'POST'){
        try {
            const students = db.collection("courses");
            const courseid = req.body.courseid;
            const data = req.body.data;
            if(!courseid || !data){
                return res.status(400).json({ message: "bad request" });
            }
            await students.doc(courseid).set(data);
            return res.status(200).json({ message: "Course enrolled" });
          } catch (error) {
            console.error("Error enrolling student:", error);
            return res.status(500).json({ message: "Something went wrong" });
          }
    } else if (req.method === 'GET'){
        const courseid = req.query.courseid;
        if(!courseid){
            return res.status(400).json({ message: "bad request" });
        }
        let courseinfo = await db.collection("courses").doc(courseid).get();
        if(courseinfo.exists){
            let modulesInfo = await db.collection("modules").doc(courseid).get();
            return res.status(200).json({data: { ...courseinfo.data(), modules: modulesInfo.data() }})
        }
        return res.status(404).json({message: "resource not found"})
    }
    return res.status(401).json({message: "Unauthorized request"});
}

export default middleware(handler);