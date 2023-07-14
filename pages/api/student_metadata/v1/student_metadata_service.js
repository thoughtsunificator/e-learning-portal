import { db, fireSql } from "@/src/utils/firebase";
import { dbCollection } from "@/src/shared/Constants";
import firestore from "firebase/firestore";

export async function getStudentMetadata(studentUsername) {
  try{
    let student = await getStudent(studentUsername);
    return student;
  }catch(err) {
    return null
  }
}

export async function enrollStudentToCourse(student_username, course_id, batch_id) {
  let emptyCourse = {
    status: "not started",
    assignments: {
      upcoming: [],
      missed: [],
      completed: [],
    },
    attendace: {
      attended: 0,
      total_classes: 0,
    },
    module_status: {
      ongoing: [],
      completed: [],
    },
    batch: batch_id,
  };
  await db.collection("batch").doc(batch_id).update({
    batch_strength: firestore.increment(1)
  })
  try {
    await db
      .collection(dbCollection.student_metadata)
      .doc(student_username)
      .update({ [course_id]: emptyCourse });
  } catch (error) {}
}

async function getStudent(studentUsername) {
 let student = await db.collection(dbCollection.student_metadata).doc(studentUsername).get();
 
 return student.data();
}

export async function getAssignments(studentUsername, course_id) {
    let student_metadata = await db.collection(dbCollection.student_metadata).doc(studentUsername).get();
    if(student_metadata.exists){
        return student_metadata.data()?.[course_id]?.assignments ?? {};
    }
    return null;
}

