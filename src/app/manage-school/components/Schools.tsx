/* eslint-disable @next/next/no-img-element */
"use client"
import Spinner from '@/components/spinner';
import { useEffect, useState } from 'react';
import Link from "next/link";
import { useGetSchoolsQuery } from '@/app/api/apiSlice';
const Schools = () => {
    const [lol, setLol] = useState(true);

    const [token, setToken] = useState<string | null>(null);


    useEffect(() => {
        if (typeof window !== 'undefined') {
          const storedToken = localStorage.getItem('token');
          setToken(storedToken);
        }
      }, []);
    
      const { data, error, isLoading } = useGetSchoolsQuery(token, {skip: !token});

    //   console.log(data);


    return (
        <>
            <div className="relative mt-10 overflow-x-auto bg-transparent sm:rounded-lg max-[1200px]:w-screen h-screen">
                <div className="flex justify-between max-[502px]:grid max-[502px]:justify-center text-center">
                    <div className="mb-3">
                        <label htmlFor="icon" className="sr-only">Search</label>
                        <div className="relative min-w-72 md:min-w-80">
                            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                <svg className="flex-shrink-0 size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            </div>
                            <input type="text" id="icon" name="icon" className="py-2  outline-none border-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Search" />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Link href="/add-new-school" className="px-4 py-2 whitespace-nowrap rounded-xl bg-[#3E5AF0] hover:bg-[#4a5cc5] hover:shadow-xl mb-5 mr-3 text-white text-[18px] w-[180px] ease-in font-semibold duration-300">+ Add new school</Link>
                    </div> 
                </div>
                <div className="overflow-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full overflow-x-auto text-sm text-left rtl:text-right text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-[#daeafb] ">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 -gray-800 focus:ring-2 " />
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Name School
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Code
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    About
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Version
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Initial date
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Expiration date
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Actions
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Features
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Admin
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b  hover:bg-gray-50">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                    </div>
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    Nahda
                                </th>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    C45121
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    This is text
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Demo
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    25/05/2024
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    09/06/2024
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Deactivate
                                </td>
                                <td  className="px-6 py-4 whitespace-nowrap">
                                    <Link href="/features"  className="font-medium text-blue-600 hover:underline">Feature</Link>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Link href="/admin" className="font-medium text-blue-600 hover:underline">View</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}

export default Schools;