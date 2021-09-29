

export function Footer() {
    return (
        <>
            <hr />
            <footer className="bg-white shadow-2xl pt-3">
                <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
                    <div className="text-xs text-center mx-auto p-5 ">
                        <p >Download Aplikasi Mobile itemMU</p>
                        <div className="flex ">
                            <div className="p-2">
                                <a href="">
                                    <img src="https://itemku.com/static/get-it-on-google-play.png" width="120" alt="" loading="lazy" />
                                </a>
                            </div>
                            <div className="p-2">
                                <a href="">
                                    <img src="https://itemku.com/static/get-it-itemku-full.png" width="120" alt="" loading="lazy" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-28">
                    <div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-xs flex-row justify-center">
                        <div className="mt-2">
                            © Copyright 2021-2022 <span className="text-red-500">itemMU Indonesia</span> All Rights Reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}


