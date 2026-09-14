import { useState } from "react";
import { Phone, Mail, Clock } from "lucide-react";
export default function Help() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    issue: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Issue submitted (dummy)");
    setForm({ name: "", email: "", issue: "" });
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-black dark:text-white">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Help & Support</h1>
        <p className="text-gray-500 dark:text-gray-400">
          We’re here to help you with anything related to your health twin
        </p>
      </div>

      {/* CONTACT INFO */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300 mb-6">

  <h2 className="font-semibold mb-6 text-xl text-center">
    Contact Us
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:pl-50 lg:pr-50">

    {/* PHONE */}
    <div className="flex flex-col items-center justify-center bg-orange-200 p-6 rounded-xl hover:scale-105 transition ">
      <Phone className="w-12 h-12 text-amber-950 mb-3" />
      <p className="text-sm text-center text-amber-800">
        +91 98765 43210
      </p>
    </div>

    {/* EMAIL */}
    <div className="flex flex-col items-center justify-center bg-orange-200 p-6 rounded-xl hover:scale-105 transition">
      <Mail className="w-12 h-12 text-amber-950 mb-3" />
      <p className="text-sm text-center text-amber-800">
        support@digitalhealthtwin.com
      </p>
    </div>

    {/* TIME */}
    <div className="flex flex-col items-center justify-center bg-orange-200 p-6 rounded-xl hover:scale-105 transition">
      <Clock className="w-12 h-12 text-amber-950 mb-3" />
      <p className="text-sm text-center text-amber-800">
        9 AM – 6 PM (Mon–Sat)
      </p>
    </div>

  </div>
</div>
      {/* REPORT ISSUE FORM */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300 mb-6 group">
        <h2 className="font-semibold mb-4 text-xl">Report an Issue</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border-primary border rounded-xl dark:bg-zinc-800 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border-primary border rounded-xl dark:bg-zinc-800 outline-none"
          />

          <textarea
            name="issue"
            placeholder="Describe your issue..."
            value={form.issue}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 border-primary border rounded-xl dark:bg-zinc-800 outline-none"
          />

          <button
            type="submit"
            className="bg-teal-500 text-white px-5 py-2 rounded-xl hover:bg-teal-600"
          >
            Submit Issue
          </button>

        </form>
      </div>

      {/* FAQ */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300 mb-6 group">
        <h2 className="font-semibold mb-4 text-xl">FAQs</h2>

        <div className="space-y-4 text-sm">

          <div>
            <p className="font-medium">What is a Digital Health Twin?</p>
            <p className="text-gray-500 dark:text-gray-400">
              It is a virtual model of your health that helps predict future risks and outcomes.
            </p>
          </div>

          <div>
            <p className="font-medium">Is my data safe?</p>
            <p className="text-gray-500 dark:text-gray-400">
              Yes, your data is securely stored and used only for analysis.
            </p>
          </div>

          <div>
            <p className="font-medium">Can I connect my smartwatch?</p>
            <p className="text-gray-500 dark:text-gray-400">
              Yes, wearable integration is supported for real-time tracking.
            </p>
          </div>

          <div>
            <p className="font-medium">How accurate are predictions?</p>
            <p className="text-gray-500 dark:text-gray-400">
              Predictions are based on AI models and improve over time with more data.
            </p>
          </div>

        </div>
      </div>

      {/* EXTRA HELP */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300 mb-6 group">
        <h2 className="font-semibold mb-4 text-xl">Need More Help?</h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
          If your issue is urgent or not listed above, feel free to contact our support team directly.
        </p>

        <button className="bg-teal-500 text-white px-5 py-2 rounded-lg hover:bg-teal-600">
          Contact Support
        </button>
      </div>

    </div>
  );
}