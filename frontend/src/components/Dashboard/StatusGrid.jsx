import React from 'react'
import { Footprints, Heart } from 'lucide-react'
import { Bed } from 'lucide-react'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { Weight } from 'lucide-react'

function StatusGrid () {
    const stats =[{
        index:0,
        title: "Heart Rate",
        value: "73",
        status: "Normal",
        trend: "up",
        change: "+2",
        icn: Heart

    },
    {
        index:1,
        title: "Sleep Hours",
        value: "5 hr",
        status: "Mild",
        trend: "down",
        change: "-3",
        icn: Bed

    },
    {
        index:2,
        title: "Steps",
        value: "3,876",
        status: "Normal",
        trend: "up",
        change: "+5%",
        icn: Footprints
    },
    {
        index:3,
        title: "BMI",
        value: "22",
        status: "Normal",
        trend: "down",
        change: "-2",
        icn: Weight

    },

]
  return (
    <div className="grid grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-4">
        {stats.map((stats, index) => (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300 group" key={index}>
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <stats.icn className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="text-right flex flex-col justify-end">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stats.title}</p>
                    <p className="text-3xl font-black dark:text-white">{stats.value}</p>
                    <p className={`text-sm ${stats.status === 'Normal' ? 'text-emerald-500' : stats.status === 'Mild' ? 'text-yellow-500' : 'text-red-500'} font-bold`}>{stats.status}</p>
                </div>
            </div>
            <div className="flex items-center text-left space-x-2 mt-2">
                {stats.trend ==="up" ? (<ArrowUpRight className="w-4 h-4 text-emerald-500 -mr-1" /> ) : (<ArrowDownRight className="w-4 h-4 text-red-500 -mr-1" /> )}
                <span className={`text-sm font-semibold ${stats.trend === "up" ? "text-emerald-500" : "text-red-500"}`}>{stats.change}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">vs Last month</span>
            </div>
        </div>
    )
)
}
    </div>
  )
}

export default StatusGrid