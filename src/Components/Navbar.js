import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    let [myStyle, setMyStyle] = useState({
        backgroundColor: 'transparent',
        color: 'white'
    });

    const scrollFunc = () => {
        if(myStyle.backgroundColor === 'transparent')
        {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
        }
        else
        {
            setMyStyle({
                color: 'white',
                backgroundColor: 'transparent'
            })
        }

    }
    return (
        <header className="navbar" onScroll={scrollFunc}>
            <div className="logo">AceTraders</div>
            <ul className='navigation'>
                <li className="navItem"><a href="/">Contact Us</a></li>
                <li className="navItem"><a href="/">About Us</a></li>
                <li className="navItem"><a href="/">Real Time Monitoring</a></li>
                {/* <li className="navItem"><Link to={"/Login"}>Login/SignUp</Link></li> */}
                <button type="button" className="btn btn-outline-light mx-3"> <Link to={"/Login"}>Login/SignUp</Link></button>
            </ul>
        </header>


    )
}

export default Navbar
