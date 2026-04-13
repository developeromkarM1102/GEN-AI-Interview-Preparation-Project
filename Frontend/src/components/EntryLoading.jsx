import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const EntryLoading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <div className="flex items-center justify-center">
                <DotLottieReact
                    src="https://lottie.host/5ab326e4-8486-4677-9f01-de78f4678b99/cWXvBvhzL9.lottie"
                    loop
                    autoplay
                    style={{ width: 300, height: 300 }}
                />
            </div>
                <div className="text-center text-orange-500 font-[Raleway] mt-4 text-2xl">
                    We're preparing your best interview experience. Please wait a moment...
                </div>
        </div>
    )
}

export default EntryLoading
