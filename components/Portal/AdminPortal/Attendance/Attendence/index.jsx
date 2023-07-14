import { Fragment, useState } from "react";
import Pagination from "rc-pagination";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Attendance({ setDetail, attendance }) {
  const [current, setCurrent] = useState(1);
  const [size, setSize] = useState(5);

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(attendance.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
    return attendance.slice((current - 1) * pageSize, current * pageSize);
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
      <h2 className="font-inter mb-8 text-[30px] font-semibold text-black dark:text-[#ADB3CC]">
        Attendance
      </h2>

      <div className="relative mb-6 mt-4 overflow-x-auto shadow-xl sm:rounded-xl">
        <table className="w-full text-left text-sm text-black/70 dark:bg-[#1F2937] dark:text-white/90">
          <thead className="bg-black/10 text-xs uppercase text-black dark:bg-[#374151] dark:text-[#9ca3af] ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Batch ID
              </th>
              <th scope="col" className="px-6 py-3">
                COURSE
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                INSTRUCTOR
              </th>
              <th scope="col" className="px-6 py-3 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {getData(current, size)?.map((attend, index) => {
              return (
                <tr
                  key={index}
                  className="[&_td]:border-b [&_td]:border-b-[#00000029] [&_td]:last:border-b-0 [&_td]:dark:border-[#374151]">
                  <td className="px-6 py-3">{attend.batch_id}</td>
                  <td className="px-6 py-3"> {attend.name}</td>
                  <td className="px-6 py-3 text-center">{attend.instructor}</td>
                  <td className="px-6 py-3 text-center">
                    <button
                      onClick={() => setDetail(false)}
                      className="inline-flex h-[26px] items-center justify-center rounded-[24px] bg-[#374251] px-5 text-[11px] font-normal text-[#42BBFF]">
                      Mark
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mx-auto my-6 flex w-fit overflow-hidden rounded-lg border border-black/5 shadow-xl dark:bg-white/80">
        <Pagination
          className="flex items-center divide-x divide-black/10 text-xs font-normal leading-5 dark:text-black"
          onChange={PaginationChange}
          total={attendance.length}
          current={current}
          pageSize={size}
          showSizeChanger={false}
          itemRender={PrevNextArrow}
          onShowSizeChange={PerPageChange}
          showTitle={false}
          // hideOnSinglePage={true}
        />
      </div>
    </>
  );
}
