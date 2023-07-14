import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import Notification from "../../../../../app/services/notification-service";

export default function AddClasses({ isOpen, closeModal, editCourseList }) {
  const [coursesList, setCoursesList] = useState({
    title: "",
    meeting_description: "",
    date: "",
    passcode: "",
    meeting_link: "",
    time: "",
    instructor: "",
  });
  useEffect(() => {
    setCoursesList(editCourseList);
  }, [editCourseList]);
  const changeCourseData = (key, value) => {
    setCoursesList((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
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
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[1100px] transform overflow-hidden rounded-[20px] bg-white p-[70px_30px_30px] text-left transition-all dark:bg-[#090E34]">
                  <div className="relative" onClick={closeModal}>
                    <FiX
                      size={28}
                      className="absolute -right-[10px] -top-[46px] cursor-pointer text-black dark:text-white"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
                    <div>
                      <input
                        type="text"
                        value={coursesList?.title}
                        onChange={(e) =>
                          changeCourseData("title", e.target.value)
                        }
                        placeholder="TITLE"
                        class="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={coursesList?.time}
                        onChange={(e) =>
                          changeCourseData("time", e.target.value)
                        }
                        placeholder="TIME"
                        class="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={coursesList?.date}
                        onChange={(e) =>
                          changeCourseData("date", e.target.value)
                        }
                        placeholder="DATE"
                        class="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={coursesList?.passcode}
                        onChange={(e) =>
                          changeCourseData("passcode", e.target.value)
                        }
                        placeholder="PASSCODE"
                        class="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <input
                        type="text"
                        value={coursesList?.meeting_link}
                        onChange={(e) =>
                          changeCourseData("meeting_link", e.target.value)
                        }
                        placeholder="LINK"
                        class="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={coursesList?.instructor}
                        onChange={(e) =>
                          changeCourseData("instructor", e.target.value)
                        }
                        placeholder="INSTRUCTOR"
                        class="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                    </div>
                    <div className="md:col-span-4">
                      <textarea
                        id="scrollbar"
                        type="text"
                        rows={5}
                        value={coursesList?.meeting_description}
                        onChange={(e) =>
                          changeCourseData(
                            "meeting_description",
                            e.target.value
                          )
                        }
                        placeholder="DESCRIPTION"
                        class="placheholder:font-light flex w-full items-center  rounded-xl border-0 bg-black/5 px-5 py-3 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      ></textarea>
                    </div>
                  </div>
                  <div className="mt-6 text-right">
                    <button
                      onClick={() => {
                        closeModal();
                        Notification.success("successfully added");
                      }}
                      className="inline-flex h-[45px] items-center justify-center rounded-xl bg-[#384E85] px-12 text-[14px] text-white dark:bg-[#42BBFF]"
                    >
                      Add
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
