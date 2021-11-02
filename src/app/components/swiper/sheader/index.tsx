// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Pagination, Autoplay
} from 'swiper';

import 'swiper/swiper-bundle.min.css';
import './style.css'

SwiperCore.use([Pagination, Autoplay]);

type props = {
    dataSlide: Array<any>
}


export const SwiperHeader = ({ dataSlide }: props) => {

    return (
        <Swiper centeredSlides={true} pagination={{ dynamicBullets: false, bulletClass: "tes" }} tag="ul" className="md:-mt-20 -mt-16 bg-gray-50 rounded-xl w-11/12 shadow-lg" autoplay={{
            "delay": 5000,
            "disableOnInteraction": false,
        }}>
            {dataSlide.map((pecah, index) => {
                return <SwiperSlide key={index} tag="li">
                    <img src={pecah.urlImg} className="h-full w-full" alt={pecah.name} />
                </SwiperSlide>
            })}


        </Swiper>
    )
}
