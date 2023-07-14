import { Fragment, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { SiCoursera } from "react-icons/si";
import { Listbox, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import AddStudents from "../Popups/AddStudents";
import EnrollCoursees from "../Popups/EnrollCoursees";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { students } from "../data";
import DeletePopup from "../Popups/DeletePopup";
import Pagination from "rc-pagination";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const people = [
  { name: "DATE", key: "enrolled_date" },
  { name: "NAME", key: "student_name" },
  { name: "USERNAME", key: "payment" },
];

export default function Students() {
  const [selected, setSelected] = useState(people[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEnroll, setIsEnroll] = useState(false);
  const [student, setStudent] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");
  const [current, setCurrent] = useState(1);
  const [size, setSize] = useState(5);

  const closeModal = () => {
    setIsOpen(false);
    setIsEnroll(false);
    setIsDelete(false);
  };

  const openModal = (data) => {
    setIsOpen(true);
    setStudent(data);
  };

  const openEnrollCourses = () => {
    setIsEnroll(true);
  };

  const openDeleteModal = () => {
    setIsDelete(true);
  };

  const sortedData = [...students].sort((a, b) => {
    const key = selected.key;
    const valueA = a[key].toString().toLowerCase();
    const valueB = b[key].toString().toLowerCase();
    return valueA.localeCompare(valueB);
  });

  let filterStudents = sortedData.filter((obj) =>
    Object.values(obj).some((value) =>
      value.toString().toLowerCase().includes(query.toLowerCase())
    )
  );

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(filterStudents.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
    return filterStudents.slice((current - 1) * pageSize, current * pageSize);
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

  // Use the filtered variable
  return (
    <>
      {/* Students 1 */}
      <div className="mx-auto md:w-11/12">
        <p className="mb-8 text-[30px] font-semibold text-black dark:text-[#ADB3CC]">
          ENROLLED
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <div className="relative w-1/2">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="flex h-[45px] w-full items-center rounded-xl border border-[#d1d5db] bg-transparent pl-3 placeholder:font-light dark:border-[#4b5563]"
            />
            <IoSearchOutline
              size={22}
              className="absolute right-3 top-1/2 -translate-y-1/2 transform fill-black dark:fill-white"
            />
          </div>
          <div className="ml-auto flex items-center gap-5">
            <button
              onClick={openModal}
              className="inline-flex h-[45px] items-center justify-center rounded-xl bg-[#384E85] px-12 text-[14px] text-white dark:bg-[#42BBFF]">
              New
            </button>
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative w-[170px]">
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
                          `relative cursor-pointer select-none px-[30px] py-[12px] text-left text-[14px] dark:hover:bg-[#4b5563] dark:hover:text-[#ffffff] ${
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
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Payment
                </th>
                <th scope="col" className="px-6 py-3">
                  Enrolled date
                </th>
                <th scope="col" className="px-6 py-3">
                  Student name
                </th>
                <th scope="col" className="px-6 py-3">
                  Country
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone number
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filterStudents?.length === 0 && query !== "" ? (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center">
                    Nothing found.
                  </td>
                </tr>
              ) : (
                getData(current, size).map((student, index) => {
                  return (
                    <tr
                      key={index}
                      className="[&_td]:border-b [&_td]:border-b-[#00000029] [&_td]:last:border-b-0 [&_td]:dark:border-[#374151]">
                      <td className="px-6 py-4">{student.student_username}</td>
                      <td className="px-6 py-4"> {student.payment} INR</td>
                      <td className="px-6 py-4">{student.enrolled_date}</td>
                      <td className="px-6 py-4">{student.student_name}</td>
                      <td className="px-6 py-4">{student.country}</td>
                      <td className="px-6 py-4">{student.phone_number}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-5">
                          <FaEdit
                            size={22}
                            onClick={() => openModal(student)}
                            className="cursor-pointer text-[#5A5A5A] dark:text-[#ffffff]"
                          />
                          <MdDelete
                            size={22}
                            onClick={() => {
                              openDeleteModal();
                              setTitle(student.student_name);
                            }}
                            className="cursor-pointer text-[#5A5A5A] dark:text-[#ffffff]"
                          />
                          <SiCoursera
                            size={22}
                            onClick={openEnrollCourses}
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
            total={filterStudents.length}
            current={current}
            pageSize={size}
            showSizeChanger={false}
            itemRender={PrevNextArrow}
            onShowSizeChange={PerPageChange}
            showTitle={false}
            // hideOnSinglePage={true}
          />
        </div>

        <AddStudents
          isOpen={isOpen}
          closeModal={closeModal}
          student={student}
        />
        <EnrollCoursees isOpen={isEnroll} closeModal={closeModal} />
        <DeletePopup isOpen={isDelete} closeModal={closeModal} title={title} />
      </div>
    </>
  );
}
