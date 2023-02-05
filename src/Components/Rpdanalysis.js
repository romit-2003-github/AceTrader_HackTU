import React from 'react'
import { Link } from 'react-router-dom';

const RpdAnalysis = () => {

    const directedPage = () => {
        window.alert("You will be redirected to NSE Stock Exchange Official Website..\n Thanks for Visiting AceTraders !! Happy Trading...");
    }
    const CalculateRPD = () => {
        let Amt = document.getElementById('investedAmt').value;
        let sPrice = document.getElementById('stock').value;
        let tDays = document.getElementById('trading').value;
        let risk = document.getElementById('risk').value;

        let A = (Amt * sPrice) * (1 / tDays) * (risk / 100);
        let rpd = (A / Amt) * 100;
        let roundedper = Math.round((rpd + Number.EPSILON) * 100) / 100;
        // let rounded = Math.round((A + Number.EPSILON) * 100) / 100;
        // document.getElementById('RPDResult').innerHTML = "The Risk Per Day involved is Rs." + rounded;

        document.getElementById('RPDperResult').innerHTML = roundedper + "%";

        if (roundedper >= 50) {
            document.getElementById("showBack").style.display = 'block';
            document.getElementById("showNse").style.display = 'none';

        }
        else {
            document.getElementById("showNse").style.display = 'block';

        }

        document.getElementById('RPDShow').style.display = 'block';
    }
    return (
        <>
            <div className="CalcContainer">
                <div className="CalcContainerForm">
                    <div className="rpdForm">
                        <div class="mb-3 py-3">
                            <label htmlFor="exampleFormControlInput1" class="form-label">Enter Investment Amount</label>
                            <input type="number " class="form-control" id="investedAmt" placeholder="Enter Investment Amount" />
                        </div>
                        <label htmlFor="cars">Choose a stock to analyze</label>
                        <br />
                        <select name="stock" id="stock">
                            <option value="1351">Adani</option>
                            <option value="444.75">Tata</option>
                            <option value="12705.08">Apple</option>
                            <option value="21245.02">Microsoft</option>
                            <option value="15622.72">Tesla</option>
                            <option value="2330.00">Reliance</option>
                            <option value="3475.00">TCS</option>
                            <option value="1,595.65">Infosys</option>
                        </select>
                        <div class="mb-3 py-3">
                            <label htmlFor="exampleFormControlInput1" class="form-label">Enter trading days in a year</label>
                            <input type="number" class="form-control" id="trading" placeholder="Enter trading days" />
                        </div>
                        <div class="mb-3 py-3">
                            <label htmlFor="exampleFormControlInput1" class="form-label">Enter Risk Percentage of the stock</label>
                            <input type="number" class="form-control" id="risk" placeholder="Enter Risk Percentage" />
                        </div>


                        <button type='button' className='btn btn-outline-light my-3' onClick={CalculateRPD}>Calculate</button>

                        <h3 id="RPDShow" style={{ display: 'none' }}>
                            " The calculated Risk Per Day is "
                        </h3>
                        <h1 id="RPDperResult"></h1>

                        <div className="RPDper" id='showBack'>
                            <h3>There is high risk involved &#10060; !!</h3>
                            <h3>Want to continue Trading ?</h3>
                            <button type="button" className="btn btn-outline-light mx-3"><Link to={"/"}><span>&#8592;</span> No</Link></button>
                            <button type="button" className="btn btn-outline-light mx-3"><Link to={"https://www.nseindia.com/"} onClick={directedPage}>Yes <span>&#8594;</span></Link></button>
                        </div>

                        <div className="RPDper" id='showNse'>
                            <h3>This stock is safe to trade &#128512;</h3>
                            <h3>Want to continue Trading ?</h3>
                            <button type="button" className="btn btn-outline-light mx-3"><Link to={"/"}><span>&#8592;</span> No</Link></button>
                            <button type="button" className="btn btn-outline-light mx-3"><Link to={"https://www.nseindia.com/"} onClick={directedPage}>Yes <span>&#8594;</span></Link></button>
                        </div>

                    </div>
                </div>
                <div className="detailWindow">
                    <div className="photoRPD">
                        <img src={require("./rpd.jpeg")} />
                    </div>
                    <div className="RpdPara">
                        <p>' A risk per day calculator for stocks is a tool used to determine the amount of risk an investor is willing to take on a daily basis when trading stocks. The calculator takes into consideration various factors such as the investment amount, stock price, and the desired daily return. '</p>
                        <p>' By inputting these values, the calculator calculates the maximum amount of risk an investor can take on a daily basis to reach their desired return. '</p>
                    </div>

                </div>
            </div>


        </>
    )

}
export default RpdAnalysis
