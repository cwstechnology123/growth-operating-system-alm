import React, { useState, useEffect } from 'react'

export default function CustomerAcquisitionContent() {

  return (
  <div className="content-body">
  {/* row */}
    <div className="container-fluid">
        <div className="head-title">
            <h2>Customer Acquisition</h2>	            					
        </div>
        <div className="row">
            <div className="col-xl-12 contentleft">
                <div className="card">
                    <div className="card-body pl-0">
                        <h4 style={{padding: '10px 0 10px 10px'}}>Lead Generation</h4>
                        <div className="questns table-responsive">
                            <table className="table">
                            <thead>
                                <tr className="thead-primary">
                                <th style={{width: 50}}>23</th>
                                <th colSpan={2}>How many lead generation methods do you currently use and track?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td />
                                <td>a.</td>
                                <td><input type="checkbox" name="checkbox" /> {"Don't"} know</td>
                                </tr>
                                <tr>
                                <td />
                                <td>b.</td>
                                <td><input type="checkbox" name="checkbox" /> 1-2.</td>
                                </tr>
                                <tr>
                                <td />
                                <td>c.</td>
                                <td><input type="checkbox" name="checkbox" /> 3-4.</td>
                                </tr>
                                <tr>
                                <td />
                                <td>d.</td>
                                <td><input type="checkbox" name="checkbox" /> 5-6.</td>
                                </tr>
                                <tr>
                                <td />
                                <td>e.</td>
                                <td><input type="checkbox" name="checkbox" /> 7-8.</td>
                                </tr>
                                <tr>
                                <td />
                                <td>f.</td>
                                <td><input type="checkbox" name="checkbox" /> 9 or more.</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>  
                        <div className="questns table-responsive">
                            <table className="table">
                            <thead>
                                <tr className="thead-primary">
                                <th style={{width: 50}}>24</th>
                                <th colSpan={2}>Regarding lead generation In your company, which of the following statements are {"true"}?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td colSpan={1} />
                                <td style={{width: 40}}>a.</td>
                                <td><input type="checkbox" name="checkbox" /> We understand how many leads need to be generated monthly to achieve our growth goals.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>b.</td>
                                <td><input type="checkbox" name="checkbox" /> We produce enough leads for our sales teams to be successful.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>c.</td>
                                <td><input type="checkbox" name="checkbox" /> We track how many leads are generated through both marketing, sales prospecting, and referrals.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>d.</td>
                                <td><input type="checkbox" name="checkbox" /> Management, sales, and marketing have a common definition of a qualified lead.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>e.</td>
                                <td><input type="checkbox" name="checkbox" /> We understand the journey a prospect goes through when researching our products, services, solutions, or company.</td>
                                </tr>
                            </tbody>
                            </table>
                        </div> 
                        <div className="questns table-responsive">
                            <table className="table">
                            <thead>
                                <tr className="thead-primary">
                                <th style={{width: 50}}>25</th>
                                <th colSpan={2}>How do you track the effectiveness of your lead generation efforts?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td colSpan={1} />
                                <td style={{width: 40}}>a.</td>
                                <td><input type="checkbox" name="checkbox" /> We don't; don't know.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>b.</td>
                                <td><input type="checkbox" name="checkbox" /> Informal system; no accountabilities.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>c.</td>
                                <td><input type="checkbox" name="checkbox" /> Formal system with accountabilities.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>d.</td>
                                <td><input type="checkbox" name="checkbox" /> Formal system with accountabilities; reviewed quarterly.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>d.</td>
                                <td><input type="checkbox" name="checkbox" /> Formal system with accountabilities; reviewed quarterly; continuous improvement mechanism.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>d.</td>
                                <td><input type="checkbox" name="checkbox" /> Formal system with accountabilities; reviewed quarterly; continuous improvement mechanism; working well.</td>
                                </tr>
                            </tbody>
                            </table>
                        </div> 
                        <h4 style={{padding: '10px 0 10px 10px'}}>Conversion</h4>
                        <div className="questns table-responsive">
                            <table className="table">
                            <thead>
                                <tr className="thead-primary">
                                <th style={{width: 50}}>26</th>
                                <th colSpan={2}>Do you kow the top 5 reasons why prospects don't buy from you?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td colSpan={1} />
                                <td style={{width: 40}}>a.</td>
                                <td><input type="checkbox" name="checkbox" /> No; no answer.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>b.</td>
                                <td><input type="checkbox" name="checkbox" /> Yes - we are aware of them.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>c.</td>
                                <td><input type="checkbox" name="checkbox" /> Yes - we have developed a persuasive way to overcome each of these objections or resistance points.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>d.</td>
                                <td><input type="checkbox" name="checkbox" /> Yes - our sales and customer-facing teams are trained to overcome those objections or resistance points.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>e.</td>
                                <td><input type="checkbox" name="checkbox" /> Yes - our sales and customer-facing teams are trained and consistently review overcoming those objections or resistance points.</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>                                 
                        <div className="questns table-responsive">
                            <table className="table">
                            <thead>
                                <tr className="thead-primary">
                                <th style={{width: 50}}>27</th>
                                <th colSpan={2}>What happens to the percentage of leads that {"don't"} buy from you?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td colSpan={1} />
                                <td style={{width: 40}}>a.</td>
                                <td><input type="checkbox" name="checkbox" /> Nothing; {"don't"} know.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>b.</td>
                                <td><input type="checkbox" name="checkbox" /> They are supposed to be entered into our database, but some fall through the cracks.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>c.</td>
                                <td><input type="checkbox" name="checkbox" /> Entered into our database - then nothing.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>d.</td>
                                <td><input type="checkbox" name="checkbox" /> Entered into our database - then we occasionally market to them.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>d.</td>
                                <td><input type="checkbox" name="checkbox" /> Entered into our database - then we market to them on a regular basis.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>d.</td>
                                <td>Entered into our database - and we have a marketing system specifically designed to convert unclosed leads into customers.</td>
                                </tr>
                            </tbody>
                            </table>
                        </div> 
                        <div className="questns table-responsive">
                            <table className="table">
                            <thead>
                                <tr className="thead-primary">
                                <th style={{width: 50}}>28</th>
                                <th colSpan={2}>Which of the following statements are true regarding conversion?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td colSpan={1} />
                                <td style={{width: 40}}>a.</td>
                                <td><input type="checkbox" name="checkbox" /> We track the exact number of transactions closed each month.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>b.</td>
                                <td><input type="checkbox" name="checkbox" /> We track the exact number of new customers closed each month.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>c.</td>
                                <td><input type="checkbox" name="checkbox" /> We track our closing ratio each month.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>d.</td>
                                <td><input type="checkbox" name="checkbox" /> We track our closing ration for each product and service offering.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>e.</td>
                                <td><input type="checkbox" name="checkbox" /> Our closing ratios are higher than industry averages.</td>
                                </tr>                                        
                            </tbody>
                            </table>
                        </div>                                
                        <div className="questns table-responsive">
                            <table className="table">
                            <thead>
                                <tr className="thead-primary">
                                <th style={{width: 50}}>29</th>
                                <th colSpan={2}>Which of the following tools do you use to increase your conversion rates?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td colSpan={1} />
                                <td style={{width: 40}}>a.</td>
                                <td><input type="checkbox" name="checkbox" /> An effective system for qualifying leads.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>b.</td>
                                <td><input type="checkbox" name="checkbox" /> An effective system to follow up on leads.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>c.</td>
                                <td><input type="checkbox" name="checkbox" /> We use CRM software to track progress through the sales funnel.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>d.</td>
                                <td><input type="checkbox" name="checkbox" /> A well-differentiated value proposition.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>e.</td>
                                <td><input type="checkbox" name="checkbox" /> Testimonials, case studies, customer success stories, and customer lists.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>f.</td>
                                <td><input type="checkbox" name="checkbox" /> Guarantees of quality, performance, and outcomes.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>g.</td>
                                <td><input type="checkbox" name="checkbox" /> Bonuses and incentives to purchase immediately.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>h.</td>
                                <td><input type="checkbox" name="checkbox" /> ROI calculators or calculations.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>i.</td>
                                <td><input type="checkbox" name="checkbox" /> Sales training to improve closing ratios.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>j.</td>
                                <td><input type="checkbox" name="checkbox" /> We share closing best practices among sales teams.</td>
                                </tr>
                            </tbody>
                            </table>
                        </div> 
                        <div className="questns table-responsive">
                            <table className="table">
                            <thead>
                                <tr className="thead-primary">
                                <th style={{width: 50}}>30</th>
                                <th colSpan={2}>How do you track the effectiveness of your conversion efforts?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td colSpan={1} />
                                <td style={{width: 40}}>a.</td>
                                <td><input type="checkbox" name="checkbox" /> inWe don't; don't know.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>b.</td>
                                <td><input type="checkbox" name="checkbox" /> inInformal system; no accountabilities.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>c.</td>
                                <td><input type="checkbox" name="checkbox" /> inFormal system with accountabilities.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>d.</td>
                                <td><input type="checkbox" name="checkbox" /> inFormal system with accountabilities; reviewed quarterly.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>e.</td>
                                <td><input type="checkbox" name="checkbox" /> inFormal system with accountabilities; reviewed quarterly; continuous improvement mechanism.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>f.</td>
                                <td><input type="checkbox" name="checkbox" /> ormal system with accountabilities; reviewed quarterly; continuous improvement mechanism; working well.</td>
                                </tr>
                            </tbody>
                            </table>
                        </div> 
                        <h4 style={{padding: '10px 0px 10px 10px'}}>Referrals</h4>
                        <div className="questns table-responsive">
                            <table className="table">
                            <thead>
                                <tr className="thead-primary">
                                <th style={{width: 50}}>31</th>
                                <th colSpan={2}>How many referrals did you generate last year?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td colSpan={1} />
                                <td style={{width: 40}}>a.</td>
                                <td><input type="checkbox" name="checkbox" /> {"Don't"} know.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>b.</td>
                                <td><input type="checkbox" name="checkbox" /> No tracking system; we can guess.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>c.</td>
                                <td><input type="checkbox" name="checkbox" /> No tracking system; we can make a good estimate.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>d.</td>
                                <td><input type="checkbox" name="checkbox" /> We track referrals and know the exact number.</td>
                                </tr>                                         
                            </tbody>
                            </table>
                        </div> 
                        <div className="questns table-responsive">
                            <table className="table">
                            <thead>
                                <tr className="thead-primary">
                                <th style={{width: 50}}>32</th>
                                <th colSpan={2}>Which of the following statements are {"true"} regarding referral generation In your organization?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td colSpan={1} />
                                <td style={{width: 40}}>a.</td>
                                <td><input type="checkbox" name="checkbox" /> Our products and services are of excellent quality and generate referrals regularly.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>b.</td>
                                <td><input type="checkbox" name="checkbox" /> Our customer service is excellent and generates referrals regularly.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>c.</td>
                                <td><input type="checkbox" name="checkbox" /> We have a system In place to follow up with referrals.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>d.</td>
                                <td><input type="checkbox" name="checkbox" /> Our sales reps follow up with referrals; includes tracking and accountabilities.</td>
                                </tr>  
                                <tr>
                                <td />
                                <td style={{width: 40}}>e.</td>
                                <td><input type="checkbox" name="checkbox" /> We have a system In place to reward people for their referrals.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>f.</td>
                                <td><input type="checkbox" name="checkbox" /> At least 25% of your business currently comes from referrals.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>g.</td>
                                <td><input type="checkbox" name="checkbox" /> We believe the number of referrals we get each year is increasing.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>h.</td>
                                <td><input type="checkbox" name="checkbox" /> We know the number of referrals we get each year is {'increasing'} (tracking).</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>i.</td>
                                <td><input type="checkbox" name="checkbox" /> We know the signs that a customer may become a referral source or customer advocate.</td>
                                </tr>
                                <tr>
                                <td />
                                <td style={{width: 40}}>j.</td>
                                <td><input type="checkbox" name="checkbox" /> We provide tools to our customers to make it easy for them to refer others to us.</td>
                                </tr>                                          
                            </tbody>
                            </table>
                        </div> 
                        <div className="questns table-responsive">
                            <table className="table">
                                <thead>
                                    <tr className="thead-primary">
                                    <th style={{width: 50}}>33</th>
                                    <th colSpan={2}>Do you have a system in place to proactively generate and track referrals?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td colSpan={1} />
                                    <td style={{width: 40}}>a.</td>
                                    <td><input type="checkbox" name="checkbox" /> No; {"don't"} know.</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>b.</td>
                                    <td><input type="checkbox" name="checkbox" /> Yes - informal Process; {"don't"} track results.</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>c.</td>
                                    <td><input type="checkbox" name="checkbox" /> Yes - formal referral system; no accountabilities.</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>d.</td>
                                    <td><input type="checkbox" name="checkbox" /> Yes - formal referral system with accountabilities; reviewed quarterly.</td>
                                    </tr>  
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>e.</td>
                                    <td><input type="checkbox" name="checkbox" /> Yes - formal referral system with accountabilities; reviewed quarterly; continuous improvement mechanism.</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>f.</td>
                                    <td><input type="checkbox" name="checkbox" /> Yes - formal referral system with accountabilities; reviewed quarterly; continuous improvement mechanism; working well.</td>
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
