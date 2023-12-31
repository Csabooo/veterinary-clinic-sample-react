import React, { useState } from "react";




function Header(props) {

    const [isValid, setValid] = useState(false);

    const buttonHandler = () => {
        setValid((prevState) => !prevState);

    };
    props.onSaveState(isValid);

    let hamburgerMenu = (
        <div>
            <button className="md:hidden" onClick={buttonHandler}>
                <span className="material-symbols-outlined flex flex-col justify-center align-items pt-3">
                    menu
                </span>
            </button>
            <ul className="navMenu hidden md:flex md:align-middle md:h-full">
                <li>About Us</li>
                <li>Mission</li>
                <li>Meet Our Team</li>
                <li>What We're Doing</li>
                <li>Service</li>
            </ul>
        </div>
    );


    if (isValid) {
        hamburgerMenu = (
            <div>
                <button onClick={buttonHandler} >
                    <span className="material-symbols-outlined flex flex-col justify-center pt-3 md:hidden" >
                        close
                    </span >
                </button >

            </div >
        )
    }


    return (
        <div className="absolute flex align-middle justify-between top-0 z-30 mx-auto ">
            <div className="flex align-middle justify-between w-screen px-5">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="35" height="50" viewBox="130 0 280 500" enableBackground="new 0 0 500 500" xmlSpace="preserve" fill="#3f2305">
                    <g id="XMLID_2_">
                        <path id="XMLID_9_" d="M294.5,395.5c-9.4-0.3-17.9-1.4-26.2-3.6c-9.2-2.4-18.6-2.7-28-1.9c-11.5,0.9-22.5,4-33.5,6.8
		c-11.7,2.9-23.2,2.8-34.3-2.1c-16.9-7.4-27.8-20.1-30-38.5c-2.4-20.6,4.4-38.3,20.4-51.8c7.2-6.1,14.2-12.3,20.4-19.5
		c7.5-8.6,13.8-18,19.5-27.9c7.8-13.8,19-23.5,34.5-27.7c17.5-4.7,35.1,1.9,45.3,17.1c8.5,12.6,18.2,24.1,28.6,35.1
		c8.1,8.5,16.3,16.8,24.4,25.3c7.1,7.4,13.1,15.6,15.6,25.6c4,16.1,2.3,31.5-7.2,45.4c-5.3,7.8-13.1,12.1-22.1,14.5
		C313.9,394.4,302.3,395.6,294.5,395.5z"/>
                        <path id="XMLID_8_" d="M94.6,234c0.2-14.5,3.6-28.2,11.6-40.4c2.3-3.5,5.1-6.7,8.6-9c7.2-4.7,15.1-4.3,22.2,0.7
		c7.8,5.4,13.5,12.7,18.7,20.4c6.5,9.5,11.5,19.8,14.6,31c3.3,11.7,3,23.3-2.1,34.5c-7.4,16.5-25.5,23.1-41.7,15.2
		c-10.5-5.1-19.1-12.5-24.8-22.8c-3.9-7-6-14.6-6.7-22.5C94.8,238.6,94.7,236.3,94.6,234z"/>
                        <path id="XMLID_7_" d="M405.4,234.3c-0.6,4.7-0.9,9.4-1.8,13.9c-2.7,13.7-10,24.5-21.2,32.6c-5.1,3.7-10.6,6.8-16.9,8.2
		c-8.9,1.9-17,0.1-24.3-5.4c-6.5-5-10.4-11.8-12.4-19.7c-2.7-10.9-1.7-21.5,2-32c5.3-15.1,13.4-28.5,24.3-40.1
		c3.7-4,7.9-7.4,13.2-9.3c6.5-2.4,12.4-1.1,17.8,3.1c6.7,5.2,10.5,12.5,13.7,20.2C403.5,214.8,405,224.6,405.4,234.3z"/>
                        <path id="XMLID_6_" d="M226.4,216.5c1.2-1.2,2.4-2.5,3.7-4.1c0.1-0.2,0.3-0.3,0.4-0.5c0.1-0.1,0.2-0.2,0.3-0.4
		c0.1-0.1,0.2-0.2,0.3-0.3c0-0.1,0.1-0.1,0.1-0.2c8.7-11.8,11.8-25.3,11-39.7c-0.7-12.3-3.6-24.2-6.7-36.1
		c-2.2-8.2-5.1-16.1-9.8-23.2c-3.1-4.8-6.9-8.9-12.8-10.1c-8.6-1.8-16.4,0.7-22.9,6.3c-13,11-21.9,25-27.6,41
		c-4.3,12-5.3,24.3-1.8,36.6c3.8,13.5,10.6,25.1,22.3,33.5c9.7,6.9,21.7,8.5,32.3,4.4l0,0c0,0,0,0,0,0c1-0.4,1.9-0.8,2.9-1.3
		c1.8-0.9,3.5-1.8,5.2-3C224.4,218.3,225.7,217.3,226.4,216.5z"/>
                        <path id="XMLID_5_" d="M339.8,157.9c-3.8-16.3-11.4-30.8-22.7-43.3c-4.9-5.4-10.6-9.5-17.6-11.7c-11.2-3.6-19.1-0.7-25.4,9.1
		c-4,6.2-6.9,12.9-8.8,20c-2.3,8.7-4.1,17.6-6,26.4c-2.8,12.9-2.6,25.6,1.7,38.2c3.5,10.3,9.3,19.1,18.9,24.6
		c12.6,7.2,25,5.9,36.8-2c0.1-0.1,0.3-0.1,0.4-0.2c0.8-0.5,1.8-1.1,2.7-1.9c0.7-0.7,1.1-1,1.4-1.3c4.8-4.2,8.7-9.1,11.7-14.7
		C340.4,187.6,343.4,173.2,339.8,157.9z"/>
                    </g>
                </svg>

                <p className="flex flex-col justify-center">Fluffy Veterinary Clinic</p>

                {hamburgerMenu}
            </div>
        </div>
    )
}

export default Header;