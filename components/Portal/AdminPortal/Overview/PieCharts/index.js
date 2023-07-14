import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "B2 - 49", value: 400 },
  { name: "B3-45", value: 400 },
  { name: "B1 - 41", value: 400 },
  { name: "B4 - 47", value: 400 },
];
const COLORS = ["#71C307", "#247BAB", "#A1841D", "#AE0000"];

export default function PieCharts() {
  return (
    <div className="mx-auto max-w-[400px]">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          label={(entry) => entry.name}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
