import React from 'react'

function Main() {
    return (
        <div className="">
            <div className="showcase absolute w-screen min-h-screen flex px-5 z-20" >
                <div className="flex flex-col justify-center text-center align-middle mx-auto pt-5">
                    <h1>Compassion</h1>
                    <h1>Care</h1>
                    <h1>Community</h1>
                    <h2 className='pt-6'>Providing expert care for your furry loved ones</h2>
                    <p className='pt-[34em]'>Our veterinary professionals work with you as a team to provide the optimal treatment for your pet. Through compassion and dedication, we are committed to furthering the betterment of animals in Hungary and beyond.</p>
                </div>
            </div>
            <video className="flex" src="src\assets\pexels-tima-miroshnichenko-6235183 (720p).mp4" muted loop autoPlay></video>
        </div>

    )
}

export default Main