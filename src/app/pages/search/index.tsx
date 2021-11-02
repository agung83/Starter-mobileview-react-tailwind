import React from 'react'
import { useRouter } from '../../hooks/router'

export const Search = () => {
    const router = useRouter();
    return (
        <>
            <div className="h-screen">
                <div className="flex p-2">
                    <div className="p-2 pr-4 text-left">
                        <button type="button" onClick={() => router.backAgain()} >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </button>
                    </div>
                    <div className="bg-white shadow-sm  p-2  rounded-l-lg border border-b-2 border-t-0 border-l-0 border-r-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input autoFocus type="text" className="w-full shadow-sm focus:border-blue-200 focus:outline-none border border-b-2 border-t-0 border-l-0 border-r-0 placeholder-gray-600 subpixel-antialiased " placeholder="Cari Diamond rihana..." />
                </div>
                <div className="pl-5 pr-5 mt-4">
                    <div>
                        <p className="font-bold">Kategori</p>
                        <ul className="pl-2">
                            <li className="flex p-1 mt-2">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                    </svg>
                                </div>
                                <p className="text-sm mx-2 text-gray-500 cursor-pointer">Garena Free Fire</p>
                            </li>
                            <li className="flex p-1 mt-2">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                    </svg>
                                </div>
                                <p className="text-sm mx-2 text-gray-500">Growtopia</p>
                            </li>
                            <li className="flex p-1 mt-2">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                    </svg>
                                </div>
                                <p className="text-sm mx-2 text-gray-500">Sugar Live</p>
                            </li>
                            <li className="flex p-1 mt-2">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                    </svg>
                                </div>
                                <p className="text-sm mx-2 text-gray-500">Grand Theft Auto V</p>
                            </li>
                            <li className="flex p-1 mt-2">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                    </svg>
                                </div>
                                <p className="text-sm mx-2 text-gray-500">One Piece Bounty Rush</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </>
    )
}
