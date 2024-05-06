/* eslint-disable @next/next/no-img-element */
"use client"
import Spinner from '@/components/spinner';
import { useState } from 'react';
import Link from "next/link";
const Schools = () => {
    const [lol, setLol] = useState(true);
    return (
        <>
        <div className="relative mt-10 overflow-x-auto bg-transparent sm:rounded-lg max-[1200px]:w-screen h-screen">
            <div className="overflow-auto relative shadow-md sm:rounded-lg">
            <div className="flex justify-between max-[502px]:grid max-[502px]:justify-center text-center">
                <input type="text" id="icon" name="icon" className="py-2 outline-none border-2 px-4 ps-11 block w-[300px] mb-5 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Search" />
                <div className="flex justify-center">
                    <Link href="/add-new-school" className="px-4 py-2 rounded-xl bg-[#3E5AF0] hover:bg-[#4a5cc5] hover:shadow-xl mb-5 mr-3 text-white text-[18px] w-[180px] ease-in font-semibold duration-300">+ Add new school</Link>
                </div>
            </div>
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
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Link href="/" className="font-medium text-blue-600 hover:underline">Edit</Link>
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