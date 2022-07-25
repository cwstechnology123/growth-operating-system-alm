import React from 'react'

export default function InnovationConceptDevelopmentContent() {
  return (
    <div className="content-body">
        {/* row */}
       <div className="container-fluid">
            <div className="head-title">
                <p className="mb-0">Innovation</p>
                <h2 className="mb-0 mt-0">Outcome Driven Innovation</h2>
                <p className="mb-5">Outcome Driven Innovation is a strategy for creating an innovation centered around fulfilling a customer need. The success of the innovation is dictated by customer-defined metrics and therefore it becomes critical to understand how the client measures value. Once this information is understood, the research, marketing, development etc. of the product or service can all be aligned with generating this value. Companies use outcome driven innovation to discover hidden segments of the market, increase market share, deliver a product message that resonates with customer, and improve the customer experience. </p>
            </div>
            <div className="card">
                <div className="card-body pl-0">
                <div className="table-responsive table-dta">
                    <table className="table mb-0">
                    <thead>
                        <tr>
                        <th className="width-5 bg-color5 text-center-c">
                            <div className="od-innovations">
                            <img src="images/outcome-driven/steps.png" className="img-fluid" alt="steps" />
                            </div>
                        </th>
                        <th className="bg-color1 text-white">
                            <div className="steps-title">Steps</div>
                        </th>
                        <th className="width-20 bg-color1 text-center-c text-white">
                            <div className="define-the-marketing">1</div>
                        </th>
                        <th className="width-20 bg-color1 text-center-c text-white">
                            <div className="define-the-marketing">2</div>
                        </th>
                        <th className="width-20 bg-color1 text-center-c text-white">
                            <div className="define-the-marketing">3</div>
                        </th>
                        <th className="width-20 bg-color1 text-center-c text-white">
                            <div className="define-the-marketing">4</div>
                        </th>
                        <th className="width-20 bg-color1 text-center-c text-white">
                            <div className="define-the-marketing">5</div>
                        </th>
                        <th className="width-20 bg-color1 text-center-c text-white">
                            <div className="define-the-marketing">6</div>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="width-5 bg-color5 text-center-c">
                            <div>
                            <img src="images/outcome-driven/action.png" className="img-fluid" alt="action" />
                            </div>
                        </td>
                        <td className="bg-color1 text-white">Actions</td>
                        <td className="bg-color3 text-white ">Define the market and job-to-be done.</td>
                        <td className="bg-color3 text-white ">Uncover cusomers' problems and needs.</td>
                        <td className="bg-color3 text-white ">Quantify degree to which each job is fulfilled.</td>
                        <td className="bg-color3 text-white ">Discover hidden segments of opportunity.</td>
                        <td className="bg-color3 text-white ">Align existing products with market opportunities.</td>
                        <td className="bg-color3 text-white ">Brainstorm new products to meet unfulfilled needs.</td>
                        </tr>
                        <tr>
                        <td className="width-5 bg-color5 text-center-c">
                            <div>
                            <img src="images/outcome-driven/guidance.png" className="img-fluid" alt="guidance" />
                            </div>
                        </td>
                        <td className="bg-color1 text-white">Guidance</td>
                        <td className="bg-color2">List what customers want to get done (their job).</td>
                        <td className="guidance">List related performance metric(s) for the jobs.</td>
                        <td className="guidance">Score how well job need is addressed today (1-10).</td>
                        <td className="guidance">List market clusters (segments of customers).</td>
                        <td className="guidance">What needs to change?</td>
                        <td className="guidance">What new products or services can be offered?</td>
                        </tr>
                        <tr className="height-set-this-td">
                        <td className="width-5 bg-color5 text-center-c" rowSpan={5}>
                            <div>
                            <img src="images/outcome-driven/items.png" className="img-fluid" alt="guidance" />
                            </div>
                        </td>
                        <td className="bg-color1 text-white text-center-c" rowSpan={5}>Items</td>
                        <td className="bg-color2" rowSpan={5} />
                        <td className="guidance" rowSpan={5} />
                        <td className="guidance" rowSpan={5} />
                        <td className="guidance" rowSpan={5} />
                        <td className="guidance" rowSpan={5} />
                        <td className="guidance" rowSpan={5} />
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
