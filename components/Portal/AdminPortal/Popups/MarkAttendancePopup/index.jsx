import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FiX } from "react-icons/fi";
import Notification from "../../../../../app/services/notification-service";

export default function MarkAttendancePopup({ isOpen, closeModal, setDetail }) {
  return (
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
                <p className="text-center text-[20px] font-semibold text-black dark:text-white">
                  Mark attendance for 35 students of batch 1{" "}
                </p>
                <div className="mt-6 flex justify-center gap-4 text-center">
                  <button
                    onClick={closeModal}
                    className="inline-flex h-[45px] items-center justify-center rounded-xl bg-[#374251] px-12 text-[14px] text-white">
                    No
                  </button>
                  <button
                    onClick={() => {
                      closeModal();
                      setDetail(true);
                      Notification.success("successfully added");
                    }}
                    className="inline-flex h-[45px] items-center justify-center rounded-xl bg-red px-12 text-[14px] text-white">
                    Yes
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
