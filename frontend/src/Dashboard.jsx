import React, { useState, useEffect } from 'react';
import Sidebar from './components/Dashboard/Sidebar'
import Header from './components/Dashboard/Header'
import DashboardContent from './components/Dashboard/DashboardContent'
import HealthAssistant from './components/Dashboard/HealthAssistant'
import Reports from './components/Dashboard/Reports'
import Settings from './components/Dashboard/Settings'
import Help from './components/Dashboard/Help'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for saved theme, default to true for existing design if not found
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return false; // Initialize to false (light mode) by default if nothing saved
    }
    return false;
  });

  useEffect(() => {
    // Apply dark class to html element
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Save to local storage
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500 ease-in-out'>
        <div className='flex h-screen overflow-hidden relative'>
            {/* Mobile Overlay */}
            {mobileMenuOpen && (
              <div 
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setMobileMenuOpen(false)}
              ></div>
            )}
            <Sidebar
            collasped={sideBarCollapsed}
            mobileMenuOpen={mobileMenuOpen}
            onToggle={() => setSideBarCollapsed(!sideBarCollapsed)}
            activeTab={activeTab}
            onPageChange={(tab) => {
              setActiveTab(tab);
              setMobileMenuOpen(false);
            }}
            />
          <div className='flex-1 flex flex-col overflow-hidden'>
            <Header 
              sideBarCollapsed={sideBarCollapsed} 
              onDesktopToggle={() => setSideBarCollapsed(!sideBarCollapsed)}
              onMobileToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
            <main className='flex-1 overflow-y-auto bg-transparent'>
              <div className='p-6 space-y-6'>
              {activeTab === 'dashboard' && <DashboardContent />}
              {activeTab === 'health-assistant' && <HealthAssistant />}
              {activeTab === 'reports' && <Reports />}
              {activeTab === 'settings' && <Settings />}
              {activeTab === 'help' && <Help />}
              </div>
            </main>
          </div>
        </div>
    </div>
  )
}

export default Dashboard