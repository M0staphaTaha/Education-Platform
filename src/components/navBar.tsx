/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

const NavBar = () => {
  const [pathname, setPathname] = useState('');
  const [isLoginPage, setIsLoginPage] = useState(true);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  useEffect(() => {
    if (pathname === '/login' || pathname === '/forget-password' || pathname === '/reset-password') {
      setIsLoginPage(false);
    } else {
      setIsLoginPage(true);
    }
  }, [pathname]);

  
  const [isOpen, setIsOpen] = useState(false);
    const OpenSideBar = () => {
        setIsOpen(!isOpen)
    }

    const useWindowDimensions = () => {
      const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined });
  
      useEffect(() => {
        const handleResize = () => {
          setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
  
        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial dimensions
  
        return () => window.removeEventListener('resize', handleResize);
      }, []);
  
      return windowSize;
    };
  
    const { width } = useWindowDimensions();
  
    // Conditionally set the state based on screen width
    useEffect(() => {
      if (width !== undefined && width >= 1023) {
        setIsOpen(true); // Always set to true for large screens
      }
    }, [width]);

  return (
    <>
      <header>
        {isLoginPage ? (
            
            <div>

                
<header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64">
  <nav className="flex basis-full items-center w-full mx-auto px-4 sm:px-6" aria-label="Global">
    <div className="me-5 lg:me-0 lg:hidden">
      <a className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="../templates/admin/index.html" aria-label="Preline">
       <img src="/images/Group.png" alt="#" />
      </a>
    </div>

    <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
      <div className="sm:hidden">
        <button type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
      </div>

      <div className="hidden sm:block">
        <label htmlFor="icon" className="sr-only">Search</label>
        <div className="relative min-w-72 md:min-w-80">
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <svg className="flex-shrink-0 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
          <input type="text" id="icon" name="icon" className="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Search"/>
        </div>
      </div>

      <div className="flex flex-row items-center justify-end gap-2">
        <button type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
        </button>
        <button type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-offcanvas="#hs-offcanvas-right">
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        </button>

        <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
          <button id="hs-dropdown-with-header" type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
            <img className="inline-block size-[38px] rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
          </button>

          <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2" aria-labelledby="hs-dropdown-with-header">
            <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg">
              <p className="text-sm text-gray-500">Signed in as</p>
              <p className="text-sm font-medium text-gray-800">james@site.com</p>
            </div>
            <div className="mt-2 py-2 first:pt-0 last:pb-0">
              <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="#">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                Newsletter
              </a>
              <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="#">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                Purchases
              </a>
              <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="#">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/></svg>
                Downloads
              </a>
              <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="#">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Team Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>


<div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden">
  <div className="flex justify-between items-center py-2">
    <ol className="ms-3 flex items-center whitespace-nowrap">
      <li className="flex items-center text-sm text-gray-800">
        Application Layout
        <svg className="flex-shrink-0 mx-3 overflow-visible size-2.5 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </li>
      <li className="text-sm font-semibold text-gray-800 truncate" aria-current="page">
        Dashboard
      </li>
    </ol>

    <button onClick={OpenSideBar} type="button" className="py-2 px-3 flex justify-center items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Sidebar">
      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8L21 12L17 16M3 12H13M3 6H13M3 18H13"/></svg>
      <span className="sr-only">Sidebar</span>
    </button>
  </div>
</div>
{
                                        isOpen && (
<div id="application-sidebar" className={`hs-overlay [--auto-close:lg]
  hs-overlay-open:translate-x-0
 transition-all duration-300 transform
  w-[260px]
  lg:drop-shadow-none
  drop-shadow-2xl

  ${!isOpen ? '-translate-x-full hidden ' : ''}
  fixed inset-y-0 start-0 z-[60]
  bg-white border-e border-gray-200
  lg:block  lg:translate-x-0 lg:end-auto lg:bottom-0
 
 `}>
  <div className="px-8 pt-4">
    <img src="/images/Group.png" alt="Logo"/>
  </div>

  <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
    <ul className="space-y-1.5">
      <li>
        <a className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-neutral-700 rounded-lg hover:bg-gray-100" href="#">
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Dashboard
        </a>
      </li>

      {/* <li className="hs-accordion" id="users-accordion">
        <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-neutral-700 rounded-lg hover:bg-gray-100">
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Users

          <svg className="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>

          <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>

        <div id="users-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
          <ul className="hs-accordion-group ps-3 pt-2" data-hs-accordion-always-open>
            <li className="hs-accordion" id="users-accordion-sub-1">
              <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-neutral-700 rounded-lg hover:bg-gray-100">
                Sub Menu 1

                <svg className="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>

                <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>

              <div id="users-accordion-sub-1-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                <ul className="pt-2 ps-2">
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100" href="#">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100" href="#">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100" href="#">
                      Link 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="hs-accordion" id="users-accordion-sub-2">
              <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-neutral-700 rounded-lg hover:bg-gray-100">
                Sub Menu 2

                <svg className="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>

                <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>

              <div id="users-accordion-sub-2-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden ps-2">
                <ul className="pt-2 ps-2">
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100" href="#">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100" href="#">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100" href="#">
                      Link 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>

      <li className="hs-accordion" id="account-accordion">
        <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-neutral-700 rounded-lg hover:bg-gray-100">
          <svg className="flex-shrink-0 mt-0.5 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4-1"/><path d="m16.8 12.3-.4-1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>
          Account

          <svg className="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>

          <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>

        <div id="account-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
          <ul className="pt-2 ps-2">
            <li>
              <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100" href="#">
                Link 1
              </a>
            </li>
            <li>
              <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100" href="#">
                Link 2
              </a>
            </li>
            <li>
              <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100" href="#">
                Link 3
              </a>
            </li>
          </ul>
        </div>
      </li>

      <li className="hs-accordion" id="projects-accordion">
        <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-neutral-700 rounded-lg hover:bg-gray-100">
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          Projects

          <svg className="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>

          <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>

        <div id="projects-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
          <ul className="pt-2 ps-2">
            <li>
              <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100" href="#">
                Link 1
              </a>
            </li>
            <li>
              <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100" href="#">
                Link 2
              </a>
            </li>
            <li>
              <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100" href="#">
                Link 3
              </a>
            </li>
          </ul>
        </div>
      </li> */}

      {/* <li><a className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100" href="#">
        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
        Calendar
      </a></li> */}
      <li><a className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100" href="/login">
        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        Login
      </a></li>
      <li><a className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100" href="/forget-password">
        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        forget password
      </a></li>
    </ul>
  </nav>
</div>)}

            </div>



        ) : (
          <div></div>
        )}
      </header>
    </>
  );
};

export default NavBar;