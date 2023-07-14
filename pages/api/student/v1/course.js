import _ from "lodash";
import { get_course } from "../../course/v1/course_service";
import middleware from "../../middleware";
import { getStudentMetadata } from "../../student_metadata/v1/student_metadata_service";
async function handler(req, res) {
  const { method, body, query } = req;

  try {
    switch (method) {
      case "GET":
        if (query.studentUsername) {
          let student_data = await getStudentMetadata(query.studentUsername);
          let courses = [];
          courses = await _.keys(student_data)?.map(async (courseid) => {
            let course = await get_course(courseid);
            courses.push(course);
          });
          console.log("courses ", courses)
          return res.status(200).json({ data: courses });
        }
        return res.status(401).json({ message: "missing fields " });
      default:
        return res.status(401).json({ message: "missing fields " });
    }
  } catch (error) {}
  return res.status(401).json({ message: "missing fields " });
}

export default middleware(handler);
