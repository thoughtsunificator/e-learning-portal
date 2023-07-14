import { db } from "@/src/utils/firebase";
import middleware from "../middleware";
import jwt from "jsonwebtoken";
import _ from "lodash";

import { scryptSync } from "node:crypto"

function createJWT(student_info, expires) {
  // JWT to expire in two hour
  const token =
    jwt.sign({ data: student_info }, process.env.JWT_SECRET, {
      expiresIn: expires,
    }) ?? null;
  return token;
}
// TODO: create JWT token here to validate all the
async function handler(req, res) {
  if (req.method === "POST") {
    let reqData = req.body;
    const student = await db.collection("student").doc(reqData.username).get();
    if (student.exists) {
        const derivedKey = scryptSync(reqData.password, process.env.SCRYPT_SALT, 64)
        if(student.data()["student_password"] === derivedKey.toString('hex')) {
          // we are picking only things which are needed in jwt to keep the business running
          let student_jwt = _.pick(student.data(), [
            "student_name",
            "student_email",
            "country",
            "batch_no",
            "course_id",
          ]);
          student_jwt = {...student_jwt, student_username: reqData.username}
          res
            .status(200)
            .json({
              token: createJWT(student_jwt, "2h"),
              idToken: createJWT(student_jwt, "24h"),
              student: student_jwt,
            });
          } else {
            res.status(401).json({ message: "Unauthorized request" });
          }
      
    } else {
      res.status(401).json({ message: "Unauthorized request" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized request" });
  }
}

export default middleware(handler);
