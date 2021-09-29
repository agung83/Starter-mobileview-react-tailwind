
import { SwiHeader } from "../../swiper"


const urlObj = [
    {
        name: "hadiah2x",
        urlImg: "https://d1x91p7vw3vuq8.cloudfront.net/placeholder/202181/vsiz298fvuagbk34mq0nz7.png"
    },
    {
        name: "hadiah2x",
        urlImg: "https://d1x91p7vw3vuq8.cloudfront.net/placeholder/202191/061banckky6k9r2lvbjfywn.png"
    },
    {
        name: "hadiah2x",
        urlImg: "https://d1x91p7vw3vuq8.cloudfront.net/placeholder/2021921/alg8thlq3ims83rthgv5.png"
    }

]



export function Header() {
    return (
        <>
            <div className="bg-gradient-to-r from-blue-500 to-blue-400 shadow-2xl p-5 h-52 rounded-b-xl">
                <div className="flex justify-between">
                    <div className="font-extrabold text-xl text-white">ItemMU</div>
                    <div className="flex">
                        <div className="pr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </div>

                    </div>
                </div>
                <div className="pt-7 md:p-50 flex ">
                    <div className="bg-white  p-2  rounded-l-lg ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input type="text" className="w-full focus:outline-none rounded-r-lg placeholder-gray-600 subpixel-antialiased " placeholder="Cari Ginjal Yuk Gaskeun..." />
                </div>
            </div>
            <div className="flex justify-center">
                <SwiHeader dataSlide={urlObj} />
            </div>

        </>
    )
}


