import { Check } from "lucide-react";
import assets from "../assets/assets";

export default function Features() {
  return (
    <section className="lg:py-20 py-10" id='features'>
        <div className='flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white lg:mb-20 mb-10'>
    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl">Meet your AI Digital Twin</h1>
     <p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 lg:min-w-8 sm:max-w-xl pb-3">The Digital Twin shows your health data in real-time using data from smart devices to help you make informed choices in your daily life.</p>
     </div>
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 gap-5 md:flex lg:flex justify-center lg:justify-between">

    {/* LEFT FEATURES */}
    <div className="col-span-1 flex flex-col lg:p-10 items-end text-right justify-between lg:max-w-sm sm:-mb-10">
      <FeatureL
        title="Health Twin App"
        text="Track your daily health and lifestyle easily."
      />
      <FeatureL
        title="AI Health Suggestions"
        text="Get simple daily health tips."
      />
      <FeatureL
        title="Track Progress"
        text="See your health improvements over time."
      />
    </div>

    {/* PHONE IMAGE */}
    <div className="col-span-2 flex justify-center lg:order-0 order-last">
      <img
        src={assets.phone}
        alt="Digital Health Twin App"
        className="lg:w-120 md:w-100 sm:w-70"
      />
    </div>

    {/* RIGHT FEATURES */}
    <div className="col-span-1 flex flex-col lg:p-10 items-start text-left justify-between lg:max-w-sm">
      <FeatureR
        title="Real-time Health Tracking"
        text="Monitor heart rate, sleep, and activity."
      />
      <FeatureR
        title="Talk to Experts"
        text="Connect with doctors when needed."
      />
      <FeatureR
        title="Connect Devices"
        text="Sync smartwatch or fitness band."
      />
    </div>

  </div>
</section>
  );
}

function FeatureL({ title, text }) {
  return (
    <div className="flex flex-row-reverse items-start gap-3 text-right">
      <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full shrink-0">
        <Check className="text-white w-5 h-5 mt-1 shrink-0" /></div>
      <div>
        <h3 className="font-black lg:text-2xl md:text-xl dark:text-white">{title}</h3>
        <p className="text-gray-500 text-sm dark:text-gray-400">{text}</p>
      </div>
    </div>
  );
}

function FeatureR({ title, text }) {
  return (
    <div className="flex gap-3 items-start">
    <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full shrink-0">
        <Check className="text-white w-5 h-5 mt-1 shrink-0" /></div>
      <div>
        <h3 className="font-black lg:text-2xl md:text-xl dark:text-white">{title}</h3>
        <p className="text-gray-500 text-sm dark:text-gray-400">{text}</p>
      </div>
    </div>
  );
}

