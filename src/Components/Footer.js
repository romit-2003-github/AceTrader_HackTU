import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="foot1">
                    <h3>AceTraders</h3>
                    <br /><br />
                    <h5>2022-23, AceTraders Ltd.</h5>
                    <h6>&#169; All Rights Reserved</h6>
                </div>

                <div className="foot1 foot2">
                    <h3>Company</h3>
                    <br />
                    <br />
                    <ul className='foot2_list'>
                        <li className="foot2_items"><a href='/'>About</a></li>
                        <li className="foot2_items"><a href='/'>Products</a></li>
                        <li className="foot2_items"><a href='/'>Pricing</a></li>
                        <li className="foot2_items"><a href='/'>Referal Programme</a></li>
                        <li className="foot2_items"><a href='/'>Careers</a></li>
                        <li className="foot2_items"><a href='/'>AceTraders.Tech</a></li>
                        <li className="foot2_items"><a href='/'>Press & Media</a></li>
                        <li className="foot2_items"><a href='/'>AceTraders Cares(CSR)</a></li>
                    </ul>
                </div>

                <div className="foot1 foot2">
                    <h3>Support</h3>
                    <br /><br />
                    <ul className='foot2_list'>
                        <li className="foot2_items"><a href='/'>Contact Us</a></li>
                        <li className="foot2_items"><a href='/'>Support Portal</a></li>
                        <li className="foot2_items"><a href='/'>Z-Connect blog</a></li>
                        <li className="foot2_items"><a href='/'>List of Charges</a></li>
                        <li className="foot2_items"><a href='/'>Downloads and Resources</a></li>
                        <li className="foot2_items"><a href='/'>Videos</a></li>
                        <li className="foot2_items"><a href='/'>Market Overview</a></li>
                    </ul>
                </div>

                <div className="foot1 foot2">
                    <h3>Account</h3>
                    <br />
                    <br />
                    <ul className='foot2_list'>
                        <li className="foot2_items"><a href='/'>Open your Account</a></li>
                        <li className="foot2_items"><a href='/'>Fund Transfer</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer
