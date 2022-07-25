import React from 'react'

export default function NetPromoterScoreContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <p className="mb-0"> Customer Retention, Loyalty &amp; Experience</p>
                <h2 className="mb-3"> Net Promoter Score </h2>
                <ul className="list-unstyled">
                <li className="net-page-lit mb-2">
                    <b>Net Promoter Score</b> is based on a single survey question:  "On a scale of 0 to 10, how likely are you to recommend this company's products or services to a friend or colleague?"  
                </li>
                <li className="net-page-lit">
                    Rank 9-10 are Promoters:  considered loyal customers, repeat buyers, and brand advocates.
                </li>
                <li className="net-page-lit">
                    Rank 7-8 are Passives:  satisfied with their purchase, but not committed to the brand; susceptible to purchasing from competitors.  
                </li>
                <li className="net-page-lit mb-2">
                    Rank 0-6 are Detractors:  dissatisfied with their experience and could potentially damage your brand's reputation by sharing negative feedback.  
                </li>
                <li className="net-page-lit mb-4">
                    Subtracting the percentage of Detractors from the percentage of Promoters produces a score between -100 and 100, which is the Net Promoter Score.  By asking customers to explain their rationale for their ratings in a follow-up, open-ended question allows companies to get direct feedback and identify areas for improvement.  
                </li>
                </ul>
            </div>
            <div className="row net-promotor">
                <div className="col-12 col-md-12 col-lg-12 col-xl-6">
                <div className="number-line-main">
                    <div className="title-numer mb-2">Detractors </div>
                    <div className="border-overlay" />
                    <div className="total-number-div">
                    <div className="numberdiv">
                        <div className="inner-number">1</div>
                    </div>
                    <div className="numberdiv">
                        <div className="inner-number">2</div>
                    </div>
                    <div className="numberdiv">
                        <div className="inner-number">3</div>
                    </div>
                    <div className="numberdiv">
                        <div className="inner-number">4</div>
                    </div>
                    <div className="numberdiv">
                        <div className="inner-number">5</div>
                    </div>
                    <div className="numberdiv">
                        <div className="inner-number">6</div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-12 col-lg-12 col-xl-3">
                <div className="number-line-main">
                    <div className="title-numer mb-2">Detractors </div>
                    <div className="border-overlay" />
                    <div className="total-number-div">
                    <div className="numberdiv number78">
                        <div className="inner-number">7</div>
                    </div>
                    <div className="numberdiv number78">
                        <div className="inner-number">8</div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-md-12 col-lg-12 col-xl-3">
                <div className="number-line-main">
                    <div className="title-numer mb-2">Detractors </div>
                    <div className="border-overlay" />
                    <div className="total-number-div">
                    <div className="numberdiv number910">
                        <div className="inner-number">9</div>
                    </div>
                    <div className="numberdiv number910">
                        <div className="inner-number">10</div>
                    </div>
                    </div>
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
                            <th colSpan={1} className="bg-color5 text-white d-hidden">Number</th>
                            <th colSpan={1} className="bg-color1 text-white text-center-c">Number</th>
                            <th colSpan={1} className="bg-color1 text-white text-center-c">Percent</th>
                            <th colSpan={1} className="bg-color3 text-white d-hidden" />
                            <th colSpan={1} className="bg-color1 text-white text-center-c">Net Promoter <br /> Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th className="bg-color2 text-font-size-15">Promoters</th>
                            <td className="bg-color2 text-font-size-15 text-center-c">67</td>
                            <td className="bg-color2 text-font-size-15 text-center-c">57%</td>
                            <td className="bg-color2 text-font-size-15 d-hidden" />
                            <td className="text-font-size-15 text-center-c color-n text-white" rowSpan={2}>43.59</td>
                            </tr>
                            <tr>
                            <th className="bg-color2 text-font-size-15">Passives</th>
                            <td className="bg-color2 text-font-size-15 text-center-c">34</td>
                            <td className="bg-color2 text-font-size-15 text-center-c">29%</td>
                            <td className="bg-color2 text-font-size-15 d-hidden" />
                            </tr>
                            <tr>
                            <th className="bg-color2 text-font-size-15">Detractors</th>
                            <td className="bg-color2 text-font-size-15 text-center-c">16</td>
                            <td className="bg-color2 text-font-size-15 text-center-c">14%</td>
                            <td className="bg-color2 text-font-size-15 d-hidden" />
                            </tr>
                            <tr>
                            <th className="bg-color2 text-font-size-15">Total Response</th>
                            <td className="bg-color2 text-font-size-15 text-center-c">117</td>
                            <td className="bg-color2 text-font-size-15 text-center-c">100%</td>
                            <td className="bg-color2 text-font-size-15 d-hidden" />
                            <td className="text-font-size-15 text-center-c color-n d-hidden text-white" rowSpan={2}>43.59</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    {/* table 1 */}
                    <div className="table-responsive table-dta">
                        <table className="table mb-0 mt-3 customer-table">
                        <thead>
                            <tr>
                            <th colSpan={1} className="bg-color1 text-white text-center-c">Top Detractor Reasons</th>
                            <th colSpan={1} className="bg-color1 text-white text-center-c">Improvement Strategy</th>
                            <th colSpan={1} className="bg-color1 text-white text-center-c">Expected NPS <br /> Change </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th className="bg-color2 text-font-size-15">Enter reason here</th>
                            <td className="bg-color2 text-font-size-15">Enter reason here</td>
                            <td className="bg-color2 text-font-size-15 ms-text-right">+/- XX%</td>
                            </tr>
                            <tr>
                            <th className="bg-color2 text-font-size-15" />
                            <td className="bg-color2 text-font-size-15" />
                            <td className="bg-color2 text-font-size-15 ms-text-right" />
                            </tr>
                            <tr>
                            <th className="bg-color2 text-font-size-15" />
                            <td className="bg-color2 text-font-size-15" />
                            <td className="bg-color2 text-font-size-15 ms-text-right" />
                            </tr>
                            <tr>
                            <th className="bg-color2 text-font-size-15" />
                            <td className="bg-color2 text-font-size-15" />
                            <td className="bg-color2 text-font-size-15 ms-text-right" />
                            </tr>
                            <tr>
                            <th className="bg-color2 text-font-size-15" />
                            <td className="bg-color2 text-font-size-15" />
                            <td className="bg-color2 text-font-size-15 ms-text-right" />
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
