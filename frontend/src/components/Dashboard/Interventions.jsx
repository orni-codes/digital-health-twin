export default function Interventions() {
  const data = [
    {
      title: "Increased daily steps target",
      date: "Feb 10",
      status: "Active",
      value: 78,
    },
    {
      title: "Sleep hygiene protocol",
      date: "Jan 28",
      status: "Completed",
      value: 85,
    },
    {
      title: "Stress reduction program",
      date: "Jan 15",
      status: "Active",
      value: 62,
    },
    {
      title: "Dietary adjustment plan",
      date: "Dec 20",
      status: "Completed",
      value: 91,
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300 mt-4 group">

      <h2 className="font-semibold text-lg mb-4">Interventions</h2>

      <div className="space-y-4">
        {data.map((item, i) => (
          <div key={i} className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg">

            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.date} • {item.status}
                </p>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold">{item.value}%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Effectiveness</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-3 h-1 bg-gray-200 dark:bg-zinc-700 rounded">
              <div
                className="h-1 bg-cyan-400 rounded"
                style={{ width: `${item.value}%` }}
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}