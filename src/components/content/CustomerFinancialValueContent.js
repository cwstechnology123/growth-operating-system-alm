import React from 'react'

export default function CustomerFinancialValueContent() {
  return (
   <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <h2>Customer Financial Value</h2>	            					
            </div>
            <div className="card">
                <div className="card-body pl-0">
                <div className="row">
                    <div className="col-md-3">
                    <div className="bench1 darkblue">
                        <p>Annual Customer Value- Sales (ACV-S)</p>
                        <div className="benchbody d-flex justify-content-between">
                        <figure>
                            <img src="images/svg/i2.png" />
                        </figure>
                        <h2>$10,000</h2>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="bench1 green">
                        <p>Annual Customer Value- Profit (ACV-P)</p>
                        <div className="benchbody d-flex justify-content-between">
                        <figure>
                            <img src="images/svg/i5.png" />
                        </figure>
                        <h2>$35,00</h2>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="bench1 darkblue">
                        <p>Lifetime Customer Value- Sales (LCV-S)</p>
                        <div className="benchbody d-flex justify-content-between">
                        <figure>
                            <img src="images/svg/i2.png" />
                        </figure>
                        <h2>$50,000</h2>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="bench1 green">
                        <p>Lifetime Customer Value- Sales (LCV-P)</p>
                        <div className="benchbody d-flex justify-content-between">
                        <figure>
                            <img src="images/svg/i5.png" />
                        </figure>
                        <h2>$17,500</h2>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="table-responsive mb-5 mt-5">
                    <table className="table table-responsive-md mb-0">                        
                    <tbody>
                        <tr className="thead-primary">
                        <th style={{width: '33%'}} colSpan={2}>About Your Business</th>
                        <th>1% Quarterly Improvement</th>
                        <th>2 Years of 1% Improvements</th>
                        <th>3 Years of 1% Improvements</th>
                        <th>4 Years of 1% Improvements</th>
                        <th>5 Years of 1% Improvements</th>
                        </tr>
                        <tr>
                        <td style={{width: '33%'}}>Average Transaction Value</td>
                        <td>$1,000.00</td>
                        <td>$1040.00</td>
                        <td>$1081.60</td>
                        <td>$1124.86</td>
                        <td>$1189.86</td>
                        <td>$1216.65</td>
                        </tr>
                        <tr>
                        <td style={{width: '33%'}}>Annual Purchage Frequency</td>
                        <td>10.0</td>
                        <td>10.4</td>
                        <td>10.8</td>
                        <td>11.2</td>
                        <td>11.7</td>
                        <td>12.2</td>
                        </tr>
                        <tr>
                        <td style={{width: '33%'}}>Average Customer Buying Lifitime</td>
                        <td>5</td>
                        <td>5.2</td>
                        <td>5.4</td>
                        <td>5.6</td>
                        <td>5.8</td>
                        <td>6.2</td>
                        </tr>
                        <tr>
                        <td style={{width: '33%'}}>Gross Profit margin</td>
                        <td>35.0%</td>
                        <td>36.4%</td>
                        <td>37.9%</td>
                        <td>39.9%</td>
                        <td>40.9%</td>
                        <td>46.6%</td>
                        </tr>
                        <tr>
                        <td style={{width: '33%'}}>Number Of Active Customers</td>
                        <td>1000</td>
                        <td>1163</td>
                        <td>1451</td>
                        <td>1889</td>
                        <td>2519</td>
                        <td>3160</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="table-responsive">
                    <table className="table table-responsive-md ">                        
                    <tbody>
                        <tr className="thead-primary">
                        <th style={{width: '33%'}}>Customer Financial Value</th>
                        <th>Current Customer Value</th>
                        <th>1% Quarterly Improvement</th>
                        <th>2 Years of 1% Improvements</th>
                        <th>3 Years of 1% Improvements</th>
                        <th>4 Years of 1% Improvements</th>
                        <th>5 Years of 1% Improvements</th>
                        </tr>
                        <tr>
                        <td style={{width: '33%'}}>Annual Customer Value- Sales (ACV-S)</td>
                        <td>$1,000.00</td>
                        <td>$10,816.00</td>
                        <td>$11896.00</td>
                        <td>$12696.86</td>
                        <td>$1189.86</td>
                        <td>$1216.65</td>
                        </tr>
                        <tr>
                        <td style={{width: '33%'}}>Annual Customer Value- Sales (ACV-P)</td>
                        <td>3,500</td>
                        <td>10.4</td>
                        <td>1.6</td>
                        <td>2.5</td>
                        <td>3.4</td>
                        <td>3.33</td>
                        </tr>
                        <tr>
                        <td style={{width: '33%'}}>Lifetime Customer Value- Sales (LCV-S)</td>
                        <td>50,000</td>
                        <td>0.8</td>
                        <td>1.6</td>
                        <td>2.5</td>
                        <td>3.4</td>
                        <td>3.33</td>
                        </tr>
                        <tr>
                        <td style={{width: '33%'}}>Lifetime Customer Value- Sales (LCV-P)</td>
                        <td>17,500</td>
                        <td>20,472</td>
                        <td>13,649</td>
                        <td>2.5</td>
                        <td>3.4</td>
                        <td>3.33</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            <div className="linkbtn">
                <a href="impact-of-the120-growth.html"><i className="fa fa-arrow-left" /> Proceed to the impact of 120 Growth Opreting System</a>
            </div>
            </div>

    </div>

  )
}
