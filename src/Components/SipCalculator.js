import React from 'react'

const SipCalculator = () => {
    const CalculateSIP = () => {
        let mi = document.getElementById('investedAmt').value;
        let year = document.getElementById('month').value;
        let ror = document.getElementById('return').value;
        let n = 12;
        let i = ror / n;
        let A = mi * ((((1 + i) ^ (year)) - 1) / i) * (1 + i)
        let total = mi * year;
        let est = A - total;

        document.getElementById('totAmt').innerHTML = "Amount Invested &#8594; Rs." + total;
        document.getElementById('SIPResult').innerHTML = "Total Value &#8594; Rs." + A;
        document.getElementById('Estreturns').innerHTML = "Estimated Returns &#8594; Rs." + est;
        // A = P * (((1 + r/n)^(nt)) - 1) / (r/n)

    }
    return (
        <div>
            <div className="detailsSIP">
                <h1 style={{ textAlign: 'center', fontSize: '4rem',marginTop:'30px' }}>SIP Calculator</h1>
                <div className="sipForm">
                    <div class="mb-3 py-3">
                        <label htmlfor="exampleFormControlInput1" class="form-label">Monthly Investment</label>
                        <input type="number" class="form-control" id="investedAmt" placeholder="Enter Monthly Investment" />
                    </div>
                    <div class="mb-3 py-3">
                        <label htmlfor="exampleFormControlInput1" class="form-label">Number of months you have invested</label>
                        <input type="number" class="form-control" id="month" placeholder="Enter Number of Years" />
                    </div>
                    <div class="mb-3 py-3">
                        <label htmlfor="exampleFormControlInput1" class="form-label">Expected rate of return</label>
                        <input type="number" class="form-control" id="return" placeholder="Enter rate of return" />
                    </div>
                    <button type='button' className='btn btn-outline-primary my-3' onClick={CalculateSIP} >Calculate</button>
                    <div className="results">
                        <h3 id="SIPResult"></h3>
                        <h3 id="totAmt"></h3>
                        <h3 id="Estreturns"></h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SipCalculator
