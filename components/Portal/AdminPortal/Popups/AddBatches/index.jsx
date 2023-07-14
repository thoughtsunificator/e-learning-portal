import { Dialog, Transition } from "@headlessui/react";
import moment from "moment";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import Notification from "../../../../../app/services/notification-service";

export default function AddBatches({ isOpen, closeModal, batches }) {
  const [batchesList, setBatchesList] = useState({
    batch_id: "",
    batch_date: "",
    batch_incharge: "",
    batch_status: "",
    batch_strength: "",
  });
  useEffect(() => {
    setBatchesList(batches);
  }, [batches]);
  const changeBarchessData = (key, value) => {
    setBatchesList((prevState) => ({
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
                <Dialog.Panel className="w-full max-w-[657px] transform rounded-[20px] bg-white p-[70px_30px_30px] text-left transition-all dark:bg-[#090E34]">
                  <div className="relative" onClick={closeModal}>
                    <FiX
                      size={28}
                      className="absolute -right-[10px] -top-[46px] cursor-pointer text-black dark:text-white"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        value={batchesList?.batch_id}
                        onChange={(e) =>
                          changeBarchessData("batch_id", e.target.value)
                        }
                        placeholder="BATCH NO."
                        class="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={batchesList?.batch_incharge}
                        onChange={(e) =>
                          changeBarchessData("batch_incharge", e.target.value)
                        }
                        placeholder="COURSE ID"
                        class="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="date"
                        value={moment(batchesList?.batch_date).format(
                          "YYYY-MM-DD"
                        )}
                        onChange={(e) =>
                          changeBarchessData("batch_date", e.target.value)
                        }
                        placeholder="START"
                        class="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                      <FaCalendarAlt
                        size={22}
                        class="absolute right-2 top-1/2 -translate-y-1/2 transform text-[#787676]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={batchesList?.batch_status}
                        onChange={(e) =>
                          changeBarchessData("batch_status", e.target.value)
                        }
                        placeholder="COURSE ID"
                        class="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={batchesList?.batch_strength}
                        onChange={(e) =>
                          changeBarchessData("batch_strength", e.target.value)
                        }
                        placeholder="INSTRUCTOR"
                        class="placheholder:font-light flex h-[45px] w-full  items-center rounded-xl border-0 bg-black/5 px-5 text-base text-black outline-0 placeholder:text-black/50 dark:bg-white dark:text-black dark:placeholder:text-[#787676]"
                      />
                    </div>
                  </div>
                  <div className="mt-6 text-right">
                    <button
                      onClick={() => {
                        closeModal();
                        Notification.success("successfully added");
                      }}
                      className="inline-flex h-[45px] items-center justify-center rounded-xl bg-[#384E85] px-12 text-[14px] text-white dark:bg-[#42BBFF]">
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
