import React, { useState } from 'react'
import { SearchIcon } from 'lucide-react'
import { Menu } from 'lucide-react'
import { Sun, Moon } from 'lucide-react'
import { UserRound, LogOut } from 'lucide-react'
import { Bell } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line
function Header({sideBarCollapsed, onDesktopToggle, onMobileToggle, darkMode, toggleDarkMode}) {
  const [showNotifications, setShowNotifications] = useState(false);
  const { user, logoutContext } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutContext();
    navigate('/login');
  };

  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-gray-400/50 dark:border-slate-700/50 px-6 py-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          {/* Mobile menu toggle */}
          <button className='md:hidden p-2 rounded-lg hover:bg-gray-200/50 dark:hover:bg-slate-700/50 transition-colors' onClick={onMobileToggle}>
            <Menu className='w-5 h-5 dark:text-white'/>
          </button>
          {/* Desktop menu toggle */}
          <button className='hidden md:block p-2 rounded-lg hover:bg-gray-200/50 dark:hover:bg-slate-700/50 transition-colors' onClick={onDesktopToggle}>
            <Menu className='w-5 h-5 dark:text-white'/>
          </button>
        <div className='hidden md:block'>
        <h1 className='text-2xl font-black dark:text-white'>Welcome Back</h1>
        <p className='text-sm text-gray-500 dark:text-gray-400 pl-2'>Let's analyse your health</p>
       </div> 
        </div>
       
        
       <div className='flex-1 max-w-md mx-8 hidden md:block'>
        <div className='relative'>
            <SearchIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400' />
            <input type="text" placeholder='Search...' className='pl-10 pr-4 py-2 w-full rounded-xl border-2 border-gray-200/70 dark:border-slate-700/50 focus:ring-2 focus:ring-teal-400 outline-none bg-slate-200 dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 hover:border-teal-400' />
            
        </div>
       </div>
       <div className="flex items-center space-x-3">
        <button 
          onClick={toggleDarkMode}
          className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {darkMode ? <Sun className='w-5 h-5'/> : <Moon className='w-5 h-5'/>}
        </button>

        {/*Notification*/}
        <div 
          className="relative"
          onMouseEnter={() => setShowNotifications(true)}
          onMouseLeave={() => setShowNotifications(false)}
        >
          <button 
            className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
            onClick={() => setShowNotifications(!showNotifications)}
          >
              <Bell className='w-5 h-5'/>
              <span className='absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full'>3</span>
          </button>

          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden z-50">
              <div className="p-4 border-b border-gray-200 dark:border-slate-700">
                <h3 className="font-semibold text-primary">Notifications</h3>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {/* Dummy Notification 1 */}
                <div className="p-4 border-b border-gray-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors">
                  <p className="text-sm text-gray-800 dark:text-gray-200">Your health report is ready to view.</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">2 minutes ago</p>
                </div>
                {/* Dummy Notification 2 */}
                <div className="p-4 border-b border-gray-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors">
                  <p className="text-sm text-gray-800 dark:text-gray-200">Upcoming appointment reminder.</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">1 hour ago</p>
                </div>
                {/* Dummy Notification 3 */}
                <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors">
                  <p className="text-sm text-gray-800 dark:text-gray-200">New features available in the dashboard.</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">1 day ago</p>
                </div>
              </div>
              <div className="p-3 border-t border-gray-200 dark:border-slate-700 text-center">
                <button className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium">View All</button>
              </div>
            </div>
          )}
        </div>

        {/*User Profile*/}
        <div className='flex items-center space-x-2 p-2.5 rounded-xl text-slate-600 dark:text-slate-300 transition-colors'>
            <div className='rounded-full bg-primary w-8 h-8 flex items-center justify-center text-white font-bold'>
                <UserRound size={16} />
            </div>
            <div className='flex flex-col text-left'>
                <h1 className='text-sm font-black dark:text-white'>{user?.name || "User Name"}</h1>
                <p className='text-xs text-gray-500 dark:text-gray-400'>{user?.email || "user@email.com"}</p>
            </div>
        </div>

        {/* Logout Button */}
        <button 
          onClick={handleLogout}
          title="Logout"
          className='p-2.5 rounded-xl text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors ml-2'
        >
          <LogOut className='w-5 h-5'/>
        </button>
       </div>
      </div>
    </div>
  )
}

export default Header
