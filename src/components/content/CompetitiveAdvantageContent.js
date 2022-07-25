import React, { useState, useEffect } from 'react'

export default function CompetitiveAdvantageContent() {

  return (
  <div className="content-body">
  {/* row */}
  <div className="container-fluid">
    <div className="head-title">
        <h2>Create Competitive Advantage</h2>	            					
    </div>
    <div className="row">
        <div className="col-xl-12 contentleft">
        <div className="card">
            <div className="card-body pl-0">
            <h4 style={{padding: '10px 0 10px 10px'}}>Markets &amp; Customers </h4>
            <div className="questns table-responsive">
                <table className="table">
                <thead>
                    <tr className="thead-primary">
                    <th style={{width: 50}}>1</th>
                    <th colSpan={2}>Do you Know exactly where your Business is comming from?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td />
                    <td>a.</td>
                    <td><input type="checkbox" name="" /> No: no Answer</td>
                    </tr>
                    <tr>
                    <td />
                    <td>b.</td>
                    <td><input type="checkbox" name="" /> We Occasionally collect this information; no system or accountabilities.</td>
                    </tr>
                    <tr>
                    <td />
                    <td>c.</td>
                    <td><input type="checkbox" name="" /> Informal system to collect this data; no accountabilities.</td>
                    </tr>
                    <tr>
                    <td />
                    <td>d.</td>
                    <td><input type="checkbox" name="" /> Informal system to collect this data; with accountabilities.</td>
                    </tr>
                    <tr>
                    <td />
                    <td>e.</td>
                    <td><input type="checkbox" name="" /> Informal system with accountabilities: working well; activily marketing to get more customers from these sources.</td>
                    </tr>
                </tbody>
                </table>
            </div>  
            <div className="questns table-responsive">
                <table className="table">
                <thead>
                    <tr className="thead-primary">
                    <th style={{width: 50}}>2</th>
                    <th colSpan={2}>Do you Know exactly where your Biggest customer growth opportunitie lie?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td colSpan={1} />
                    <td style={{width: 40}}>a.</td>
                    <td><input type="checkbox" name="" /> No: no Answer</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>b.</td>
                    <td><input type="checkbox" name="" /> We think we do, but we’re not certain</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>c.</td>
                    <td><input type="checkbox" name="" /> Yes - but we don{"'"}t have a plan to reach them.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>d.</td>
                    <td><input type="checkbox" name="" /> Yes - have a plan to reach it; not getting the results we want.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>e.</td>
                    <td><input type="checkbox" name="" /> Yes - have a plan to reach it; working well.</td>
                    </tr>
                </tbody>
                </table>
            </div> 
            <div className="questns table-responsive">
                <table className="table">
                <thead>
                    <tr className="thead-primary">
                    <th style={{width: 50}}>3</th>
                    <th colSpan={2}>What Do you Know About your target market and buyers?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td colSpan={1} />
                    <td style={{width: 40}}>a.</td>
                    <td><input type="checkbox" name="" /> We understand the size and growth rate for each addressable market.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>b.</td>
                    <td><input type="checkbox" name="" /> We have identified exact companies and contact we should market to.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>c.</td>
                    <td><input type="checkbox" name="" /> We have identified potential major accounts within these markets.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>d.</td>
                    <td><input type="checkbox" name="" /> We clearly understand the reasons why they buy and don't buy from us.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>e.</td>
                    <td><input type="checkbox" name="" /> We are actively marketing and selling to each of these target markets.</td>
                    </tr>
                </tbody>
                </table>
            </div> 
            <div className="questns table-responsive">
                <table className="table">
                <thead>
                    <tr className="thead-primary">
                    <th style={{width: 50}}>4</th>
                    <th colSpan={2}>What do you know about your "tier 1" customers - the 20% of your customers that create 80% of your sales?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td colSpan={1} />
                    <td style={{width: 40}}>a.</td>
                    <td><input type="checkbox" name="" /> The number of Tier 1 customers we have; sales and profit they generate; this information is updated and reviewed quarterly.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>b.</td>
                    <td><input type="checkbox" name="" /> We understand the commonalities of our Tier 1 customers and use this information to identify and approach more customers like them.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>c.</td>
                    <td><input type="checkbox" name="" /> We have a formal system with accountabilities to target and win more Tier 1 customers.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>d.</td>
                    <td><input type="checkbox" name="" /> We provide training to our sales and marketing staff on how to identify and communicate specifically with Tier 1 customers.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>e.</td>
                    <td><input type="checkbox" name="" /> We have a formal system with accountabilities to move high-potential Tier 1 customers up to Tier 1 status.</td>
                    </tr>
                </tbody>
                </table>
            </div> 
            <h4 style={{padding: '10px 0 10px 10px'}}>Value Creation Delivery</h4>
            <div className="questns table-responsive">
                <table className="table">
                <thead>
                    <tr className="thead-primary">
                    <th style={{width: 50}}>5</th>
                    <th colSpan={2}>Do you have any unique advantages over competitors in your marketplace?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td colSpan={1} />
                    <td style={{width: 40}}>a.</td>
                    <td><input type="checkbox" name="" /> No; don’t know </td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>b.</td>
                    <td><input type="checkbox" name="" /> No one In our market has any real competitive advantages </td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>c.</td>
                    <td><input type="checkbox" name="" /> We have had competitive advantages, but they are eroding </td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>d.</td>
                    <td><input type="checkbox" name="" /> Yes – we have an idea of our competitive advantages, but we don’t communicate them effectively or consistently </td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>e.</td>
                    <td><input type="checkbox" name="" /> Yes – we have a competitive advantage, and there is strong evidence to support it.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>f.</td>
                    <td><input type="checkbox" name="" /> Yes – we have multiple competitive advantages with strong supporting evidence; don’t communicate effectively and consistently In all sales and marketing efforts </td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>g.</td>
                    <td><input type="checkbox" name="" /> Yes –multiple competitive advantages; strong supporting evidence; communicatee effectively and consistently.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>g.</td>
                    <td><input type="checkbox" name="" /> Yes – multiple durable or sustainable competitive advantages; strong supporting evidence; communicated effectively.</td>
                    </tr>
                </tbody>
                </table>
            </div> 
            <div className="questns table-responsive">
                <table className="table">
                <thead>
                    <tr className="thead-primary">
                    <th style={{width: 50}}>6</th>
                    <th colSpan={2}>Results from Competitive Scorecard & Gap Analysis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td colSpan={1} />
                    <td style={{width: 40}}>a.</td>
                    <td><input type="checkbox" name="" /> 0 positive performance gaps.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>b.</td>
                    <td><input type="checkbox" name="" /> 1-2 positive performance gaps.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>c.</td>
                    <td><input type="checkbox" name="" /> 3-4 positive performance gaps.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>d.</td>
                    <td><input type="checkbox" name="" /> 5-6 positive performance gaps.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>e.</td>
                    <td><input type="checkbox" name="" /> 6-7 positive performance gaps.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>f.</td>
                    <td><input type="checkbox" name="" /> 8-9 positive performance gaps.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>g.</td>
                    <td><input type="checkbox" name="" /> 10 positive performance gaps.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>h.</td>
                    <td><input type="checkbox" name="" /> 11 positive performance gaps.</td>
                    </tr>

                    <tr>
                    <td />
                    <td style={{width: 40}}>i.</td>
                    <td><input type="checkbox" name="" /> 12 positive performance gaps.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>j.</td>
                    <td><input type="checkbox" name="" /> 13-14 positive performance gaps.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>k.</td>
                    <td><input type="checkbox" name="" /> 15-16 positive performance gaps.</td>
                    </tr>
                </tbody>
                </table>
            </div> 
            <h4 style={{padding: '10px 0 10px 10px'}}>Products &amp; Services</h4>
            <div className="questns table-responsive">
                <table className="table">
                <thead>
                    <tr className="thead-primary">
                    <th style={{width: 50}}>7</th>
                    <th colSpan={2}>Our product and service offerings accomplish the following objectives (check all that apply):</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td colSpan={1} />
                    <td style={{width: 40}}>a.</td>
                    <td><input type="checkbox" name="" /> Successfully attract New customers to our business.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>b.</td>
                    <td><input type="checkbox" name="" /> Does not appear as a commodity to our market.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>c.</td>
                    <td><input type="checkbox" name="" /> Convinces our competitor{"'"}s customers to give your offerings a try.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>d.</td>
                    <td><input type="checkbox" name="" /> Makes it difficult for your customers to switch to a competitor.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>e.</td>
                    <td><input type="checkbox" name="" /> Can create New markets by introducing New products and services.</td>
                    </tr>
                </tbody>
                </table>
            </div> 
            <div className="questns table-responsive">
                <table className="table">
                <thead>
                    <tr className="thead-primary">
                    <th style={{width: 50}}>8</th>
                    <th colSpan={2}>Results from Innovative Offering Analysis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td colSpan={1} />
                    <td style={{width: 40}}>a.</td>
                    <td><input type="checkbox" name="" /> {'0'} point average.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>b.</td>
                    <td><input type="checkbox" name="" /> {'1-2'} point average</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>c.</td>
                    <td><input type="checkbox" name="" /> {'2-3'} point average.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>d.</td>
                    <td><input type="checkbox" name="" /> {'3-4'} point average.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>e.</td>
                    <td><input type="checkbox" name="" /> {'4-5'} point average.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>f.</td>
                    <td><input type="checkbox" name="" /> {'5-6'} point average.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>g.</td>
                    <td><input type="checkbox" name="" /> {'6-7'} point average.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>h.</td>
                    <td><input type="checkbox" name="" /> {'7-8'} point average.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>i.</td>
                    <td><input type="checkbox" name="" /> {'8-9'} point average.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>j.</td>
                    <td><input type="checkbox" name="" /> {'9-10'} point average.</td>
                    </tr>
                </tbody>
                </table>
            </div> 
            <h4 style={{padding: '10px 0 10px 10px'}}>Positioning &amp; Messaging</h4>
            <div className="questns table-responsive">
                <table className="table">
                <thead>
                    <tr className="thead-primary">
                    <th style={{width: 50}}>9</th>
                    <th colSpan={2}>Regarding your marketing message, which of the following statements are true?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td colSpan={1} />
                    <td style={{width: 40}}>a.</td>
                    <td><input type="checkbox" name="" /> It{"'"}s clear, simple, and easily understood.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>b.</td>
                    <td><input type="checkbox" name="" /> We understand the problems our customers need solved, and the drivers of those problems.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>c.</td>
                    <td><input type="checkbox" name="" /> We have quantified the benefits of using our offerings and use them in all messaging.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>d.</td>
                    <td><input type="checkbox" name="" /> We have created believable proof points to support our message and use them in all messaging.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>e.</td>
                    <td><input type="checkbox" name="" /> We have created an inspiring brand story that differentiates us from competitors.</td>
                    </tr>                                           
                </tbody>
                </table>
            </div> 
            <div className="questns table-responsive">
                <table className="table">
                <thead>
                    <tr className="thead-primary">
                    <th style={{width: 50}}>10</th>
                    <th colSpan={2}>{'Which of the following characteristics are True regarding your value proposition?  (check all that apply)'}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td colSpan={1} />
                    <td style={{width: 40}}>a.</td>
                    <td><input type="checkbox" name="" /> Targeted to specific markets</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>b.</td>
                    <td><input type="checkbox" name="" /> Clear and easy to understand.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>c.</td>
                    <td><input type="checkbox" name="" /> Aligned with how your customers measure success.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>d.</td>
                    <td><input type="checkbox" name="" /> Focused on results or outcomes that matter to the customer.</td>
                    </tr> 
                    <tr>
                    <td />
                    <td style={{width: 40}}>e.</td>
                    <td><input type="checkbox" name="" /> Demonstrates {'ROI'}.</td>
                    </tr>                                            
                    <tr>
                    <td />
                    <td style={{width: 40}}>f.</td>
                    <td><input type="checkbox" name="" /> Effectively differentiates you from competitors.</td>
                    </tr> 
                    <tr>
                    <td />
                    <td style={{width: 40}}>g.</td>
                    <td><input type="checkbox" name="" /> Difficult for competitors to copy.</td>
                    </tr> 
                    <tr>
                    <td />
                    <td style={{width: 40}}>h.</td>
                    <td><input type="checkbox" name="" /> It is the most effective value proposition In our market.</td>
                    </tr> 
                    <tr>
                    <td />
                    <td style={{width: 40}}>i.</td>
                    <td><input type="checkbox" name="" /> All employees know our value propositions and can recite them aloud.</td>
                    </tr> 
                    <tr>
                    <td />
                    <td style={{width: 40}}>j.</td>
                    <td><input type="checkbox" name="" /> We communicate our value proposition effectively In all sales and marketing materials.</td>
                    </tr> 
                </tbody>
                </table>
            </div> 
            <div className="questns table-responsive">
                <table className="table">
                <thead>
                    <tr className="thead-primary">
                    <th style={{width: 50}}>11</th>
                    <th colSpan={2}>Does your slogan or tagline reflect the value and results your customers receive from you{'?'}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td colSpan={1} />
                    <td style={{width: 40}}>a.</td>
                    <td><input type="checkbox" name="" /> No: Don{"'"}t know.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>b.</td>
                    <td><input type="checkbox" name="" /> Yes - but not well.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>c.</td>
                    <td><input type="checkbox" name="" /> Yes - our tagline is good, but it doesn{"'"}t differentiate us well.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>d.</td>
                    <td><input type="checkbox" name="" /> Yes - our tagline is good at reflecting value and differentiating us.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>e.</td>
                    <td><input type="checkbox" name="" /> Absolutely - our tagline is the best In the industry, reflecting our value, specific results, and our competitive differentiation and advantage.</td>
                    </tr>
                </tbody>
                </table>
            </div> 
            <div className="questns table-responsive">
                <table className="table">
                <thead>
                    <tr className="thead-primary">
                    <th style={{width: 50}}>12</th>
                    <th colSpan={2}>Does all sales and marketing content on the web, In print, and from your sales teams consistently explain your value?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td colSpan={1} />
                    <td style={{width: 40}}>a.</td>
                    <td><input type="checkbox" name="" /> No: Don{"'"}t know.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>b.</td>
                    <td><input type="checkbox" name="" /> Yes - but not well; but not all of it.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>c.</td>
                    <td><input type="checkbox" name="" /> Yes - it{"'"}s the job of our sales, marketing, and customer service staff to know and communicate {'this'}.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>d.</td>
                    <td><input type="checkbox" name="" /> Yes - we constantly train our staff on the value we provide; no systems or accountabilities In place.</td>
                    </tr>
                    <tr>
                    <td />
                    <td style={{width: 40}}>d.</td>
                    <td><input type="checkbox" name="" /> Yes - we provide training and have a quality control system In place to ensure our message is communicated effectively and consistently In all sales and marketing materials.</td>
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
