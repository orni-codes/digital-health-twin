import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserRound, LayoutDashboard, Bot, BarChart3, ClipboardCheck, Settings, LifeBuoy, LogOut } from "lucide-react";
import { useAuth } from '../../contexts/AuthContext';

// eslint-disable-next-line
function Sidebar({collasped, mobileMenuOpen, onToggle, activeTab, onPageChange}) {
    const navigate = useNavigate();
    const { logoutContext } = useAuth();
    const menuItems =[
        {
        id: "dashboard",
        title: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        id: "health-assistant",
        title: "Health Assistant",
        icon: Bot,
    },
    {
        id: "reports",
        title: "Reports",
        icon: ClipboardCheck,
    },
    {
        id: "settings",
        title: "Settings",
        icon: Settings,
    },
    {
        id: "help",
        title: "Help",
        icon: LifeBuoy,
    },
    ]
  return (
    <div className={`
      ${mobileMenuOpen ? 'flex translate-x-0' : 'hidden md:flex'} 
      fixed md:relative z-50 h-full w-64
      ${collasped ? 'md:w-20' : 'md:w-64'} 
      transition-all duration-300 ease-in-out bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-r border-gray-200/50 dark:border-slate-700/50 flex-col
    `}>
        {/* Logo */}
    <div className={`border-b border-gray-200/50 dark:border-slate-700/50 flex items-center ${collasped ? 'md:p-4 md:justify-center p-6 justify-between' : 'p-6 justify-between'}`}>
        <div className='flex items-center gap-3'>
            <img src="/favicon.ico" alt="logo" className='w-10 h-10 flex-shrink-0' />
            {(!collasped || mobileMenuOpen) && (
                <div className='flex flex-col'>
                    <h1 className={`${collasped && !mobileMenuOpen ? 'md:hidden' : ''} text-xl font-black dark:text-white whitespace-nowrap`}>Digital Health Twin</h1>
                    <p className={`${collasped && !mobileMenuOpen ? 'md:hidden' : ''} text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap`}>User Profile</p>
                </div>
            )}
        </div>
    </div>

    {/* Navigation */}
    <nav className='flex-1 overflow-y-auto p-4 space-y-2'> 
        {menuItems.map((item) => (
            <button
            key={item.id}
            onClick={() => onPageChange && onPageChange(item.id)}
            className={`w-full flex items-center ${collasped && !mobileMenuOpen ? 'md:justify-center md:px-0 px-4 gap-3' : 'gap-3 px-4'} py-3 rounded-xl transition-colors duration-200 ${activeTab === item.id || item.active ? 'bg-gradient-to-r from-teal-300/10 to-teal-500/30 text-teal-500 dark:bg-gradient-to-r from-slate-800/50 to-primary/50 shadow-lg' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
                <item.icon className='w-5 h-5 flex-shrink-0'/>
                {(!collasped || mobileMenuOpen) && <span className={`${collasped && !mobileMenuOpen ? 'md:hidden' : ''} font-medium whitespace-nowrap`}>{item.title}</span>}
            </button>
        ))}
    </nav>
    
    {/* Logout Option */}
    <div className="px-4 pb-4">
        <button
            onClick={() => { logoutContext(); navigate('/login'); }}
            className={`w-full flex items-center ${collasped && !mobileMenuOpen ? 'md:justify-center md:px-0 px-4 gap-3' : 'gap-3 px-4'} py-3 rounded-xl transition-colors duration-200 text-red-500 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10`}
        >
            <LogOut className='w-5 h-5 flex-shrink-0'/>
            {(!collasped || mobileMenuOpen) && <span className={`${collasped && !mobileMenuOpen ? 'md:hidden' : ''} font-medium whitespace-nowrap`}>Logout</span>}
        </button>
    </div>

    {/* User Profile */}
    <div className={`border-t border-gray-200/50 dark:border-slate-700/50 ${collasped && !mobileMenuOpen ? 'md:p-4 md:flex md:justify-center p-6' : 'p-6'}`}>
        <div className='flex items-center gap-3'>
           <div className='rounded-full bg-primary flex-shrink-0 w-10 h-10 flex items-center justify-center text-white font-bold'>
            <UserRound size={20} />
           </div>
           {(!collasped || mobileMenuOpen) && (
            <div className={`flex flex-col ${collasped && !mobileMenuOpen ? 'md:hidden' : ''}`}>
                <h1 className='text-lg font-black dark:text-white mt-2 whitespace-nowrap'>Orni</h1>
                <p className='text-sm text-gray-500 dark:text-gray-400 -mt-2 whitespace-nowrap'>orniberaschool@gmail.com</p>
            </div>
           )}
        </div>
    </div>

      
    </div>
  )
}

export default Sidebar
