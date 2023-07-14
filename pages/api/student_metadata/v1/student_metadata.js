import middleware from "../../middleware";
import {
  enrollStudentToCourse,
  getStudentMetadata,
} from "./student_metadata_service";

async function handler(req, res) {
  const { method, query } = req;
  try {
    switch (method) {
      case "GET":
        let student = await getStudentMetadata(req.student_username);
        return res.status(200).json({ data: student });
      case "PUT":
        // enroll student to the course
        if (query.studentUsername && query.courseid && query.batchid) {
          await enrollStudentToCourse(
            query.studentUsername,
            query.courseid,
            query.batchid
          );
          return res.status(200).json({ message: "student enrolled" });
        }
        break;
      default:
        return res.status(401).status({ message: "bad request" });
    }
  } catch (error) {
    return res.status(401).status({ message: "method not allowed" });
  }
  return res.status(401).status({ message: "method not allowed" });
}

export default middleware(handler);
