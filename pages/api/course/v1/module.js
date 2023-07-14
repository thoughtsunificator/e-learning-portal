import _ from "lodash";
import middleware from "../../middleware";
import {
  add_module,
  get_module,
  module_complete,
  module_started,
} from "./course_service";

async function handler(req, res) {
  const { method, body, query } = req;
  try {
    switch (method) {
      case "POST":
        let requiredKeys = [
          "module_id",
          "module_title",
          "course_id",
          "order",
          "module_image",
          "module_duration",
          "resources",
          "module_desc",
          "assignments",
        ];
        if (_.every(requiredKeys, _.partial(_.has, body)) && body.course_id) {
          await add_module(body.course_id, body);
          return res
            .status(200)
            .json({ message: "course created successfully" });
        }
        return res.status(401).json({ message: "missing fields " });
      case "GET":
        if (query.module_id && query.course_id) {
          let resp = await get_module(query.course_id, query.module_id);
          return resp && resp?.message
            ? res.status(401).json(resp)
            : res.status(200).json(resp);
        }
        return res.status(401).json({ message: "missing fields" });
      case "PUT":
        if (query.studentUsername && query.courseid && query.moduleid) {
          if (query.operation === "start") {
            await module_started(
              query.studentUsername,
              query.courseid,
              query.moduleid
            );
          } else if (query.operation === "end") {
            await module_complete(
              query.studentUsername,
              query.courseid,
              query.moduleid
            );
          }
          return res.status(200).json({ message: "student module updated" });
        }
        return res.status(400).json({ message: "bad request" });
      default:
        return res.status(401).json({ message: "missing fields " });
    }
  } catch (error) {}
  return res.status(401).json({ message: "missing fields " });
}

export default middleware(handler);
