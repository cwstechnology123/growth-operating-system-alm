import React from 'react'

export default function CustomerRetentionloopContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <p className="mb-0"> Customer Retention, Loyalty &amp; Experience</p>
                <h2 className="mb-5"> Customer Retention Loop </h2>
            </div>
            <div className="row curtomer-row">
                <div className="col-12 col-md-6">
                <div className="image-customer">
                    <img src="images/customer-retention//circle.png" className="img-fluid" alt="circle" />
                </div>
                </div>
                <div className="col-12 col-md-6">
                <div className="image-customer graph-bx">
                    <img src="images/customer-retention//graph.png" className="img-fluid" alt="graph" />
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12 contentleft">
                <div className="card">
                    <div className="card-body pl-0">
                    {/* table 1 */}
                    <div className="table-responsive table-dta">
                        <table className="table mb-0 customer-table">
                        <thead>
                            <tr>
                            <th colSpan={1} className="bg-color5 text-white d-hidden " />
                            <th colSpan={1} className="bg-color1 d-hidden text-white text-center-c text-font-size-15 padding-10" />
                            <th colSpan={2} className="bg-color3 text-white text-center-c text-font-size-15 padding-10">Year 1 Gains</th>
                            <th colSpan={4} className="bg-color3 text-white text-center-c text-font-size-15 padding-10">Long-Term Gains</th>
                            </tr>
                            <tr>
                            <th className>
                                <div className="customer-div">Customer Retention Loop Impact</div>
                            </th>
                            <th className="bg-color1 cs-font-size text-white text-center-c">Current</th>
                            <th className="bg-color1 cs-font-size text-white text-center-c">Your <br /> Projections</th>
                            <th className="bg-color1 cs-font-size text-white text-center-c">1% Quarterly <br /> Improvement</th>
                            <th className="bg-color1 cs-font-size text-white text-center-c">2 Years of 1% <br /> Improvements</th>
                            <th className="bg-color1 cs-font-size text-white text-center-c">3 Years of 1% <br /> Improvements</th>
                            <th className="bg-color1 cs-font-size text-white text-center-c">4 Years of 1% <br /> Improvements</th>
                            <th className="bg-color1 cs-font-size text-white text-center-c">5 Years of 1% <br /> Improvements</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th className="bg-color2 text-font-size-15">Reduced Customer Attrition</th>
                            <td className="bg-color2" />
                            <td className="bg-color2 ms-text-right">25</td>
                            <td className="bg-color2 ms-text-right">10</td>
                            <td className="bg-color2 ms-text-right">23</td>
                            <td className="bg-color2 ms-text-right">42</td>
                            <td className="bg-color2 ms-text-right">71</td>
                            <td className="bg-color2 ms-text-right">116</td>
                            </tr>
                            <tr>
                            <th className="bg-color2 text-font-size-15">Extending Buying Lifetime</th>
                            <td className="bg-color2" />
                            <td className="bg-color2 ms-text-right">91</td>
                            <td className="bg-color2 ms-text-right">38</td>
                            <td className="bg-color2 ms-text-right">75</td>
                            <td className="bg-color2 ms-text-right">111</td>
                            <td className="bg-color2 ms-text-right">151</td>
                            <td className="bg-color2 ms-text-right">185</td>
                            </tr>
                            <tr>
                            <th className="bg-color2 text-font-size-15">Customer Reactivation</th>
                            <td className="bg-color2" />
                            <td className="bg-color2 ms-text-right">60</td>
                            <td className="bg-color2 ms-text-right">24</td>
                            <td className="bg-color2 ms-text-right">34</td>
                            <td className="bg-color2 ms-text-right">44</td>
                            <td className="bg-color2 ms-text-right">57</td>
                            <td className="bg-color2 ms-text-right">375</td>
                            </tr>
                            <tr>
                            <th className="bg-color3 text-white"> - Retained Customers from Retention Activities</th>
                            <td className="bg-color1" />
                            <td className="bg-color3 text-white ms-text-right">176</td>
                            <td className="bg-color3 text-white ms-text-right">72</td>
                            <td className="bg-color3 text-white ms-text-right">132</td>
                            <td className="bg-color3 text-white ms-text-right">197</td>
                            <td className="bg-color3 text-white ms-text-right">279</td>
                            <td className="bg-color3 text-white ms-text-right">375</td>
                            </tr>
                            <tr>
                            <th className="bg-color2 text-font-size-15">Purchase Frequency</th>
                            <td className="bg-color2 ms-text-right">10</td>
                            <td className="bg-color2 ms-text-right">11.0</td>
                            <td className="bg-color2 ms-text-right">11.4</td>
                            <td className="bg-color2 ms-text-right">11.8</td>
                            <td className="bg-color2 ms-text-right">11.2</td>
                            <td className="bg-color2 ms-text-right">11.7</td>
                            <td className="bg-color2 ms-text-right">12.2</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    {/* table 2 */}
                    <div className="table-responsive table-dta">
                        <table className="table mb-0 mt-4 customer-table">
                        <thead>
                            <tr>
                            <th colSpan={2} className>
                                <div className="customer-div">Financial Performance</div>
                            </th>
                            {/* <th colspan="1" class="bg-color1 text-white text-center-c text-font-size-15 padding-10"></th> */}
                            <th colSpan={2} className="bg-color3 text-white text-center-c text-font-size-15 padding-10">Year 1 Gains</th>
                            <th colSpan={4} className="bg-color3 text-white text-center-c text-font-size-15 padding-10">Long-Term Gains</th>
                            </tr>
                            <tr>
                            <th className="bg-color1 cs-font-size text-white">
                                New Customer Value Calculations
                            </th>
                            <th className="bg-color1 cs-font-size text-white text-center-c">Current</th>
                            <th className="bg-color1 cs-font-size text-white text-center-c">Your <br /> Projections</th>
                            <th className="bg-color1 cs-font-size text-white text-center-c">1% Quarterly <br /> Improvement</th>
                            <th className="bg-color1 cs-font-size text-white text-center-c">2 Years of 1% <br /> Improvements</th>
                            <th className="bg-color1 cs-font-size text-white text-center-c">3 Years of 1% <br /> Improvements</th>
                            <th className="bg-color1 cs-font-size text-white text-center-c">4 Years of 1% <br /> Improvements</th>
                            <th className="bg-color1 cs-font-size text-white text-center-c">5 Years of 1% <br /> Improvements</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th className="bg-color2 text-font-size-15">Company Annual Sales</th>
                            <td className="bg-color1" />
                            <td className="bg-color2 ms-text-right">$ 1,935,000</td>
                            <td className="bg-color2 ms-text-right">$ 753,600</td>
                            <td className="bg-color2 ms-text-right">$ 1,425,998</td>
                            <td className="bg-color2 ms-text-right">$ 2,217,405</td>
                            <td className="bg-color2 ms-text-right">$ 3,267,576</td>
                            <td className="bg-color2 ms-text-right">$ 4,558,177</td>
                            </tr>
                            <tr>
                            <th className="bg-color2 text-font-size-15">Company Annual Profit</th>
                            <td className="bg-color1" />
                            <td className="bg-color2 ms-text-right">$ 677,250</td>
                            <td className="bg-color2 ms-text-right">$ 263,760</td>
                            <td className="bg-color2 ms-text-right">$ 499,099</td>
                            <td className="bg-color2 ms-text-right">$ 776,092</td>
                            <td className="bg-color2 ms-text-right">$ 1,143,652</td>
                            <td className="bg-color2 ms-text-right">$ 1,595,362</td>
                            </tr>
                            <tr>
                            <th className="bg-color2 text-font-size-15">Estimated Valuation Impact</th>
                            <td className="bg-color1" />
                            <td className="bg-color2 ms-text-right">$ 3,724,875</td>
                            <td className="bg-color2 ms-text-right">$ 1,450,680</td>
                            <td className="bg-color2 ms-text-right">$ 2,745,046</td>
                            <td className="bg-color2 ms-text-right">$ 4,268,504</td>
                            <td className="bg-color2 ms-text-right">$ 6,290,084</td>
                            <td className="bg-color2 ms-text-right">$ 8,774,490</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>                                          
                </div>
            </div>
        </div>
    </div>
  )
}
