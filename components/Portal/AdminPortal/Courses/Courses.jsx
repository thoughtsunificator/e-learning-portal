import { FaEdit } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import DeletePopup from "../Popups/DeletePopup";
import { useState } from "react";
import { courses } from "../data";
import Tooltip from "../Tooltip";
import Notification from "../../../../app/services/notification-service";

import Pagination from "rc-pagination";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function CoursesList({ handleEdit, editCourses }) {
  let [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");
  const [current, setCurrent] = useState(1);
  const [size, setSize] = useState(5);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  let filterCourses = courses.filter((obj) =>
    Object.values(obj).some((value) =>
      value.toString().toLowerCase().includes(query.toLowerCase())
    )
  );

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(filterCourses.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
    return filterCourses.slice((current - 1) * pageSize, current * pageSize);
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
          Courses
        </h2>
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
        <div className="relative mb-6 mt-4 shadow-xl sm:rounded-xl">
          <table className="w-full rounded-t-xl text-left text-sm text-black/70 dark:bg-[#1F2937] dark:text-white/90">
            <thead className=" bg-black/10 text-xs uppercase text-black dark:bg-[#374151] dark:text-[#9ca3af] ">
              <tr className="first:[&_th]:rounded-tl-xl last:[&_th]:rounded-tr-xl">
                <th scope="col" className="whitespace-nowrap px-6 py-3">
                  Course ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Course
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filterCourses?.length === 0 && query !== "" ? (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center">
                    Nothing found.
                  </td>
                </tr>
              ) : (
                getData(current, size).map((course, index) => {
                  return (
                    <tr
                      key={index}
                      className="[&_td]:border-b [&_td]:border-b-[#00000029] [&_td]:last:border-b-0 [&_td]:dark:border-[#374151]">
                      <td className="px-6 py-4">{course.course_id}</td>
                      <td className="px-6 py-4"> {course.course_title}</td>
                      <td className="px-6 py-4 text-center">
                        <Tooltip
                          tooltipText={course.course_desc}
                          text={course.course_short_desc}
                        />
                      </td>
                      <td className="px-6 py-4">{course.course_duration}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-5">
                          <FaEdit
                            size={22}
                            className="cursor-pointer text-[#5A5A5A] dark:text-[#ffffff]"
                            onClick={() => {
                              handleEdit(1);
                              editCourses(course);
                            }}
                          />
                          <MdDelete
                            size={22}
                            onClick={() => {
                              openModal();
                              setTitle(course.course_title);
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
            total={filterCourses.length}
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
            onClick={() => {
              handleEdit(1);
              editCourses("");
            }}
            className="inline-flex h-[45px] items-center justify-center rounded-xl bg-[#384E85] px-12 text-[14px] text-white dark:bg-[#42BBFF]">
            New
          </button>
        </div>
        <DeletePopup
          isOpen={isOpen}
          closeModal={closeModal}
          handleEdit={handleEdit}
          screen={0}
          title={title}
        />
        {/* <div className="mt-4 mb-12">
          <img
            src="/images/admin_portal/courses_list.png"
            className="object-contain mx-auto"
          />
        </div> */}
      </div>
    </>
  );
}
