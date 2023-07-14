import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FiX } from "react-icons/fi";
import Notification from "../../../../../app/services/notification-service";

export default function AddAssignment(props) {
  const [assignmentList, setAssignmentList] = useState({
    assignment_id: "",
    assignment_title: "",
    assignment_desc: "",
    assignment_completion_due: "",
  });
  useEffect(() => {
    setAssignmentList(props.assignment);
  }, [props.assignment]);
  const changeAssignmentData = (key, value) => {
    setAssignmentList((prevState) => ({
      ...prevState,
      [key]: value,
    }));
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
                        value={assignmentList?.assignment_id}
                        onChange={(e) =>
                          changeAssignmentData("assignment_id", e.target.value)
                        }
                        placeholder="Order"
                        className="placheholder:font-light flex h-[45px] w-full items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 disabled:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={assignmentList?.assignment_title}
                        onChange={(e) =>
                          changeAssignmentData(
                            "assignment_title",
                            e.target.value
                          )
                        }
                        placeholder="Assignment"
                        className="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={assignmentList?.assignment_completion_due}
                        onChange={(e) =>
                          changeAssignmentData(
                            "assignment_completion_due",
                            e.target.value
                          )
                        }
                        placeholder="Completion"
                        className="placheholder:font-light relative flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                    </div>
                    <div className="col-span-3">
                      <textarea
                        id="scrollbar"
                        value={assignmentList?.assignment_desc}
                        onChange={(e) =>
                          changeAssignmentData(
                            "assignment_desc",
                            e.target.value
                          )
                        }
                        rows={4}
                        placeholder="Description"
                        className="placheholder:font-light flex w-full items-center  rounded-xl border-0 bg-black/5 px-5 py-3 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      ></textarea>
                    </div>
                  </div>
                  <div className="mt-6 text-right">
                    <button
                      onClick={onSubmit}
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
