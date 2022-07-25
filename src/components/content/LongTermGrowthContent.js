import React, { useState, useEffect } from 'react'


export default function LongTermGrowthContent() {

  return (
      <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <h2>Long-Term Growth</h2>	            					
            </div>
            <div className="row">
                <div className="col-xl-12 contentleft">
                    <div className="card">
                        <div className="card-body pl-0">
                            <h4 style={{padding: '10px 0 10px 10px'}}>Strategic Value - Competitive Advantage</h4>
                            <div className="questns table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr className="thead-primary">
                                        <th style={{width: 50}}>xx</th>
                                        <th colSpan={2}>Points pulled from question 5 under Value Creation & Delivery</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td />
                                        <td></td>
                                        <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>  
                            <h4 style={{padding: '10px 0 10px 10px'}}>Strategic Value - Intellectual Property</h4>
                            <div className="questns table-responsive">
                                <table className="table">
                                <thead>
                                    <tr className="thead-primary">
                                    <th style={{width: 50}}>61</th>
                                    <th colSpan={2}>Have you developed intellectual property {'in'} the form of innovative products or services, or proprietary system or processes?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td colSpan={1} />
                                    <td style={{width: 40}}>a.</td>
                                    <td>No; don't know</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>b.</td>
                                    <td>Yes - not trademarked or patented.</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>c.</td>
                                    <td>Yes - and it's trademarked/patented.</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>d.</td>
                                    <td>Yes - trademarked/patented, somewhat unique.</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>e.</td>
                                    <td>Yes - and it's trademarked/patented, and unique enough that no competitor can duplicate it in the next few years.</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div> 
                            <h4 style={{padding: '10px 0 10px 10px'}}>Strategic Value - New Business Optionality</h4>
                            <div className="questns table-responsive">
                                <table className="table">
                                <thead>
                                    <tr className="thead-primary">
                                    <th style={{width: 50}}>62</th>
                                    <th colSpan={2}>Is your company positioned in a way that it would be easy to launch a new business or business segment effectively, allowing you to {<br/>} expand your product and service offerings?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td colSpan={1} />
                                    <td style={{width: 40}}>a.</td>
                                    <td><input type="checkbox" name="checkbox" /> No; {"don't"} know</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>b.</td>
                                    <td><input type="checkbox" name="checkbox" /> Yes - I believe so; no evidence</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>c.</td>
                                    <td><input type="checkbox" name="checkbox" /> Yes - strong supporting evidence</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>d.</td>
                                    <td><input type="checkbox" name="checkbox" /> Yes - strong supporting evidence; have had strategic partners approach us about this</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div> 
                            <h4 style={{padding: '10px 0 10px 10px'}}>Growth Platform - Growth Rate</h4>
                            <div className="questns table-responsive">
                                <table className="table">
                                <thead>
                                    <tr className="thead-primary">
                                    <th style={{width: 50}}>63</th>
                                    <th colSpan={2}>What has been your growth rate for each of the past three years?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td colSpan={1} />
                                    <td style={{width: 40}}>a.</td>
                                    <td><input type="checkbox" name="checkbox" /> No growth; decline in growth; {"don't"} know</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>b.</td>
                                    <td><input type="checkbox" name="checkbox" /> Slow growth; same as the {'economy'} (typically below 4%)</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>c.</td>
                                    <td><input type="checkbox" name="checkbox" /> Moderate growth; better than {'economy'} (typically 5%-6%)</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>d.</td>
                                    <td><input type="checkbox" name="checkbox" /> Inconsistent but good growth; fluctuating between 7-10%</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>e.</td>
                                    <td><input type="checkbox" name="checkbox" /> Fast growth; 11-20% each year</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>f.</td>
                                    <td><input type="checkbox" name="checkbox" /> Very fast growth; 20%+ each year</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            <div className="questns table-responsive">
                                <table className="table">
                                <thead>
                                    <tr className="thead-primary">
                                    <th style={{width: 50}}>64</th>
                                    <th colSpan={2}>Over the past three years, has your growth rate been slower, the same, or faster than your main competitors?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td colSpan={1} />
                                    <td style={{width: 40}}>a.</td>
                                    <td><input type="checkbox" name="checkbox" /> No; {"don't"} know</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>b.</td>
                                    <td><input type="checkbox" name="checkbox" /> Slower than our competitors and market</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>c.</td>
                                    <td><input type="checkbox" name="checkbox" /> Same speed as our market, but slower than our main competitors</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>d.</td>
                                    <td><input type="checkbox" name="checkbox" /> Same speed as the market and our main competitors</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>e.</td>
                                    <td><input type="checkbox" name="checkbox" /> A little faster than our market and competitors</td>
                                    </tr>
                                    <tr>
                                    <td />
                                    <td style={{width: 40}}>f.</td>
                                    <td><input type="checkbox" name="checkbox" /> Significantly faster than our market and competitors</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div> 
                            <h4 style={{padding: '10px 0 10px 10px'}}>Growth Platform - Gross Margins</h4>
                            <div className="questns table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr className="thead-primary">
                                        <th style={{width: 50}}>65</th>
                                        <th colSpan={2}>How does your profit margin compare to industry averages?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td colSpan={1} />
                                        <td style={{width: 40}}>a.</td>
                                        <td><input type="checkbox" name="checkbox" /> {"Don't"} know</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>b.</td>
                                        <td><input type="checkbox" name="checkbox" /> Lower than average</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>c.</td>
                                        <td><input type="checkbox" name="checkbox" /> Same</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>d.</td>
                                        <td><input type="checkbox" name="checkbox" /> Higher than averages</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>e.</td>
                                        <td><input type="checkbox" name="checkbox" /> Significantly higher than average</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>  
                            <h4 style={{padding: '10px 0 10px 10px'}}>Growth Platform - Scalability</h4>
                            <div className="questns table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr className="thead-primary">
                                        <th style={{width: 50}}>66</th>
                                        <th colSpan={2}>Is your business easily scaled so higher revenues create higher profit (marginal profitability calculation)? {<br />} Use a Likert Scale of 1-5 (1=not at all scalable; 5=very scalable)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td colSpan={1} />
                                        <td style={{width: 40}}>a.</td>
                                        <td><input type="checkbox" name="checkbox" /> 1 - Not at all scalable</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>b.</td>
                                        <td><input type="checkbox" name="checkbox" /> 2</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>c.</td>
                                        <td><input type="checkbox" name="checkbox" /> 3</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>d.</td>
                                        <td><input type="checkbox" name="checkbox" /> 4</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>e.</td>
                                        <td><input type="checkbox" name="checkbox" /> 5 - Yes, very scalable</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h4 style={{padding: '10px 0 10px 10px'}}>Customers - Customer Base</h4>
                            <div className="questns table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr className="thead-primary">
                                        <th style={{width: 50}}>67</th>
                                        <th colSpan={2}>How large is your customer base in comparison to the three biggest competitors in your industry?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td colSpan={1} />
                                        <td style={{width: 40}}>a.</td>
                                        <td><input type="checkbox" name="checkbox" /> {"Don't"} know</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>b.</td>
                                        <td><input type="checkbox" name="checkbox" /> Significantly smaller</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>c.</td>
                                        <td><input type="checkbox" name="checkbox" /> Smaller</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>d.</td>
                                        <td><input type="checkbox" name="checkbox" /> Similar</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>e.</td>
                                        <td><input type="checkbox" name="checkbox" /> Larger</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>f.</td>
                                        <td><input type="checkbox" name="checkbox" /> Significantly larger</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>  
                            <h4 style={{padding: '10px 0 10px 10px'}}>Customers - Customer Retention</h4>
                            <div className="questns table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr className="thead-primary">
                                        <th style={{width: 50}}>68</th>
                                        <th colSpan={2}>Is your customer attrition rate lower than industry averages?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td colSpan={1} />
                                        <td style={{width: 40}}>a.</td>
                                        <td><input type="checkbox" name="checkbox" /> {"Don't"} know</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>b.</td>
                                        <td><input type="checkbox" name="checkbox" /> Higher than average</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>c.</td>
                                        <td><input type="checkbox" name="checkbox" /> Same as average</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>d.</td>
                                        <td><input type="checkbox" name="checkbox" /> Lower than average</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>e.</td>
                                        <td><input type="checkbox" name="checkbox" /> Significantly lower than average</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> 
                            <div className="questns table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr className="thead-primary">
                                        <th style={{width: 50}}>69</th>
                                        <th colSpan={2}>How difficult is it for your customers to leave you for one of your competitors?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td colSpan={1} />
                                        <td style={{width: 40}}>a.</td>
                                        <td><input type="checkbox" name="checkbox" /> {"Don't"} know</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>b.</td>
                                        <td><input type="checkbox" name="checkbox" /> Easy</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>c.</td>
                                        <td><input type="checkbox" name="checkbox" /> Difficult</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>d.</td>
                                        <td><input type="checkbox" name="checkbox" /> Very difficult</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h4 style={{padding: '10px 0 10px 10px'}}>Customers - Customer Responsiveness</h4>
                            <div className="questns table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr className="thead-primary">
                                        <th style={{width: 50}}>70</th>
                                        <th colSpan={2}>Do you have a well-developed back end?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td colSpan={1} />
                                        <td style={{width: 40}}>a.</td>
                                        <td><input type="checkbox" name="checkbox" /> No; {"Don't"} know</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>b.</td>
                                        <td><input type="checkbox" name="checkbox" /> Yes - well-developed; no system to promote back end</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>c.</td>
                                        <td><input type="checkbox" name="checkbox" /> Yes - very well-developed; systematically lead customers and prospects through your entire product offering</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> 
                            <div className="questns table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr className="thead-primary">
                                        <th style={{width: 50}}>71</th>
                                        <th colSpan={2}>How does your Customer Lifetime Value compare to industry averages?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td colSpan={1} />
                                        <td style={{width: 40}}>a.</td>
                                        <td><input type="checkbox" name="checkbox" /> {"Don't"} know</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>b.</td>
                                        <td><input type="checkbox" name="checkbox" /> Lower than average</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>c.</td>
                                        <td><input type="checkbox" name="checkbox" /> Similar</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>d.</td>
                                        <td><input type="checkbox" name="checkbox" /> Higher than average</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>e.</td>
                                        <td><input type="checkbox" name="checkbox" /> Significantly higher than average</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> 
                            <h4 style={{padding: '10px 0 10px 10px'}}>Operations - Resilience</h4>
                            <div className="questns table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr className="thead-primary">
                                        <th style={{width: 50}}>72</th>
                                        <th colSpan={2}>Are you dependent on a small number of large accounts for your sales revenue?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td colSpan={1} />
                                        <td style={{width: 40}}>a.</td>
                                        <td><input type="checkbox" name="checkbox" /> Yes; {"don't"} know</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>b.</td>
                                        <td><input type="checkbox" name="checkbox" /> No - our accounts and sales revenue are moderately diversified</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>c.</td>
                                        <td><input type="checkbox" name="checkbox" /> No - our accounts and sales revenue are well diversified</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="questns table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr className="thead-primary">
                                        <th style={{width: 50}}>73</th>
                                        <th colSpan={2}>Do you have a predictable business model making it easy to predict future cash flows?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td colSpan={1} />
                                        <td style={{width: 40}}>a.</td>
                                        <td><input type="checkbox" name="checkbox" /> No; {"don't"} know</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>b.</td>
                                        <td><input type="checkbox" name="checkbox" /> Yes - our business model and cash flow is moderately predictable</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>c.</td>
                                        <td><input type="checkbox" name="checkbox" /> Yes - our business model and cash flow is highly predictable</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="questns table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr className="thead-primary">
                                        <th style={{width: 50}}>74</th>
                                        <th colSpan={2}>Do you have a good management team below the owner, and are they planning on sticking around a while?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td colSpan={1} />
                                        <td style={{width: 40}}>a.</td>
                                        <td><input type="checkbox" name="checkbox" /> No; {"don't"} know</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>b.</td>
                                        <td><input type="checkbox" name="checkbox" /> Average; {"it's"} hard to tell… people move around a lot in our industry</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>c.</td>
                                        <td><input type="checkbox" name="checkbox" /> Good; moderately certain they will stick around</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>d.</td>
                                        <td><input type="checkbox" name="checkbox" /> Good; very certain they will stick around</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> 
                            <h4 style={{padding: '10px 0 10px 10px'}}>Operations - Marketing Processes</h4>
                            <div className="questns table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr className="thead-primary">
                                        <th style={{width: 50}}>75</th>
                                        <th colSpan={2}>Do you have multiple working systems and playbooks for customer generation?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td colSpan={1} />
                                        <td style={{width: 40}}>a.</td>
                                        <td><input type="checkbox" name="checkbox" /> No; {"don't"} know</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>b.</td>
                                        <td><input type="checkbox" name="checkbox" /> Single, moderately effective system; no playbooks</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>c.</td>
                                        <td><input type="checkbox" name="checkbox" /> Several moderately effective systems; no playbooks</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>d.</td>
                                        <td><input type="checkbox" name="checkbox" /> Multiple effective systems; no playbooks</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>e.</td>
                                        <td><input type="checkbox" name="checkbox" /> Multiple proven and repeatable systems with playbooks</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="questns table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr className="thead-primary">
                                        <th style={{width: 50}}>76</th>
                                        <th colSpan={2}>Do you have multiople working systems and playbooks for customer retention?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td colSpan={1} />
                                        <td style={{width: 40}}>a.</td>
                                        <td><input type="checkbox" name="checkbox" /> No; {"don't"} know</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>b.</td>
                                        <td><input type="checkbox" name="checkbox" /> Single, moderately effective system; no playbooks</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>c.</td>
                                        <td><input type="checkbox" name="checkbox" /> Several moderately effective systems; no playbooks</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>d.</td>
                                        <td><input type="checkbox" name="checkbox" /> Multiple effective systems; no playbooks</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>e.</td>
                                        <td><input type="checkbox" name="checkbox" /> Multiple proven and repeatable systems with playbooks</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h4 style={{padding: '10px 0 10px 10px'}}>Operations - Systemization</h4>
                            <div className="questns table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr className="thead-primary">
                                        <th style={{width: 50}}>77</th>
                                        <th colSpan={2}>Do you have operating procedures for all critical process that are systematized, optimized, and documented?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td colSpan={1} />
                                        <td style={{width: 40}}>a.</td>
                                        <td><input type="checkbox" name="checkbox" /> No; {"don't"} know</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>b.</td>
                                        <td><input type="checkbox" name="checkbox" /> Yes - systematized, but not optimized or documented</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>c.</td>
                                        <td><input type="checkbox" name="checkbox" /> Yes - systematized and optimized</td>
                                        </tr>
                                        <tr>
                                        <td />
                                        <td style={{width: 40}}>d.</td>
                                        <td><input type="checkbox" name="checkbox" /> Yes - systematized, optimized, and documented</td>
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
