import { useState, useRef, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";

const COHERE_API_KEY = "r2uKqHMfQrOIGSWVFxl7rHVfb8wKoFGXUCH3zeE2";

const SYSTEM_PROMPT = `You are a Digital Health Twin AI assistant. You have access to the user's current health data from their dashboard. Use these real values when answering questions — do not ask the user to share their metrics as you already have them.

## User's Current Health Metrics

### Status Grid (Current readings vs last month)
- Heart Rate: 73 BPM — Status: Normal — Change: +2 BPM vs last month (trending up)
- Sleep Hours: 5 hr — Status: Mild concern — Change: -3 hrs vs last month (trending down)
- Steps: 3,876 steps/day — Status: Normal — Change: +5% vs last month (trending up)
- BMI: 22 — Status: Normal — Change: -2 vs last month (trending down)

### Risk Detection
- Short-Term Risk: 12% — Level: Low
- Long-Term Risk: 28% — Level: Moderate
- Contributing Risk Factors:
  - Elevated resting HR trend: 35%
  - Sleep quality decline (3-day): 20%
  - Reduced activity variance: 15%
  - Stress biomarker elevation: 30%

### Health Dynamics (7-day Heart Rate: Actual vs Predicted)
- Tuesday: Actual 72 BPM, Predicted 74 BPM
- Wednesday: Actual 68 BPM, Predicted 70 BPM
- Thursday: Actual 80 BPM, Predicted 78 BPM
- Friday: Actual 74 BPM, Predicted 76 BPM
- Saturday: Actual 66 BPM, Predicted 72 BPM
- Sunday: Actual 71 BPM, Predicted 73 BPM

### Active Interventions
- Increased daily steps target (since Feb 10) — Active — 78% effectiveness
- Sleep hygiene protocol (since Jan 28) — Completed — 85% effectiveness
- Stress reduction program (since Jan 15) — Active — 62% effectiveness
- Dietary adjustment plan (since Dec 20) — Completed — 91% effectiveness

## Guidelines
- Reference the user's actual numbers when answering health questions.
- Be empathetic, supportive, and professional.
- Give concise but thorough answers.
- Explain what metrics mean and how to improve them based on the user's data.
- Always recommend consulting a doctor for medical diagnoses or treatment.
- Use simple, clear language — avoid overly technical jargon.`;


export default function HealthAssistant() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello 👋 I'm your Digital Health Twin assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      // Build messages array in Cohere v2 format (OpenAI-compatible)
      const apiMessages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...updatedMessages.map((msg) => ({
          role: msg.role === "user" ? "user" : "assistant",
          content: msg.content,
        })),
      ];

      const res = await fetch("https://api.cohere.com/v2/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${COHERE_API_KEY}`,
        },
        body: JSON.stringify({
          model: "command-a-03-2025",
          messages: apiMessages,
          temperature: 0.7,
        }),
      });

      const data = await res.json();
      console.log("Cohere response:", JSON.stringify(data));

      if (!res.ok) {
        const errMsg = data?.message || data?.detail || `API Error ${res.status}`;
        throw new Error(errMsg);
      }

      // Handle both v2 (message.content[].text) and fallback formats
      const reply =
        data?.message?.content?.[0]?.text ||
        data?.text ||
        "Sorry, I couldn't generate a response. Please try again.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("Cohere API error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please check your connection and try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-140px)] bg-gray-50 dark:bg-[#0B1120] text-gray-900 dark:text-white rounded-2xl overflow-hidden shadow-sm dark:shadow-none border border-gray-200 dark:border-zinc-800">

      {/* SIDEBAR */}
      <div className="w-64 bg-white dark:bg-[#020617] border-r border-gray-200 dark:border-zinc-800 p-4 hidden md:flex flex-col">

        <button
          className="bg-teal-500 text-white py-2 rounded-lg mb-4 hover:bg-teal-600"
          onClick={() =>
            setMessages([
              { role: "assistant", content: "Hello 👋 I'm your Digital Health Twin assistant. How can I help you today?" },
            ])
          }
        >
          + New Chat
        </button>

        <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
          <p className="cursor-pointer hover:text-gray-900 dark:hover:text-white">Health risk discussion</p>
          <p className="cursor-pointer hover:text-gray-900 dark:hover:text-white">Sleep improvement tips</p>
          <p className="cursor-pointer hover:text-gray-900 dark:hover:text-white">Diet suggestions</p>
        </div>
      </div>

      {/* MAIN CHAT */}
      <div className="flex flex-col flex-1">

        {/* CHAT AREA */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xl px-4 py-3 rounded-xl text-sm whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-teal-500 text-white"
                    : "bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-transparent shadow-sm dark:shadow-none"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="flex justify-start">
              <div className="px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-transparent shadow-sm flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Loader2 size={14} className="animate-spin" />
                Thinking...
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* INPUT */}
        <div className="border-t border-gray-200 dark:border-zinc-800 p-4 bg-white dark:bg-[#020617]">
          <div className="flex items-center bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-transparent rounded-xl px-4 py-2">
            <input
              type="text"
              placeholder="Ask about your health..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              disabled={loading}
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="ml-2 bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}