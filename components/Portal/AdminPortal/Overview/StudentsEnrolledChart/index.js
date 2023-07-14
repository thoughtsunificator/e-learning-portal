import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const series = [
  {
    name: "Series 1",
    data: [
      { category: "Jan" },
      { category: "Feb", value: 20 },
      { category: "Mar", value: 35 },
      { category: "Apr", value: 50 },
      { category: "May", value: 25 },
      { category: "Jun", value: 40 },
      { category: "Jul", value: 14 },
      { category: "Aug", value: 30 },
      { category: "Sep", value: 35 },
      { category: "Oct", value: 40 },
      { category: "Nov", value: 10 },
      { category: "Dec", value: 33 },
    ],
  },
];

export default function StudentsEnrolledChart() {
  return (
    <div>
      <h3 className="pl-[150px] text-[18px] font-medium text-black dark:text-white">
        Students Enrolled{" "}
      </h3>
      <div className="h-[500px] w-full [&_line]:!stroke-black [&_line]:dark:!stroke-white [&_path]:!stroke-black [&_path]:dark:!stroke-white [&_text]:!stroke-black [&_text]:dark:!stroke-white">
        <ResponsiveContainer>
          <LineChart>
            <XAxis
              dataKey="category"
              type="category"
              allowDuplicatedCategory={false}
            />
            <YAxis dataKey="value" />
            <Tooltip />
            {series.map((s) => (
              <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
