import middleware from "../../middleware";
import { enroll_student } from "./student_service";

async function handler(req, res) {
  if (!req.body.username || !req.body.data) {
    return res.status(400).json({ message: "bad request" });
  }

  if (req.method === "POST") {
    try {
      enroll_student(student);
      return res.status(200).json({ message: "Student enrolled" });
    } catch (error) {
      console.error("Error enrolling student:", error);
      return res.status(500).json({ message: "Something went wrong" });
    }
  }
  return res.status(401).json({ message: "Unauthorized request" });
}
export default middleware(handler);
