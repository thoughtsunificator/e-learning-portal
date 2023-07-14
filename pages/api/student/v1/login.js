import middleware from "../../middleware";
import { login_student } from "./student_service";

async function handler(req, res) {
  const { method, body } = req;
  if (method === "POST") {
    let student_cred = body;
    if (student_cred?.student_username && student_cred?.student_password) {
      let loggedin_student =await login_student(
        student_cred.student_username,
        student_cred.student_password
      );
      return loggedin_student?.message
        ? res
            .status(401)
            .json({ message: "something went wrong while logging in" })
        : res.status(200).json({ ...loggedin_student });
    }
  }
  return res.status(401).json({ message: "something went wrong ! unable to login please try later" });
}

export default middleware(handler);
