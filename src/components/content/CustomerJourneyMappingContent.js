import React from 'react'

export default function CustomerRetentionloopContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <p className="mb-0"> Customer Retention, Loyalty &amp; Experience</p>
                <h2 className="mb-1"> Customer Journey Mapping </h2>
                <p className="mb-5">
                Customer Journey Mapping is the process of illustrating a customer’s experience with your company or a product, from the very first touch point to becoming a loyal customer. Customer Journey Maps are based on a particular customer persona, with a defined set of attributes, motivations, and emotions. The map is used to identify potential challenges the customer faces as they interact with the company through the different stages of product research, comparison, selection, and renewal. This can reveal opportunities to better serve the customer, which in turn can increase sales and loyalty.
                </p>
            </div>
            <div className="row">
                <div className="col-xl-12 contentleft">
                <div className="card">
                    <div className="card-body pl-0">
                    {/* table 1 */}
                    <div className="table-responsive table-dta">
                        <table className="table mb-4 customer-table">
                        <thead>
                            <tr>
                            <th colSpan={1} className="bg-color1 text-white">Customer:</th>
                            <th colSpan={2} className="bg-color2 text-white padding-0">
                                <form className="values-form-deve customer-journey-int-ot" method>
                                <input type="text" name="Search" placeholder="Option" />
                                </form>
                            </th>
                            <th colSpan={1} className="bg-color1 text-white d-hidden" />
                            <th colSpan={1} className="bg-color1 text-white">Goals:</th>
                            <th colSpan={3} className="bg-color2 padding-0">
                                <form className="values-form-deve customer-journey-int-ot" method>
                                <input type="text" name="Search" placeholder="Option" />
                                </form>
                            </th>
                            </tr>
                        </thead>
                        </table>
                    </div>
                    {/* table 1 */}
                    <div className="table-responsive table-dta">
                        <table className="table mb-0 customer-table">
                        <thead>
                            <tr>
                            <th colSpan={1} className="bg-color3 text-white d-hidden">Stage 1</th>
                            <th colSpan={1} className="bg-color3 text-white">Stage 1</th>
                            <th colSpan={1} className="bg-color3 text-white">Stage 2</th>
                            <th colSpan={1} className="bg-color3 text-white">Stage 3</th>
                            <th colSpan={1} className="bg-color3 text-white">Stage 4</th>
                            <th colSpan={1} className="bg-color3 text-white">Stage 5</th>
                            <th colSpan={1} className="bg-color3 text-white">Stage 6</th>
                            </tr>
                            <tr>
                            <th className="bg-color1 text-white cs-font-size d-hidden">Description of Stage</th>
                            <th className="bg-color1 text-white cs-font-size">Description of Stage</th>
                            <th className="bg-color1 text-white cs-font-size">Description of Stage</th>
                            <th className="bg-color1 text-white cs-font-size">Description of Stage</th>
                            <th className="bg-color1 text-white cs-font-size">Description of Stage</th>
                            <th className="bg-color1 text-white cs-font-size">Description of Stage</th>
                            <th className="bg-color1 text-white cs-font-size">Description of Stage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th className="bg-color1 text-white" rowSpan={3}>
                                <div className="customer-journey">
                                <img src="images/customer-journey/touchpoint.png" className="img-fluid" alt="touchpoint" />
                                <div className="touchpoint-title">
                                    Description of Stage
                                </div>
                                </div>
                            </th>
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            </tr>
                            <tr>
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            </tr>
                            <tr>
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            </tr>
                            <tr>
                            <th className="bg-color1 text-white" rowSpan={3}>
                                <div className="customer-journey">
                                <img src="images/customer-journey/thinking.png" className="img-fluid" alt="thinking" />
                                <div className="touchpoint-title">
                                    Thinking
                                </div>
                                </div>
                            </th>
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            </tr>
                            <tr>
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            </tr>
                            <tr>
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            </tr>
                            <tr>
                            <th className="bg-color1 text-white" rowSpan={3}>
                                <div className="customer-journey">
                                <img src="images/customer-journey/feeling.png" className="img-fluid" alt="feeling" />
                                <div className="touchpoint-title">
                                    Feeling
                                </div>
                                </div>
                            </th>
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            </tr>
                            <tr>
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            </tr>
                            <tr>
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            </tr>
                            <tr>
                            <th className="bg-color1 text-white" rowSpan={3}>
                                <div className="customer-journey">
                                <img src="images/customer-journey/opportunity.png" className="img-fluid" alt="opportunity" />
                                <div className="touchpoint-title">
                                    Opportunity
                                </div>
                                </div>
                            </th>
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            </tr>
                            <tr>
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            </tr>
                            <tr>
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
                            <td className="bg-color3" />
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
