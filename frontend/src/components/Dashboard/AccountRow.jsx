export default function AccountRow({ label, value, badge }) {
  return (
    <div className="flex justify-between py-3 border-b border-gray-200/50 dark:border-slate-700/50 last:border-b-0">
      <div>
        <p className="text-sm text-slate-500 dark:text-gray-400">{label}</p>
        <p className="font-medium">{value}</p>
      </div>

      {badge && (
        <span className="bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300 text-xs px-2 py-1 rounded-md font-medium h-fit mt-1">
          {badge}
        </span>
      )}
    </div>
  );
}