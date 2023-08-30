import React from 'react'
import video720p from "../assets/video/miroshnichenko720p.mp4";

function Main() {
    return (
        <div className=" ">
            <div className="showcase absolute min-w-screen min-h-screen flex px-5" >
                <div className="flex flex-col text-center mx-auto min-h-screen pt-14">
                    <h1>Compassion</h1>
                    <h1>Care</h1>
                    <h1>Community</h1>
                    <h2 className='pt-6'>Providing expert care for your furry loved ones</h2>
                </div>
            </div>
            <p className='absolute flex bottom-6 text-center px-5'>Our veterinary professionals work with you as a team to provide the optimal treatment for your pet. Through compassion and dedication, we are committed to furthering the betterment of animals in Hungary and beyond.</p>

            <video src={video720p} muted loop autoPlay></video>
        </div>
    )
}

export default Main