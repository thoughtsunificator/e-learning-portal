import { IoSearchOutline } from "react-icons/io5";
import PieCharts from "./PieCharts";
import StudentsEnrolledChart from "./StudentsEnrolledChart";
import { overview } from "../data";
import { useState } from "react";
import Pagination from "rc-pagination";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Overview() {
  const [query, setQuery] = useState("");
  const [current, setCurrent] = useState(1);
  const [size, setSize] = useState(5);

  let filterOverview = overview.filter((obj) =>
    Object.values(obj).some((value) =>
      value.toString().toLowerCase().includes(query.toLowerCase())
    )
  );

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(filterOverview.length / value);
    if (current > newPerPage) {
      setCurrent(newPerPage);
    }
  };

  const getData = (current, pageSize) => {
    return filterOverview.slice((current - 1) * pageSize, current * pageSize);
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
    <div className="mx-auto w-11/12">
      <div className="gap-5 md:grid md:grid-cols-3">
        <div>
          <PieCharts />
        </div>
        <div className="md:col-span-2">
          <StudentsEnrolledChart />
        </div>
      </div>
      <div className="relative inline-block">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          className="flex h-[45px] w-[300px] items-center rounded-xl border border-[#d1d5db] bg-transparent pl-3 dark:border-[#4b5563]"
        />
        <IoSearchOutline
          size={22}
          className="absolute right-3 top-1/2 -translate-y-1/2 transform fill-black dark:fill-white"
        />
      </div>

      <div className="relative mb-6 mt-4 overflow-x-auto shadow-xl sm:rounded-xl">
        <table className="w-full text-left text-sm text-black/70 dark:bg-[#1F2937] dark:text-white/90">
          <thead className="bg-black/10 text-xs uppercase text-black dark:bg-[#374151] dark:text-[#9ca3af] ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Batch ID
              </th>
              <th scope="col" className="px-6 py-3">
                Start
              </th>
              <th scope="col" className="px-6 py-3">
                Instructor
              </th>
              <th scope="col" className="px-6 py-3">
                Total class
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filterOverview?.length === 0 && query !== "" ? (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center">
                  Nothing found.
                </td>
              </tr>
            ) : (
              getData(current, size).map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="[&_td]:border-b [&_td]:border-b-[#00000029] [&_td]:last:border-b-0 [&_td]:dark:border-[#374151]">
                    <td className="px-6 py-4">{item.batch_id}</td>
                    <td className="px-6 py-4">{item.start}</td>
                    <td className="px-6 py-4">{item.instructor}</td>
                    <td className="px-6 py-4">{item.total_classes}</td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="text-green-500 dark:text-[#ebf5ff]0 font-medium hover:underline">
                        {item.status}
                      </a>
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
          total={overview.length}
          current={current}
          pageSize={size}
          showSizeChanger={false}
          itemRender={PrevNextArrow}
          onShowSizeChange={PerPageChange}
          showTitle={false}
          // hideOnSinglePage={true}
        />
      </div>
    </div>
  );
}
