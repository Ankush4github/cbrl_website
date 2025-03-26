'use client';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTheme } from '@/context/ThemeContext'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Research', href: '/research' },
  { name: 'Publications', href: '/publications' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Members', href: '/members' },
  { name: 'Contact', href: '/contact' },
]

// Separate component for header content
function HeaderContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const ThemeToggleButton = () => (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' 
          : 'bg-white dark:bg-gray-900 shadow-sm'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-bold text-primary dark:text-white group relative p-2 hover:scale-105 transition-transform duration-200"
              title="Clinical Biomarkers Research Laboratory"
            >
              <span>CBRL</span>
              <span className="absolute left-0 -bottom-4 text-sm font-normal opacity-0 group-hover:opacity-100 transition-all duration-200 bg-white dark:bg-gray-800 p-2 rounded shadow-lg w-max">
                Clinical Biomarkers Research Laboratory
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white px-3 py-2 text-sm font-medium group transition-colors duration-200"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary dark:bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </Link>
              ))}
            </div>
            
            <ThemeToggleButton />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggleButton />
            <button
              type="button"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white p-2 rounded-md transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden absolute left-0 right-0 transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          } ${
            isScrolled 
              ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm' 
              : 'bg-white dark:bg-gray-900'
          }`}
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-3 py-2 text-base font-medium rounded-md transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default function Navigation() {
  return <HeaderContent />;
} 