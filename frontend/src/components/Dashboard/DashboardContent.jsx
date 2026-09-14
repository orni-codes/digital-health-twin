import React from 'react'
import StatusGrid from './StatusGrid'
import HealthDynamics from './HealthDynamics'
import RiskDetection from './RiskDetection'
import Interventions from './Interventions'
import { Zap } from 'lucide-react'
const DashboardContent = () => {
  const date = new Date();
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
  const currentDate = `${weekday} ${date.getDate()} ${date.getFullYear()}`;

  return (
    <div>
      <div className="bg-linear-to-br from-amber-500 to-amber-700 rounded-3xl p-6 shadow-xl mb-6 flex justify-between items-center">
        <div>
          <span className="flex items-center"><Zap className='w-6 h-6 text-yellow-200'/><p className="text-yellow-200 font-medium ml-1">Daily Status</p></span>
          <h1 className="font-black text-3xl md:text-4xl text-amber-950 mt-2">Your Weekly Progress</h1>
          <p className="text-amber-800 pl-1 md:text-xl mt-1 font-bold">{currentDate}</p>
        </div>
        
        <div className="relative w-32 h-32 shrink-0 flex items-center justify-center mr-4">
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/50" />
            <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="14" fill="transparent" strokeDasharray="251.2" strokeDashoffset="50.24" className="text-yellow-200" strokeLinecap="round" />
          </svg>
          <div className="flex flex-col items-center justify-center relative z-10">
            <span className="text-3xl font-black text-amber-950 leading-none">6</span>
            <span className="text-sm font-bold text-amber-900 mt-1">days</span>
          </div>
        </div>
      </div>
        <StatusGrid/>
        <HealthDynamics/>
        <RiskDetection/>
        <Interventions/>
    </div>
  )
}

export default DashboardContent