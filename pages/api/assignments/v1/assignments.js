import middleware from "../../middleware";
import { getAssignments } from "../../student_metadata/v1/student_metadata_service";

async function handler(req, res) {
  const { method, body, query } = req;
  try {
    switch (method) {
      case "GET":
        let assignments = {};
        try {
          if (query.studentUsername && query.courseid) {
            assignments = await getAssignments(query.studentUsername, query.courseid);
            return res.status(200).json(assignments);
          }
          return res.status(401).json({ message: "missing fields " });
        } catch (error) {
          return res.status(501).json({ message: error });
        }
      default:
        return res.status(401).json({ message: "missing fields " });
    }
  } catch (error) {}
  return res.status(401).json({ message: "missing fields " });
}
export default middleware(handler);
