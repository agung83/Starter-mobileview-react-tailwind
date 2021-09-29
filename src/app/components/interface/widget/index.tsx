
export function WidgetFront() {
    return (
        <div className="grid grid-cols-4 gap-4 justify-items-center p-5 md:p-10">
            <div>
                <div className="box rounded-xl  h-16 w-16 flex items-center justify-center bg-white shadow-2xl ">
                    <img src="https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/category/20200828/category-mobile-game.svg" className="w-12 h-12" alt="" />

                </div>
                <p className="text-center text-xs text leading-1 w-16 mt-1">Mobile  Game</p>
            </div>
            <div>
                <div className="box rounded-xl  h-16 w-16 flex items-center justify-center bg-white shadow-2xl hover:bg-blue-200">
                    <img src="https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/category/20200828/category-pc-game.svg" className="w-12 h-12" alt="" />

                </div>
                <p className="text-center text-xs text leading-1 w-16 mt-1">Pc  Game</p>
            </div>
            <div>
                <div className="box rounded-xl  h-16 w-16 flex items-center justify-center bg-white shadow-2xl hover:bg-blue-200">

                    <img src="https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/category/20200828/category-console.svg" className="w-12 h-12" alt="" />
                </div>
                <p className="text-center text-xs text leading-1 w-16 mt-1">Console  Game</p>
            </div>
            <div>
                <div className="box rounded-xl  h-16 w-16 flex items-center justify-center bg-white shadow-2xl hover:bg-blue-200">
                    <img src="https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/category/20200828/category-streaming.svg" className="w-12 h-12" alt="" />
                </div>
                <p className="text-center text-xs text leading-1 w-16 mt-1">Streaming  App</p>
            </div>
            <div>
                <div className="box rounded-xl h-16 w-16 flex items-center justify-center bg-white shadow-2xl hover:bg-blue-200">

                    <img src=" https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/category/20200828/category-app.svg" className="w-12 h-12" alt="" />
                </div>
                <p className="text-center text-xs text leading-1 w-16 mt-1">Aplikasi</p>
            </div>
            <div>
                <div>
                    <div className="rounded-xl  h-16 w-16 flex items-center justify-center bg-white shadow-2xl hover:bg-blue-200">

                        <img src="https://itemku-app.s3-ap-southeast-1.amazonaws.com/icon/category/20200828/category-pulsa.svg" className="w-12 h-12" alt="" />
                    </div>
                    <p className="text-center text-xs text leading-1 w-16 mt-1">Pulsa & Utilitas</p>
                </div>

            </div>
        </div>
    )
}


