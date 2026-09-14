import { useState } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line
import { motion } from "framer-motion";
import assets from "../assets/assets";
import { authService } from "../api/authService";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { loginContext } = useAuth();


  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      return setError("Please fill all fields");
    }

    if (form.password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    setError("");
    setLoading(true);

    try {
      const response = await authService.login({
        email: form.email,
        password: form.password,
      });

      // Assuming response contains { user, token or access_token }
      // Fallback to a dummy token since the backend currently doesn't provide one
      const token = response.token || response.access_token || "dummy-token";
      
      loginContext(response.user, token);      
      navigate("/dashboard");
    } catch (err) {
      // Show backend error if available, else generic
      let errorMessage = "Invalid credentials.";
      if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.response?.data?.detail) {
        const detail = err.response.data.detail;
        errorMessage = typeof detail === 'string' 
          ? detail 
          : (Array.isArray(detail) ? detail.map(d => d.msg).join(', ') : JSON.stringify(detail));
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 from-20% via-teal-300 via-50% to-white to-90% dark:bg-linear-to-br dark:from-black dark:from-20% dark:via-teal-300 dark:via-50% dark:to-black dark:to-90% px-4 ">
      <div className="w-full max-w-5xl md:max-h-160 grid md:grid-cols-2 -ml-10 -mr-10 bg-blur-2xl bg-white/40 dark:bg-zinc-900 shadow-lg overflow-hidden border-t-2 border-primary rounded-3xl">

        {/* RIGHT FORM */}
        <motion.div 
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0.3 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="p-8 justify-center py-15 mt-22">
          <div className="flex justify-center w-full h-fit">
            <h2 className="text-4xl font-black text-teal-800 dark:text-white mb-10">
              Welcome Back
            </h2>
          </div>

          {error && (
            <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-8 focus:ring-2 focus:ring-teal-400 outline-none bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-8 focus:ring-2 focus:ring-teal-400 outline-none bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

          </form>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 text-center">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-teal-500 cursor-pointer"
            >
              Sign Up
            </span>
          </p>

        </div>
        </motion.div>
        <motion.div 
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0.3 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="hidden md:block">
          <img
            src={assets.signin}
            className="w-full h-full object-cover min-h-50 -translate-y-18 dark:hidden block"
          />
          <img
            src={assets.signin_dark}
            className="w-full h-full object-cover min-h-50 -translate-y-18 hidden dark:block"
          />
        </div>
        </motion.div>
    </div>
    </div>
  );
}