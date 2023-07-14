import _ from "lodash";
import middleware from "../../middleware";
import { create_course, get_course } from "./course_service";

async function handler(req, res) {
  const { method, body, query } = req;
  try {
    switch (method) {
      case "POST":
        let requiredKeys = [
          "course_id",
          "course_title",
          "course_desc",
          "course_image",
          "course_duration",
        ];
        if (_.every(requiredKeys, _.partial(_.has, body))) {
          await create_course(body);
          return res
            .status(200)
            .json({ message: "course created successfully" });
        }
        return res.status(401).json({ message: "missing fields " });
      case "GET":
        if (!query.course_id) {
          return res.status(401).json({ message: "missing fields " });
        }

        let course = await get_course(query.course_id);
        return course?.message
          ? res.status(401).json(course)
          : res.status(200).json(course);
      default:
        return res.status(401).json({ message: "missing fields " });
    }
  } catch (error) {}
  return res.status(401).json({ message: "missing fields " });
}

export default middleware(handler);
