import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import moment from "moment/moment";
import { FiX } from "react-icons/fi";
import Notification from "../../../../../app/services/notification-service";

export default function AddClasses(props) {
  const [studentList, setStudentList] = useState({
    student_username: "",
    student_name: "",
    payment: "",
    enrolled_date: "",
    country: "",
    phone_number: "",
  });
  useEffect(() => {
    setStudentList(props.student);
  }, [props.student]);
  const changeStudentsData = (key, value) => {
    setStudentList((prevState) => ({
      ...prevState,
      [key]: value,
    }));
    if (
      key == "student_name" &&
      studentList?.student_name?.length >= 3 &&
      studentList?.student_username == ""
    ) {
      const alphaNumChar = Array.from({ length: 5 }, () =>
        Math.random() < 0.4
          ? String.fromCharCode(Math.floor(Math.random() * 10) + 48)
          : String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      ).join("");
      setStudentList((prevState) => ({
        ...prevState,
        student_username: value.substring(0, 3) + alphaNumChar,
      }));
    } else if (key == "student_name" && studentList?.student_name?.length < 3) {
      setStudentList((prevState) => ({
        ...prevState,
        student_username: "",
      }));
    }
  };

  const onSubmit = () => {
    props.closeModal();
    Notification.success("successfully added");
  };
  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={props.closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-[1100px] transform rounded-[20px] bg-white p-[70px_30px_30px] text-left transition-all dark:bg-[#090E34]">
                  <div className="relative" onClick={props.closeModal}>
                    <FiX
                      size={28}
                      className="absolute -right-[10px] -top-[46px] cursor-pointer text-black dark:text-white"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-5">
                    <div>
                      <input
                        type="text"
                        value={studentList?.student_username}
                        onChange={(e) =>
                          changeStudentsData("student_username", e.target.value)
                        }
                        disabled={true}
                        placeholder="Student Username"
                        className="placheholder:font-light flex h-[45px] w-full items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 disabled:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={studentList?.student_name}
                        onChange={(e) =>
                          changeStudentsData("student_name", e.target.value)
                        }
                        placeholder="Student Name"
                        className="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={studentList?.payment}
                        onChange={(e) =>
                          changeStudentsData("payment", e.target.value)
                        }
                        placeholder="Payment"
                        className="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                    </div>
                    <div>
                      <input
                        type="date"
                        value={moment(studentList?.enrolled_date).format(
                          "YYYY-MM-DD"
                        )}
                        onChange={(e) =>
                          changeStudentsData("enrolled_date", e.target.value)
                        }
                        placeholder="Enrolled date"
                        className="placheholder:font-light relative flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={studentList?.country}
                        onChange={(e) =>
                          changeStudentsData("country", e.target.value)
                        }
                        placeholder="Country"
                        className="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={studentList?.phone_number}
                        pattern="[0-9]*"
                        onChange={(e) =>
                          changeStudentsData("phone_number", e.target.value)
                        }
                        placeholder="Phone Number"
                        className="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                    </div>
                  </div>
                  <div className="mt-6 text-right">
                    <button
                      onClick={onSubmit}
                      className="inline-flex h-[45px] items-center justify-center rounded-xl bg-[#384E85] px-12 text-[14px] text-white dark:bg-[#42BBFF]">
                      Add
                    </button>
                  </div>
                  {/* </form> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
