import { Fragment, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Listbox, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import AddClasses from "../Popups/AddClasses";
import DeletePopup from "../Popups/DeletePopup";
import { live_classes } from "../data";
import Pagination from "rc-pagination";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const people = [{ name: "Ascending" }, { name: "Decending" }];

export default function LiveClasses() {
  const [selected, setSelected] = useState(people[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [editCourseList, setEditCourseList] = useState({});
  const [isDelete, setIsDelete] = useState(false);
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");
  const [current, setCurrent] = useState(1);
  const [size, setSize] = useState(5);

  const closeModal = () => {
    setIsOpen(false);
    setIsDelete(false);
  };

  const openModal = (data) => {
    setEditCourseList(data);
    setIsOpen(true);
  };

  const openDeleteModal = () => {
    setIsDelete(true);
  };
  const sortedData = [...live_classes];

  if (selected.name === "Ascending") {
    sortedData.sort((a, b) =>
      a.date.toLowerCase().localeCompare(b.date.toLowerCase())
    );
  } else if (selected.name === "Decending") {
    sortedData.sort((a, b) =>
      b.date.toLowerCase().localeCompare(a.date.toLowerCase())
    );
  }

  let filteredClasses = sortedData.filter((obj) =>
    Object.values(obj).some((value) =>
      value.toString().toLowerCase().includes(query.toLowerCase())
    )
  );

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(filteredClasses.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
    return filteredClasses.slice((current - 1) * pageSize, current * pageSize);
  };

  const PaginationChange = (page, pageSize) => {
    setCurrent(page);
    setSize(pageSize);
  };

  const PrevNextArrow = (current, type, originalElement) => {
    if (type === "prev") {
      return (
        <button className=" flex items-center gap-x-1.5 text-sm font-medium text-[#344054]">
          <FiArrowLeft /> Previous
        </button>
      );
    }
    if (type === "next") {
      return (
        <button className=" flex items-center gap-x-1.5 text-sm font-medium text-[#344054]">
          Next <FiArrowRight />
        </button>
      );
    }
    return originalElement;
  };

  return (
    <>
      <div className="mx-auto w-11/12">
        <h2 className="font-inter mb-8 text-[30px] font-semibold text-black dark:text-[#ADB3CC]">
          Live Classes
        </h2>
        <div className="flex flex-wrap items-center gap-5">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value)}
              className="flex h-[45px] w-full items-center rounded-xl border border-[#d1d5db] bg-transparent pl-3 dark:border-[#4b5563]"
            />
            <IoSearchOutline
              size={22}
              className="absolute right-3 top-1/2 -translate-y-1/2 transform fill-black dark:fill-white"
            />
          </div>
          <div className="ml-auto flex items-center gap-3">
            <p className="text-xs text-black/50 dark:text-white">Sort by:</p>
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative ml-auto w-[170px]">
                <Listbox.Button className="relative h-[45px] w-full cursor-pointer rounded-xl border border-[#d1d5db] py-2 pl-3 pr-10 text-left text-black dark:border-[#4b5563] dark:bg-[#4b5563] dark:text-white">
                  <span className="block truncate text-[14px]">
                    {selected.name}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <BsChevronDown
                      size={16}
                      className="text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">
                  <Listbox.Options className="absolute z-40 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 shadow focus:outline-none dark:bg-[#374151] sm:text-sm">
                    {people.map((person, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none px-[30px] py-[12px] text-left text-[14px] dark:hover:bg-[#4b5563] dark:hover:text-[#ffffff] ${
                            active ? "bg-[#4b5563] text-[#ffffff] " : ""
                          }`
                        }
                        value={person}>
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate  ${
                                selected ? "font-medium" : "font-normal"
                              }`}>
                              {person.name}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
        <div className="relative mb-6 mt-4 overflow-x-auto shadow-xl sm:rounded-xl">
          <table className="w-full text-left text-sm text-black/70 dark:bg-[#1F2937] dark:text-white/90">
            <thead className="bg-black/10 text-xs uppercase text-black dark:bg-[#374151] dark:text-[#9ca3af]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  TIME
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Passcode
                </th>
                <th scope="col" className="px-6 py-3">
                  Meeting Link
                </th>
                <th scope="col" className="px-6 py-3">
                  Instructor
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredClasses?.length === 0 && query !== "" ? (
                <tr>
                  <td colSpan={8} className="px-6 py-4 text-center">
                    Nothing found.
                  </td>
                </tr>
              ) : (
                getData(current, size).map((course, index) => {
                  return (
                    <tr
                      key={index}
                      className="[&_td]:border-b [&_td]:border-b-[#00000029] [&_td]:last:border-b-0 [&_td]:dark:border-[#374151]">
                      <td className="px-6 py-4">{course.title}</td>
                      <td className="px-6 py-4"> {course.date}</td>
                      <td className="px-6 py-4">{course.time}</td>
                      <td className="px-6 py-4">
                        {course.meeting_description}
                      </td>
                      <td className="px-6 py-4">{course.passcode}</td>
                      <td className="px-6 py-4">{course.meeting_link}</td>
                      <td className="px-6 py-4">{course.instructor}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-5">
                          <FaEdit
                            size={22}
                            onClick={() => openModal(course)}
                            className="cursor-pointer text-[#5A5A5A] dark:text-[#ffffff]"
                          />
                          <MdDelete
                            size={22}
                            onClick={() => {
                              openDeleteModal();
                              setTitle(course.title);
                            }}
                            className="cursor-pointer text-[#5A5A5A] dark:text-[#ffffff]"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        <div className="mx-auto my-6 flex w-fit overflow-hidden rounded-lg border border-black/5 shadow-xl dark:bg-white/80">
          <Pagination
            className="flex items-center divide-x divide-black/10 text-xs font-normal leading-5 dark:text-black"
            onChange={PaginationChange}
            total={filteredClasses.length}
            current={current}
            pageSize={size}
            showSizeChanger={false}
            itemRender={PrevNextArrow}
            onShowSizeChange={PerPageChange}
            showTitle={false}
            // hideOnSinglePage={true}
          />
        </div>
        <div className="mt-3 flex justify-end">
          <button
            onClick={openModal}
            className="inline-flex h-[45px] items-center justify-center rounded-xl bg-[#384E85] px-12 text-[14px] text-white dark:bg-[#42BBFF]">
            Add
          </button>
        </div>
        <AddClasses
          isOpen={isOpen}
          closeModal={closeModal}
          editCourseList={editCourseList}
        />
        <DeletePopup isOpen={isDelete} closeModal={closeModal} title={title} />
      </div>
    </>
  );
}
