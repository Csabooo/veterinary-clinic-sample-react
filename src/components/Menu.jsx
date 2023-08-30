import React from 'react'

function Menu() {

    return (
        <div>
            <div className="absolute text-center top-0 right-0 w-[150px] -z-10 bg-secondary-color min-h-screen">
                <ul className='rollMenu'>
                    <li>About Us</li>
                    <li>Mission</li>
                    <li>Meet Our Team</li>
                    <li>What We're Doing</li>
                    <li>Service</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu