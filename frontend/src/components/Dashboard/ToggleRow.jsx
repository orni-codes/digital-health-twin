export default function ToggleRow({ label, value, onToggle }) {
  return (
    <div className="flex justify-between items-center py-3">
      <p className="font-medium">{label}</p>

      <div
        onClick={onToggle}
        className={`w-10 h-5 flex items-center rounded-full cursor-pointer transition-colors ${
          value ? "bg-teal-500" : "bg-slate-300 dark:bg-slate-600"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full transform transition-transform ${
            value ? "translate-x-5" : "translate-x-1"
          }`}
        />
      </div>
    </div>
  );
}