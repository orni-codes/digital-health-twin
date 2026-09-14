import React from 'react'
import {
  Fingerprint,
  ShieldAlert,
  LineChart,
  SlidersHorizontal,
  RefreshCw,
  Lightbulb,
  Watch
} from "lucide-react";
import assets from '../assets/assets';
import Title from './Title';
const Services = () => {
    const services = [
  {
    id: "0",
    icon: Fingerprint,
    title: "Personalized Health Modeling",
    text: "Creates a dynamic digital replica built from individual health data.",

  },
  {
    id: "1",
    icon: ShieldAlert,
    title: "Early Risk Detection",
    text: "Identifies potential health issues before they become critical.",
    light: true,
  },
  {
    id: "2",
    icon: LineChart,
    title: "Future Health Forecasting",
    text: "Simulates how health may evolve over time.",

   
  },
  {
    id: "3",
    icon: SlidersHorizontal,
    title: "Safe Intervention Testing",
    text: "Tests treatments and lifestyle changes in a virtual environment.",

    light: true,
  },
  {
    id: "4",
    icon: RefreshCw,
    title: "Continuous Health Intelligence",
    text: "Learns from ongoing data to refine predictions."
},
  {
    id: "5",
    icon: Lightbulb,
    title: "Smarter Decision Support",
    text: "Shows how different health choices may impact your future.",
  },
];
  return (
    <div id='services' className='relative flex flex-col items-center gap-5 px-4 sm:px-12 lg:px-18 pt-10 text-gray-800 dark-text-white'>
        <img src={assets.bgImage2} className='absolute -top=110 -left-70 -z-1 dark:hidden'/>
        <Title title='How can we help?' desc='Predict. Simulate. Stay ahead with Digital Health Twin.'/>
        <div className="grid gap-10 sm:gap-5 mb-10 lg:pl-20 lg:pr-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => (
            <div
                key={item.id}
                className="flex items-center lg:m-2 min-h-55 bg-linear-to-r from-[#d0a328] to-[#a97f09] rounded-2xl transition-all duration-300 hover:-translate-y-1 group">
                <div className='flex items-start gap-5 p-6'>
                {/* icon */}
                <div
                className="flex items-center justify-center w-18 h-18 rounded-2xl border-2 border-white group-hover:shadow-amber-50 shrink-0"
                >
                    <item.icon className="w-10 h-10 text-white" />
                </div>
                <div className="">
                    <h2 className="text-[1.5rem] mb-0.5 font-extrabold text-white tracking-tight leading-snug">
                    {item.title}
                    </h2>

                    <p className="text-sm text-gray-200">
                    {item.text}
                    </p>
                </div>
            </div>

            </div>
            ))}
        </div>
    </div>
  )
}

export default Services
