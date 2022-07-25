import React from 'react'

export default function VoiceOfTheCustomerTableContent() {
  return (
    <div className="content-body">
        {/* row */}
       <div className="container-fluid">
            <div className="head-title">
                <p className="mb-0"> Customer Retention, Loyalty &amp; Experience</p>
                <h2 className="mb-1"> Voice of the Customer Table </h2>
                <ul className="list-unstyled">
                <li className="net-page-lit mb-2">
                    The Voice of the Customer Table is a template which helps business leaders and managers frame the inputs received through the process of carrying out a Voice of the Customer (VOC) exercise.   
                </li>
                <li className="net-page-lit mb-2">
                    Data can be gathered as part of a Voice of the Customer exercise in a variety of ways, including through the conducting of surveys and focus groups. These methods can be helpful in validating what an organization already believes to be true. Other methodologies include the Gemba Walk, a visit to listen to and observe actual customers while they are using a product or service to determine what they are doing (or not doing). 
                </li>
                <li className="net-page-lit mb-5">
                    Customers usually don’t explain their needs clearly or articulately, and business leaders and product designers are left to pick up the pieces to understand what the customer really values. That’s where the Voice of the Customer Table comes in. Once business leaders have gathered enough data and prioritized the needs of their customers, they can work to identify product features that will have the greatest impact for those customers.   
                </li>
                </ul>
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
                            <th colSpan={1} className="bg-color1 text-white">Customer Profile:</th>
                            <th colSpan={2} className="bg-color2 text-white padding-0">
                                <form className="values-form-deve" method>
                                <input type="text" name="Search" placeholder="Option" style={{borderRadius: 0}} />
                                </form>
                            </th>
                            </tr>
                        </thead>
                        </table>
                    </div>
                    {/* table 2 */}
                    <div className="table-responsive table-dta">
                        <table className="table mb-0 customer-table">
                        <thead>
                            <tr>
                            <th colSpan={1} className="bg-color1 text-white padding-10">
                                <div className="voice-of-the-main-div">
                                <div className="situation-title">Situation</div>
                                <img src="images/voice-of-the-customer/situation.png" className="img-fluid" alt="situation" />
                                </div>
                            </th>
                            <th colSpan={1} className="bg-color1 text-white padding-10">
                                <div className="voice-of-the-main-div">
                                <div className="situation-title">Voice of Customer (VOC)</div>
                                <img src="images/voice-of-the-customer/voice.png" className="img-fluid" alt="voice" />
                                </div>
                            </th>
                            <th colSpan={1} className="bg-color1 text-white padding-10">
                                <div className="voice-of-the-main-div">
                                <div className="situation-title">Restated as Customer Need</div>
                                <img src="images/voice-of-the-customer/customer.png" className="img-fluid" alt="customer" />
                                </div>
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="bg-color3 text-white">What is the current issue?</td>
                            <td className="bg-color3 text-white">What is the stated problem or question?</td>
                            <td className="bg-color3 text-white">What is the underlying customer needed?</td>
                            </tr>
                            <tr>
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            </tr>
                            <tr>
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            </tr>
                            <tr>
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            </tr>
                            <tr>
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            </tr>
                            <tr>
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            </tr>
                            <tr>
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    {/* table 3 */}
                    <div className="table-responsive table-dta">
                        <table className="table mb-0 mt-4 customer-table">
                        <thead>
                            <tr>
                            <th colSpan={1} className="bg-color3 text-white padding-10">
                                <div className="voice-of-the-main-div">
                                <div className="situation-title">Implications &amp; Opportunities</div>
                                </div>
                            </th>
                            <th colSpan={1} className="bg-color3 text-white padding-10">
                                <div className="voice-of-the-main-div">
                                <div className="situation-title">Implications &amp; Opportunities</div>
                                </div>
                            </th>
                            <th colSpan={1} className="bg-color3 text-white padding-10">
                                <div className="voice-of-the-main-div">
                                <div className="situation-title">Implications &amp; Opportunities</div>
                                </div>
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            </tr>
                            <tr>
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            </tr>
                            <tr>
                            <td className="bg-color2" />
                            <td className="bg-color2" />
                            <td className="bg-color2" />
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
