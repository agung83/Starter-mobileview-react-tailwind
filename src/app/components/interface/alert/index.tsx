import { useState } from "react"




export const AlertComponents = () => {
    const [showAlert, setAlert] = useState(false)
    return (
        <>
            <div className={
                showAlert === false ? 'block mt-4 mx-4 py-3 pl-5 pr-3 opacity-100 shadow-lg cursor-pointer rounded-lg font-itemku bg-white' : 'hidden'
            }>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <img src="https://itemku.com/static/socmed-icon/instagram-icon.svg" className="h-6 w-6" />
                        <p className="font-bold text-xs leading-4  pl-2">IKOY-IKOYAN DI IG ITEMMU</p>
                    </div>
                    <div className="items-center">
                        <button className="p-2" onClick={() => setAlert(true)} >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
