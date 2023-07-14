import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Combobox } from "@headlessui/react";
import { FiX } from "react-icons/fi";
const people = [
  { id: 1, name: "Course 1" },
  { id: 2, name: "Course 2" },
  { id: 3, name: "Course 3" },
];

export default function AddClasses({ isOpen, closeModal }) {
  const [selected, setSelected] = useState([]);
  const removeCourse = (id) => {
    setSelected((prevSelected) =>
      prevSelected.filter((item) => item.id !== id)
    );
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
                <Dialog.Panel className="w-full max-w-[500px] transform rounded-[20px] bg-white p-[70px_30px_30px] text-left transition-all dark:bg-[#090E34]">
                  <div className="relative" onClick={closeModal}>
                    <FiX
                      size={28}
                      className="absolute -right-[10px] -top-[46px] cursor-pointer text-black dark:text-white"
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <Combobox value={selected} onChange={setSelected} multiple>
                      <div className="relative w-full cursor-pointer">
                        <Combobox.Button className="relative w-full">
                          <Combobox.Input
                            placeholder="Select Course"
                            value={selected && selected[0]?.name}
                            class="placheholder:font-light flex h-[45px] w-full items-center rounded-xl border-0 bg-black/5 px-5 text-base text-white outline-0 placeholder:text-black/50 dark:bg-white dark:text-black/5 dark:placeholder:text-[#787676]"
                          />
                          {selected.length > 0 && (
                            <ul className="absolute left-[12px] top-1/2 flex -translate-y-1/2 transform flex-wrap items-center gap-5 md:gap-5">
                              {selected.map((course) => (
                                <li key={course.id}>
                                  <div className="flex h-[26px] cursor-pointer items-center gap-5 whitespace-nowrap rounded-xl border bg-transparent px-3 text-[10px] text-black dark:border-[#D9D9D9]">
                                    {course.name}
                                    <AiOutlineCloseCircle
                                      size={22}
                                      onClick={() => removeCourse(course.id)}
                                      className="text-black"
                                    />
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}
                        </Combobox.Button>{" "}
                        <Combobox.Options className="absolute z-40 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 shadow focus:outline-none dark:bg-[#374151] sm:text-sm">
                          {people.map((person) => (
                            <Combobox.Option
                              key={person.id}
                              value={person}
                              className={({ active }) =>
                                `relative cursor-pointer select-none px-[30px] py-[12px] text-left text-[14px] dark:hover:bg-[#4b5563] dark:hover:text-[#ffffff] ${
                                  active ? "bg-[#4b5563] text-[#ffffff] " : ""
                                }`
                              }>
                              {person.name}
                            </Combobox.Option>
                          ))}
                        </Combobox.Options>
                      </div>
                    </Combobox>
                  </div>
                  <div className="mt-6 text-right">
                    <button
                      onClick={closeModal}
                      className="inline-flex h-[45px] items-center justify-center rounded-xl bg-[#384E85] px-12 text-[14px] text-white dark:bg-[#42BBFF]">
                      Enroll
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
