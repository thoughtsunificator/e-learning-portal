import { doc, setDoc } from "firebase/firestore";
import _ from "lodash";
const { dbCollection } = require("@/src/shared/Constants");
const { db } = require("@/src/utils/firebase");

export async function create_course(course) {
  try {
    await db.collection(dbCollection.courses).doc(course.course_id).set(course);
  } catch (error) {
    console.error(new Date().toString() + " :  ERROR : Could not store data");
  }
}

export async function add_module(course_id, module) {
  try {
    let modules = await db
      .collection(dbCollection.modules)
      .doc(course_id)
      .get();
    let module_id = module.module_id;

    if (modules.exists) {
      await db
        .collection(dbCollection.modules)
        .doc(course_id)
        .update({ [module_id]: module });
    } else {
      await db
        .collection(dbCollection.modules)
        .doc(course_id)
        .set({ [module_id]: module });
    }
  } catch (error) {
    console.error(
      new Date().toString() + " :  ERROR : Could not store data" + error
    );
  }
}

export async function get_course(course_id) {
  try {
    let course = await db.collection(dbCollection.courses).doc(course_id).get();
    if (!course.exists) {
      return { message: "could not find the course " };
    } else {
      let modules = await db
        .collection(dbCollection.modules)
        .doc(course_id)
        .get();
      let resp = "";
      if (modules.exists) {
        // resp = _.merge(course.data(), { modules: modules.data() });
        let allModules = modules.data();
        _.forEach(allModules, (module, key) => {
          allModules[key] = _.omit(module, ["resources", "assignments"]);
        });

        resp = {
          ..._.omit(course.data(), ["course_desc"]),
          ...{ modules: allModules },
        };
      } else {
        resp = course.data();
      }

      return resp;
    }
  } catch (error) {
    console.error(new Date().toString() + " :  ERROR : Could not store data");
  }
}

export async function module_complete(student_username, course_id, module_id) {
  try {
    let student_metadata = await db
      .collection(dbCollection.student_metadata)
      .doc(student_username)
      .get();

    if (student_metadata.exists) {
      let student_data = student_metadata.data();
      console.log(
        "student data ==",
        student_data?.[course_id]?.module_status?.ongoing , " module id ", module_id
      );

      // _.pull(student_data?.[course_id].course_status.module_status.ongoing, {
      //   module_id,
      // });

      // student_data?.[course_id].course_status.module_status.completed.push(
      //   module_id
      // );

      _.remove(
        student_data?.[course_id]?.module_status?.ongoing,
        (obj) => obj["module_id"] === module_id
      );
      student_data?.[course_id]?.module_status?.completed?.push(module_id)
      await db
        .collection(dbCollection.student_metadata)
        .doc(student_username)
        .set(student_data);
    }
  } catch (error) {}
}

export async function module_started(student_username, course_id, module_id) {
  try {
    let student_metadata = await db
      .collection(dbCollection.student_metadata)
      .doc(student_username)
      .get();

    if (student_metadata.exists) {
      let student_data = student_metadata.data();
      console.log(
        "student data ==",
        student_data?.[course_id]?.module_status?.ongoing
      );
      student_data?.[course_id]?.module_status?.ongoing?.push({
        module_id,
        resources_completed: [],
      });
      await db
        .collection(dbCollection.student_metadata)
        .doc(student_username)
        .set(student_data);
    }
  } catch (error) {}
}

export async function get_module(course_id, module_id) {
  try {
    let modules = (
      await db.collection(dbCollection.modules).doc(course_id).get()
    ).data();
    console.log("modules", modules);
    return { ..._.pick(modules, [module_id]) };
  } catch (error) {
    console.error(new Date().toString() + " :  ERROR : Could not store data");
  }
  return { message: "could not find the module" };
}
