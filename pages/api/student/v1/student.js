import { db } from "@/src/utils/firebase";
import { create_student } from "./student_service";
import { dbCollection } from "@/src/shared/Constants";
import middleware from "../../middleware";
import _ from "lodash";

async function handler(req, res) {
  const { method, body } = req;

  try {
    switch (method) {
      case "GET":
        // Retrieve all students
        await database.ref(dbCollection.students).once("value", (snapshot) => {
          const students = snapshot.val();
          res.status(200).json(students);
        });
        break;

      case "POST":
        // Create a new student
        let requiredKeys = [
          "student_username",
          "student_password",
          "student_email",
          "enrolled_date",
        ];
        if (_.every(requiredKeys, _.partial(_.has, body))) {
          if (await create_student(body)) {
            return res
              .status(200)
              .json({ message: "student created successfully" });
          }
        }
        return res.status(401).json({ message: "something went wrong" });

      case "PUT":
        // Update a student
        // const { student_username, ...updatedData } = body;
        // database
        //   .ref(`students/${student_username}`)
        //   .update(updatedData)
        //   .then(() => {
        //     res.status(200).json({ message: "Student updated successfully" });
        //   })
        //   .catch((error) => {
        //     res.status(500).json({ error: error.message });
        //   });
        break;

      case "DELETE":
        // Delete a student
        const { student_username } = body;
        if (!student_username) {
          return res.status(401).json({ message: "username is needed" });
        }
        await db
          .collection(dbCollection.students)
          .doc(student_username)
          .delete();
        return res
          .status(200)
          .json({ message: `student ${student_username} deleted !` });

      default:
        return res.status(405).json({ error: "Method Not Allowed" });
    }
  } catch (error) {}
}
export default middleware(handler);
