import React from 'react'
import video720p from "../assets/video/miroshnichenko720p.mp4";

function Main() {
    return (
        <div className="">
            <div className="showcase absolute min-w-screen min-h-screen flex px-5" >
                <div className="flex flex-col text-center mx-auto w-screen min-h-screen pt-10 md:text-right md:mx-0 md:pt-20 z-20">
                    <h1>Compassion</h1>
                    <h1>Care</h1>
                    <h1>Community</h1>
                    <h2 className='pt-6'>Providing expert care for your furry loved ones</h2>
                </div>
            </div>
            <p className='absolute w-screen  first-letter:flex bottom-6 text-center px-5 md:bottom-2'>Our veterinary professionals work with you as a team to provide the optimal treatment for your pet. Through compassion and dedication, we are committed to furthering the betterment of animals in Hungary and beyond.</p>

            <video type="video/mp4" src={video720p} playsinline muted loop autoPlay></video>
        </div>
    )
}

export default Main