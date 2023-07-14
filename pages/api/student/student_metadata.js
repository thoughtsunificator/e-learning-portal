import { db } from "@/src/utils/firebase";
import middleware from "../middleware";
import _ from "lodash";

async function completeAssignment(res, assignment_id, student) {
    const metadata = (
      await db.collection("student_metadata").doc(student).get()
    ).data();
    for(const course of Object.values(metadata)) {
      const assignments = [...course.assignments.upcoming, ...course.assignments.missed]
      const assignment = assignments.find(assignment => assignment.assignment_id == assignment_id)
      if(assignment) {
        [course.assignments.upcoming, course.assignments.missed].forEach(assignments => assignments.forEach((assignment, index) => {
          if(assignment.assignment_id == assignment_id) {
            assignments.splice(index, 1)
          }
        }))
        course.assignments.completed.push(assignment)
        await db.collection("student_metadata").doc(student).set(metadata);
        return res.status(200).json({ message: "Student metadata updated" });
      }
    }
    return res.status(404).json({ message: "resource not found" });
}

async function completeResource(res, moduleid, resourceid, student) {
    const metadata = (
      await db.collection("student_metadata").doc(student).get()
    ).data();
    for(const course of Object.values(metadata)) {
      const courseModule = course.module_status.ongoing.find(courseModule => courseModule.module_id == moduleid)
      if(courseModule) {
        courseModule.resources_completed.push(resourceid + "")
        await db.collection("student_metadata").doc(student).set(metadata);
        return res.status(200).json({ message: "Student metadata updated" });
      }
    }
    return res.status(404).json({ message: "resource not found" });
}

async function moduleCompleted(res, moduleid, student) {
  try {
    let metadata = (
      await db.collection("student_metadata").doc(student).get()
    ).data();
    let completedmodules = _.get(metadata, "modules_completed", []);
    // if module id already exists donot update the db
    let moduleExists = false;
    completedmodules.forEach((element) => {
      if (element?.moduleid === moduleid) {
        moduleExists = true;
      }
    });
    if (moduleExists) {
      return res.status(200).json({ message: "student updated" });
    }
    completedmodules.push({ moduleid: moduleid, module_completion_date: "" });
    _.update(metadata, "modules_completed", () => completedmodules);
    await db.collection("student_metadata").doc(student).set(metadata);
    return res.status(200).json({ message: "Student metadata updated" });
  } catch (error) {
    console.log("error while updating metadata", error);
    return res.status(401).json({ message: "Unauthorized request" });
  }
}

async function moduleUpdate(res, moduleid, student, percentage) {
  try {
    let metadata = (
      await db.collection("student_metadata").doc(student).get()
    ).data();
    let ongoing_modules = _.get(metadata, "ongoing_modules", []);
    // if module id already exists donot update the db
    let moduleExists = false;
    ongoing_modules.forEach((element) => {
      if (element?.moduleid === moduleid) {
        moduleExists = true;
      }
    });
    if (moduleExists) {
      let updated_modules = ongoing_modules.map((item) => {
        if (item.moduleid === moduleid) {
          let current_percentage = item?.percentage_completed ?? 0;
          return {
            ...item,
            percentage_completed: current_percentage + percentage,
          };
        }
        return item;
      });
      _.update(metadata, "ongoing_modules", () => updated_modules);
      await db.collection("student_metadata").doc(student).set(metadata);
      return res.status(200).json({ message: "percentage updated" });
    } else {
      ongoing_modules.push({
        moduleid,
        percentage_completed: percentage,
        resources_completed: [],
      });
      _.update(metadata, "ongoing_modules", () => ongoing_modules);
      await db.collection("student_metadata").doc(student).set(metadata);
      return res.status(200).json({ message: "percentage updated" });
    }
  } catch (error) {
    console.log("error while updating metadata", error);
    return res.status(401).json({ message: "Unauthorized request" });
  }
}
async function handler(req, res) {
  if (req.method === "POST") {
  }

  if (req.method === "GET") {
    try {
      const student = req.student_username;
      const student_metadata = await db
        .collection("student_metadata")
        .doc(student)
        .get();
      if (student_metadata.exists) {
        return res.status(200).json({ data: student_metadata.data() });
      }
      return res.status(404).json({ message: "resource not found" });
    } catch (error) {
      console.error("error while getting studen metadata");
      return res.status(500).json({ message: "something went wrong" });
    }
  }
  if (req.method === "PUT") {
    try {
      const student = req.student_username;
      const operation = req.body.operation;
      const moduleid = req.body.moduleid;
      switch (operation) {
        case "complete_resource":
          const resourceid = req.body.resourceid;
          return completeResource(res, moduleid, resourceid, student);
        case "complete_assignment":
          const assignmentid = req.body.assignmentid;
          return completeAssignment(res, assignmentid, student);
          case "module_completed":
            return moduleCompleted(res, moduleid, student);
        case "update_module_info":
          const percentage = req.body.percentage;
          if (!percentage) {
            return res
              .status(404)
              .json({ message: "Percentage is not available" });
          }
          return moduleUpdate(res, moduleid, student, percentage);
        default:
          return res.status(404).json({ message: "Operation not available" });
      }
    } catch (error) {}
  }
}

export default middleware(handler);
