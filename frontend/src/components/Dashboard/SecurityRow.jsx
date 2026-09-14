export default function SecurityRow({ title, desc, status, action }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-200/50 dark:border-slate-700/50 last:border-b-0">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-slate-500 dark:text-gray-400">{desc}</p>
      </div>

      {status && (
        <span className="bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400 text-xs px-2 py-1 rounded-md font-medium">
          {status}
        </span>
      )}

      {action && (
        <button className="text-teal-600 dark:text-teal-400 text-sm font-medium hover:underline">
          {action}
        </button>
      )}
    </div>
  );
}