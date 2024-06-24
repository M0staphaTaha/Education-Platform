/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState, useReducer } from "react";

const NavBar = () => {
  const [pathname, setPathname] = useState('');
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [small, setSmall] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const toggleProfile = () => {
    setProfile(!profile)
  }
  const [isOpen2, setIsOpen2] = useState(false);
  const toggleNavbar2 = () => {
    setIsOpen2(!isOpen2)
  }
  const [isOpen3, setIsOpen3] = useState(false);
  const toggleNavbar3 = () => {
    setIsOpen3(!isOpen3)
  }
  const [isOpen4, setIsOpen4] = useState(false);
  const toggleNavbar4 = () => {
    setIsOpen4(!isOpen4)
  }
  const [isOpen5, setIsOpen5] = useState(false);
  const toggleNavbar5 = () => {
    setIsOpen5(!isOpen5)
  }
  const [isOpen6, setIsOpen6] = useState(false);
  const toggleNavbar6 = () => {
    setIsOpen6(!isOpen6)
  }
  const [isOpen7, setIsOpen7] = useState(false);
  const toggleNavbar7 = () => {
    setIsOpen7(!isOpen7)
  }
  const [isOpen8, setIsOpen8] = useState(false);
  const toggleNavbar8 = () => {
    setIsOpen8(!isOpen8)
  }
  const [isOpen9, setIsOpen9] = useState(false);
  const toggleNavbar9 = () => {
    setIsOpen9(!isOpen9)
  }
  const toggleNavbarSmall = () => {
    setSmall(!small)
    if (!small == true) {
      setIsOpen2(true)
      setIsOpen3(true)
      setIsOpen4(true)
      setIsOpen5(true)
    }
    if (small == true) {
      setIsOpen2(false)
      setIsOpen3(false)
      setIsOpen4(false)
      setIsOpen5(false)
    }
  }
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    setPathname(window.location.pathname);

  }, [pathname]);

  useEffect(() => {
    if (pathname === '/login' || pathname === '/forget-password' || pathname === '/reset-password' || pathname === '/otp') {
      setIsLoginPage(false);
    } else {
      setIsLoginPage(true);
    }
  }, [pathname]);

  const OpenSideBar = () => {
    setIsOpen(!isOpen)
  }

  const useWindowDimensions = () => {
    const isClient = typeof window === 'object'; // Ensure code runs only in the client-side environment
    const [windowSize, setWindowSize] = useState(isClient ? { width: window.innerWidth, height: window.innerHeight } : { width: undefined, height: undefined });

    useEffect(() => {
      if (!isClient) {
        return;
      }

      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener('resize', handleResize);
      handleResize(); // Set initial dimensions

      return () => window.removeEventListener('resize', handleResize);
    }, [isClient]);

    return windowSize;
  };

  const { width } = useWindowDimensions();

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
                    <img src="/images/logo.png" alt="#" />
                  </a>
                </div>

                <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
                  <div className="sm:hidden">
                    <button type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                    </button>
                  </div>

                  <div className="hidden sm:block">
                    <label htmlFor="icon" className="sr-only">Search</label>
                    <div className="relative min-w-72 md:min-w-80">
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                        <svg className="flex-shrink-0 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                      </div>
                      <input type="text" id="icon" name="icon" className="py-2 outline-none border-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Search" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-end gap-2">
                    <button type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                    </button>
                    <button type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-offcanvas="#hs-offcanvas-right">
                      <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                    </button>

                    <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                      <button onClick={toggleProfile} id="hs-dropdown-with-header" type="button" className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                        <img className="inline-block size-[38px] rounded-full ring-2 ring-white" src="/images/me.jpg" alt="Image Description" />
                      </button>

                      {
                        profile && (
                          <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 fixed  right-[40px] top-[80px] min-w-60 bg-white shadow-md rounded-lg p-2" aria-labelledby="hs-dropdown-with-header">
                            <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg">
                              <p className="text-sm text-gray-500">Signed in as</p>
                              <p className="text-sm font-medium text-gray-800">mostapha@site.com</p>
                            </div>
                            <div className="mt-2 py-2 first:pt-0 last:pb-0">
                              <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="/login">
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Sign out
                              </a>
                            </div>
                          </div>

                        )
                      }
                    </div>
                  </div>

                </div>
              </nav>
            </header>


            <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden ">
              <div className="flex justify-between items-center py-2">
                <ol className="ms-3 flex items-center whitespace-nowrap">
                  <li className="flex items-center text-sm text-gray-800">
                    Application Layout
                    <svg className="flex-shrink-0 mx-3 overflow-visible size-2.5 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </li>
                  <li className="text-sm font-semibold text-gray-800 truncate" aria-current="page">
                    {pathname.slice(1).toUpperCase()}
                  </li>
                </ol>

                <button onClick={OpenSideBar} type="button" className="py-2 px-3 flex justify-center items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Sidebar">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8L21 12L17 16M3 12H13M3 6H13M3 18H13" /></svg>
                  <span className="sr-only">Sidebar</span>
                </button>
              </div>
            </div>
            {
              (
                isOpen &&

                <div id="application-sidebar" className={`hs-overlay [--auto-close:lg]  hs-overlay-open:translate-x-0 transition-all duration-300 transform ${small ? 'w-[90px]' : 'w-[260px]'} lg:drop-shadow-none drop-shadow-2xl ${!isOpen ? 'w-0 ' : ''} fixed ease-in duration-300 inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block  lg:translate-x-0 lg:end-auto lg:bottom-0 `}>

                  <div className="px-8 pt-4 ">
                    {
                      small ? (
                        <img className="scale-[2] mt-5" src="/images/small logo.png" alt="Logo" />

                      ) : (
                        <img className="w-[150px] -translate-x-7" src="/images/logo.png" alt="Logo" />

                      )
                    }
                  </div>
                  <div className="flex justify-end mr-5 -translate-y-6">
                    {
                      !small && (
                        <button onClick={toggleNavbarSmall}>

                          <img className="scale-[1.4] " src="/images/nav.png" alt="Logo" />
                        </button>

                      )
                    }
                  </div>

                  <nav className={`hs-accordion-group p-6 w-full flex flex-col flex-wrap ${!isOpen ? 'hidden ' : ''} `} data-hs-accordion-always-open>
                    <ul className="space-y-1.5 ">
                      <div className={`flex ${small ? 'w-[40px]' : ''} justify-center`}>
                        {
                          small && (
                            <button onClick={toggleNavbarSmall}>

                              <img src="/images/arrow.png" alt="Logo" />
                            </button>

                          )
                        }
                      </div>
                      <li>
                        <Link className={`flex ${small ? 'w-[40px]' : ''} items-center gap-x-3.5 py-2 px-2.5 mt-4 font-bold text-md font-sans text-[#526484] group rounded-lg hover:bg-gray-100 hover:text-[#3e5af0]`} href="/">
                          <svg className="h-6 w-6 font-bold font-sans text-[#526484] group-hover:text-[#3e5af0]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                          {
                            !small && (

                              <p>Dashboard</p>
                            )
                          }

                        </Link>
                      </li>

                      <li className="relative group">

                        <Link  className={`flex ${!small ? 'w-full' : ''} open items-center gap-x-3.5 py-2 mt-4 px-2.5 font-bold text-md font-sans text-[#526484] group-hover:text-[#3e5af0] hover:bg-gray-100 rounded-lg`} href="/manage-school">
                        <svg className="h-6 w-6 font-bold font-sans text-[#526484] group-hover:text-[#3e5af0]"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="3" y1="21" x2="21" y2="21" />  <line x1="3" y1="10" x2="21" y2="10" />  <polyline points="5 6 12 3 19 6" />  <line x1="4" y1="10" x2="4" y2="21" />  <line x1="20" y1="10" x2="20" y2="21" />  <line x1="8" y1="14" x2="8" y2="17" />  <line x1="12" y1="14" x2="12" y2="17" />  <line x1="16" y1="14" x2="16" y2="17" /></svg>
                          {
                            !small && (
                              <p>Manage School</p>
                            )
                          }
                        </Link>

                      </li>
                      <li className="relative group">
                        <Link  className={`flex ${!small ? 'w-full' : ''} items-center gap-x-3.5 py-2 px-2.5 mt-4 font-bold text-md font-sans text-[#526484] group rounded-lg hover:bg-gray-100 hover:text-[#3e5af0]`} href="/backups">
                        <svg className="h-6 w-6 font-bold font-sans text-[#526484] group-hover:text-[#3e5af0]"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 18a4.6 4.4 0 0 1 0 -9h0a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />  <polyline points="9 15 12 12 15 15" />  <line x1="12" y1="12" x2="12" y2="21" /></svg>

                          {
                            !small && (

                              <p>Backups</p>
                            )
                          }

                        </Link>


                      </li>

                      <li className="relative group">
                        <Link  className={`flex ${!small ? 'w-full' : ''} items-center gap-x-3.5 py-2 mt-4 px-2.5  font-bold text-md font-sans text-[#526484] group rounded-lg hover:bg-gray-100 hover:text-[#3e5af0]`} href="/updates" >
                        <svg className="h-6 w-6 font-bold font-sans text-[#526484] group-hover:text-[#3e5af0]"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="12 4 4 8 12 12 20 8 12 4" />  <polyline points="4 12 12 16 20 12" />  <polyline points="4 16 12 20 20 16" /></svg>

                          {
                            !small && (

                              <p>Updates</p>
                            )
                          }
                        </Link>
                      </li>
                      <li className="relative group">
                        <Link  className={`flex ${!small ? 'w-full' : ''}  items-center gap-x-3.5 py-2 mt-4 px-2.5  font-bold text-md font-sans text-[#526484] group rounded-lg hover:bg-gray-100 hover:text-[#3e5af0]`}  href="/feedback">
                        <svg className="h-6 w-6 font-bold font-sans text-[#526484] group-hover:text-[#3e5af0]"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/></svg>

                          {
                            !small && (

                              <p>Feedback</p>
                            )
                          }

                        </Link>
                        
                      </li>
                    </ul>
                  </nav>
                </div>)
            }
          </div>
        ) : (
          <div></div>
        )}
      </header>
    </>
  );
};

export default NavBar;



{/* <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
<ul className="space-y-1.5 ">
  <li>
    <Link className="flex items-center gap-x-3.5 py-2 px-2.5 mt-4 font-bold text-md font-sans text-[#526484] group rounded-lg hover:bg-gray-100 hover:text-[#3e5af0]" href="/">
    <svg className="h-6 w-6 font-bold font-sans text-[#526484] group-hover:text-[#3e5af0]"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>
      Dashboard
    </Link>
  </li>




</ul>
</nav> */}