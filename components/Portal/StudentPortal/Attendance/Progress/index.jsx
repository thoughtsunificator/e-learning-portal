import { PieChart, Pie, Cell } from "recharts";

export default function Progress({
  data,
  COLORS,
  width,
  height,
  outerRadius,
  innerRadius,
}) {
  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={outerRadius}
        innerRadius={innerRadius}
        fill="#8884d8"
        dataKey="value"
        startAngle={90}
        endAngle={-320}
        stroke="transparent">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
