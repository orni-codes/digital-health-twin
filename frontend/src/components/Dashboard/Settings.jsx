import { useState } from "react";
import { Sun, Moon } from "lucide-react";

import ToggleRow from "./ToggleRow";
import AccountRow from "./AccountRow";
import SecurityRow from "./SecurityRow";

export default function Settings() {

  const [notifications, setNotifications] = useState({
    critical: true,
    warning: true,
    info: false,
    daily: true,
    weekly: true,
    twin: true,
  });

  const toggle = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-6 text-slate-800 dark:text-white">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-slate-500 dark:text-gray-400">
          Manage your preferences, notifications, and account
        </p>
      </div>
      
      {/* NOTIFICATIONS */}
      <div className="bg-white dark:bg-slate-800 border border-gray-200/50 dark:border-slate-700/50 rounded-xl p-6 shadow-sm">
        <h2 className="mb-4 font-medium">Notifications</h2>

        <p className="text-sm text-slate-500 dark:text-gray-400 mb-3">Alert Preferences</p>

        <ToggleRow
          label="Critical alerts"
          value={notifications.critical}
          onToggle={() => toggle("critical")}
        />

        <ToggleRow
          label="Warning alerts"
          value={notifications.warning}
          onToggle={() => toggle("warning")}
        />

        <ToggleRow
          label="Informational alerts"
          value={notifications.info}
          onToggle={() => toggle("info")}
        />

        <hr className="my-6 border-gray-200/50 dark:border-slate-700/50" />

        <p className="text-sm text-slate-500 dark:text-gray-400 mb-3">Reports & Digest</p>

        <ToggleRow
          label="Daily health digest"
          value={notifications.daily}
          onToggle={() => toggle("daily")}
        />

        <ToggleRow
          label="Weekly summary report"
          value={notifications.weekly}
          onToggle={() => toggle("weekly")}
        />

        <ToggleRow
          label="Twin status changes"
          value={notifications.twin}
          onToggle={() => toggle("twin")}
        />
      </div>

      {/* ACCOUNT */}
      <div className="bg-white dark:bg-slate-800 border border-gray-200/50 dark:border-slate-700/50 rounded-xl p-6 shadow-sm">
        <h2 className="mb-4 font-medium">Account</h2>

        <AccountRow label="Name" value="Orni Bera" />
        <AccountRow label="Email" value="beraorni@gmail.com" />
        <AccountRow
          label="Role"
          value="Patient — Premium Plan"
          badge="Premium"
        />
      </div>

      {/* SECURITY */}
      <div className="bg-white dark:bg-slate-800 border border-gray-200/50 dark:border-slate-700/50 rounded-xl p-6 shadow-sm">
        <h2 className="mb-4 font-medium">Security</h2>

        <SecurityRow
          title="Two-Factor Authentication"
          desc="Enabled via authenticator app"
          status="Active"
        />

        <SecurityRow
          title="Data Encryption"
          desc="AES-256 encryption at rest"
          status="Active"
        />

        <SecurityRow
          title="Last Password Change"
          desc="32 days ago"
          action="Change"
        />
      </div>
    </div>
  );
}