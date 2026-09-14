import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is a Digital Health Twin?",
    answer:
      "A Digital Health Twin is a virtual model of your health built using physiological data and AI. It helps simulate health outcomes, predict risks, and test interventions before applying them in real life."
  },
  {
    question: "How does the system collect health data?",
    answer:
      "Health data can be connected from wearable devices, medical records, lab reports, and lifestyle information. These inputs help create an accurate digital health model."
  },
  {
    question: "Can doctors use this system?",
    answer:
      "Yes. Doctors can use the Digital Health Twin dashboard to monitor patient health trends, simulate treatment outcomes, and make better clinical decisions."
  },
  {
    question: "Is my health data secure?",
    answer:
      "Yes. The platform uses privacy-safe data modeling and secure storage practices to protect personal health information."
  },
  {
    question: "What kind of insights does the system provide?",
    answer:
      "The system provides risk predictions, health trajectory forecasts, intervention simulations, and detailed health analytics reports."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-1" id="faq">
      <div className="max-w-4xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-3">
            Everything you need to know about the Digital Health Twin platform.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 dark:text-white">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black rounded-xl border border-gray-200 p-6 shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-40 mt-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}