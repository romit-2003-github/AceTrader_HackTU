import React from 'react'
import { Link } from 'react-router-dom'

const FrontIntro = () => {
    return (
        <>
            <div className="introduction">
                <div className="introText">
                    <p id='para1'>All the detailed information about market !</p>
                    <h1>The fastest ways to</h1><h1>follow market</h1>
                    <br />
                    <p>We are social community for traders to interact and learn,share ideas and work together to improve their skills.Unique and simple way to check live charts instantly with risk per day analysis ideas.</p>
                    <div className="but py-3">
                    <button type="button" className="btn btn-outline-light mx-3"><Link to={"/Login"}>Get Started <span>&#8594;</span></Link></button>
                    </div>
                </div>
                <div className="introImg">
                    <img src={require("./market1.png")} alt="" />
                </div>
            </div>
        </>
    )
}

export default FrontIntro
