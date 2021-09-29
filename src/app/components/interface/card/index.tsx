import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Pagination
} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './style.css'
SwiperCore.use([Pagination]);

type props = {
    title?: String,
    dataCard: Array<any>
}


export function Card({ title, dataCard }: props) {
    return (
        <div className="container-card">
            <p className="font-bold text-base p-5 text-gray-700">{title}</p>
            <Swiper
                tag="ul"
                className="bg-white"
                pagination={{
                    "clickable": true,
                    bulletClass: "tes"
                }} breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 8
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 8
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 8
                    },
                }} >
                {
                    dataCard.map((pecah, key) => (
                        <SwiperSlide tag="li" onClick={() => alert('ss')}>
                            <div className="shadow-lg  rounded-md border hover:border-blue-300 cursor-pointer mb-5">
                                <img src={pecah.Image} alt="" className="object-cover object-top h-24 rounded-t-md w-full" />
                                <div className="p-2 ">
                                    <div className="h-14">
                                        <p className="text-xs font-semibold">IDR {pecah.IDR}</p>
                                        <p className="text-xs text-gray-500">{pecah.Name}</p>
                                    </div>
                                    <div>
                                        <button className="text-xs text-left text-red-400 border border-red-400 w-16 pl-1 rounded-lg ">
                                            Stok {pecah.Stok}
                                        </button>
                                        <div className="flex justify-between">
                                            <div className="pl-1 mt-4" ><p className="bg-red-600 text-xs p-1 rounded-md w-8 text-white">{pecah.StokPercentage}</p></div>
                                            <div className="mt-4"><p className=" text-xs p-1 rounded-md text-gray-500"><s>{pecah.HargaCoret}</s></p></div>
                                        </div>
                                        <p className="text-red-500 font-bold mt-5">{pecah.HargaPure}</p>
                                    </div>
                                    <div className="mt-3">
                                        <span className="bg-green-200 text-xs text-gray-500  rounded-lg pl-1 pr-1">{pecah.Status}</span>
                                    </div>
                                    <div className="pt-5">
                                        <p className="text-xs text-gray-500">{pecah.Terjual}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}


                <SwiperSlide onClick={() => alert('ss')}>
                    <div className="shadow-lg rounded-md p-4 max-w-sm w-full mx-auto">
                        <div className="animate-pulse  space-x-4">
                            <div className=" space-y-4">
                                <div className="rounded-t-lg bg-gray-200 w-full h-20"></div>
                                <div className="h-4 bg-gray-200 rounded w-2/4"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
