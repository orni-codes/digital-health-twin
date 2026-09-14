export default function RiskDetection() {
  return (
    <div className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300 mt-4 group">

      <h2 className="font-semibold text-lg mb-4">Risk Detection</h2>

      <div className="grid md:grid-cols-2 gap-4 mb-6">

        {/* Short-term */}
        <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg">
          <p className="text-xs text-gray-500 dark:text-gray-400">SHORT-TERM RISK</p>
          <h3 className="text-xl font-bold text-green-500">12%</h3>
          <span className="text-xs bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded">
            Low
          </span>
        </div>

        {/* Long-term */}
        <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-lg">
          <p className="text-xs text-gray-500 dark:text-gray-400">LONG-TERM RISK</p>
          <h3 className="text-xl font-bold text-orange-500">28%</h3>
          <span className="text-xs bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 px-2 py-1 rounded">
            Moderate
          </span>
        </div>
      </div>

      {/* Factors */}
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">CONTRIBUTING FACTORS</p>

        {[
          ["Elevated resting HR trend", 35],
          ["Sleep quality decline (3-day)", 20],
          ["Reduced activity variance", 15],
          ["Stress biomarker elevation", 30],
        ].map(([label, value], i) => (
          <div key={i} className="flex justify-between py-2 text-sm border-b border-gray-100 dark:border-slate-700/50 last:border-0">
            <span className="text-gray-700 dark:text-gray-300">{label}</span>
            <span className="font-medium text-gray-900 dark:text-white">{value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}