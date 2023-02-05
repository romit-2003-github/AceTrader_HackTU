import React from 'react'
import { Link } from 'react-router-dom';

const tools = () => {
    return (
        <>
            <div className="toolcontainer">
                <div class="card" style={{ color: 'black' }}>
                    <img src={require("./calimage.png")} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">SIP Calculator</h5>
                        <p class="card-text">A SIP calculator is a simple tool that allows individuals to get an idea of the returns on their mutual fund investments made through SIP.</p>
                        <Link to={"/SipCalculator"} class="btn btn-primary my-3" style={{borderRadius:'10px'
                        }}>Click here <span>&#8594;</span></Link>
                    </div>
                </div>

                <div class="card" style={{ color: 'black' }}>
                    <img src={require("./Rpp.png")} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">RPD Analysis</h5>
                        <p class="card-text">A risk per day calculator for stocks is a tool used to determine the amount of risk an investor is willing to take on a daily basis when trading stocks.</p>
                        <Link to={"/rpdanalysis"} class="btn btn-primary my-3" style={{borderRadius:'10px'
                        }}>Click here<span> &#8594;</span></Link>
                    </div>
                </div>

                <div class="card" style={{ color: 'black' }}>
                    <img src={require("./Graph.png")} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Real  Time Monitoring</h5>
                        <p class="card-text">Real-time monitoring refers to the continuous and immediate observation and analysis of data and events as they occur.</p>
                        <Link to={"/RealTime"} class="btn btn-primary my-3" style={{borderRadius:'10px'
                        }}>Click here <span>&#8594;</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default tools

// style="width: 18rem;"