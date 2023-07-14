import { dbCollection } from "@/src/shared/Constants";
import { db } from "@/src/utils/firebase";
import _ from "lodash";
import jwt from "jsonwebtoken";

export async function enroll_student(student_username, course_id, batch_id) {
  try {
  } catch (error) {
    console.error(new Date().toString() + ": ERROR: could not store the user");
  }
}
function createJWT(student_info, expires) {
  // JWT to expire in two hour
  const token =
    jwt.sign({ data: student_info }, process.env.JWT_SECRET, {
      expiresIn: expires,
    }) ?? null;
  return token;
}
export async function login_student(student_username, student_password) {
  const student = await db
    .collection(dbCollection.students)
    .doc(student_username)
    .get();
  if (
    student.exists &&
    student.data()["student_password"] === student_password
  ) {
    // we are picking only things which are needed in jwt to keep the business running
    let student_jwt = _.pick(student.data(), [
      "student_name",
      "student_email",
      "country",
      "student_username",
    ]);
    student_jwt = { ...student_jwt, student_username };
    return {
      token: createJWT(student_jwt, "2h"),
      idToken: createJWT(student_jwt, "24h"),
      student: student_jwt,
    };
  } else {
    return { message: "Unauthorized request" };
  }
}

export async function get_student(student_username) {
  let student = (
    await db.collection(dbCollection.students).doc(student_username).get()
  ).data();
  return student ?? null;
}
export async function create_student(student) {
  await db
    .collection(dbCollection.students)
    .doc(student.student_username)
    .set({ ...student });
  await db
    .collection(dbCollection.student_metadata)
    .doc(student.student_username)
    .set({});
  return true;
}
