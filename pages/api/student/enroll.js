import { db } from "@/src/utils/firebase";
import middleware from "../middleware";

async function handler(req, res) {
  if (!req.body.username || !req.body.data) {
    return res.status(400).json({ message: "bad request" });
  }

  if (req.method === "POST") {
    try {
      const username = req.body.username;
      const data = req.body.data;
      await db.collection("student").doc(username).set(data);
      // create empty student meta data
      await db.collection("student_metadata").doc(username).set({
        modules_completed: [],
        ongoing_modules: [],
      });
      return res.status(200).json({ message: "Student enrolled" });
    } catch (error) {
      console.error("Error enrolling student:", error);
      return res.status(500).json({ message: "Something went wrong" });
    }
  }
  return res.status(401).json({ message: "Unauthorized request" });
}
export default middleware(handler);
