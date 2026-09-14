import { useState } from "react";
import { ChevronDown } from "lucide-react";
import assets from "../assets/assets";

const steps = [
  {
    id: "01",
    title: "Connect Health Data",
    description:
      "Upload wearable data, lab reports, vital signs, and lifestyle information to start building your digital twin.",
    color: "bg-blue-200",
    image: assets.one,
  },
  {
    id: "02",
    title: "Generate Your Digital Twin",
    description:
      "AI analyzes your health data and creates a digital model representing your health condition.",
    color: "bg-orange-100",
    image: assets.two,
  },
  {
    id: "03",
    title: "Monitor Health",
    description:
      "Track health score, stability indicators, risk alerts, and health trends from your dashboard.",
    color: "bg-teal-200",
    image: assets.three,
  },
  {
    id: "04",
    title: "Forecast Future Health",
    description:
      "Predict future health outcomes using simulation and AI-driven forecasting.",
    color: "bg-cyan-200",
    image: assets.four,
  },
  {
    id: "05",
    title: "Test Interventions",
    description:
      "Simulate treatments, lifestyle changes, or medications before applying them in real life.",
    color: "bg-purple-200",
    image: assets.five,
  },
];

export default function Howtouse() {
  const [showAll, setShowAll] = useState(false);

  const StepCard = ({ step }) => (
    <div className={`${step.color} rounded-xl p-8`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">

        {/* LEFT TEXT */}
        <div className="flex items-center gap-6 flex-1">

          <div>
            <p className="text-sm text-gray-500">Step</p>
            <h3 className="text-3xl font-semibold text-gray-500">
              {step.id}
            </h3>
          </div>

          {step.image && (
          <img
            src={step.image}
            alt={step.title}
            className="w-40 md:w-98 h-40 md:h-78 object-cover rounded-xl shadow-md"
          />
        )}

          <div>
            <h4 className="text-3xl font-semibold">{step.title}</h4>
            <p className="text-gray-700 mt-2 max-w-xl">
              {step.description}
            </p>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        

      </div>
    </div>
  );

  return (
    <section className="py-24" id="howtouse">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-xl md:text-3xl xl:text-[84px] font-medium xl:leading-23.75 min-w-9xl dark:text-white">
            How Digital Health Twin Works
          </h2>
          <p className="text-gray-500 mt-3">
            A simple workflow to model, simulate, and understand your health.
          </p>
        </div>

        {/* STEP 1 & 2 */}
        <div className="space-y-6">
          {steps.slice(0, 2).map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>


        {/* HIDDEN STEPS */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            showAll ? "max-h-[2000px]" : "max-h-0"
          }`}
        >
          <div className="space-y-6">
            {steps.slice(2).map((step, index) => (
              <div
                key={step.id}
                className={`transform transition-all duration-900 ${
                  showAll
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <StepCard step={step} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center -mt-6 mb-6 relative z-20">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-blue-700 transition"
          >
            <ChevronDown
              className={`transition-transform duration-500 ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

      </div>
    </section>
  );
}