import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Tue", actual: 72, predicted: 74 },
  { day: "Wed", actual: 68, predicted: 70 },
  { day: "Thu", actual: 80, predicted: 78 },
  { day: "Fri", actual: 74, predicted: 76 },
  { day: "Sat", actual: 66, predicted: 72 },
  { day: "Sun", actual: 71, predicted: 73 },
];

export default function HealthDynamics() {
  return (
    <div className="bg-linear-to-r from-primary/50 to-cyan-500/50  rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300 mt-4 group">

      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-semibold text-3xl">Health Dynamics</h2>
          <p className="text-lg text-gray-700">
            Historical vs predicted trajectory
          </p>
        </div>

        <select className="text-sm border rounded px-2 py-1 dark:bg-zinc-800">
          <option>7 Days</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#ffffffff" />
          <Tooltip />
          <Line type="monotone" dataKey="actual" stroke="#ff0077ff" />
          <Line type="monotone" dataKey="predicted" stroke="#00215fff" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}