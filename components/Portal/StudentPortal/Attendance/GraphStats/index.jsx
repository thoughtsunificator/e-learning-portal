import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "January", uv: 100 },
  { name: "February", uv: 20 },
  { name: "March", uv: 60 },
  { name: "April", uv: 40 },
  { name: "May", uv: 60 },
  { name: "June", uv: 60 },
];

export default function Index() {
  return (
    <div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart height={250} data={data} barGap={-32}>
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="uv"
            stackId="b"
            fill="#3484B1"
            radius={[8, 8, 0, 0]}
            barSize={32}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
