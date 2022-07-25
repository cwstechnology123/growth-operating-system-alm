import React from 'react'

export default function EquityEvolutionTheBigBonusContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <h2>Equity Evolution  (The Big Bonus)</h2>	            					
            </div>
            <div className="card">
                <div className="card-body contentleft pl-0">
                <div className="row">
                    <div className="col-md-12">
                    <div id="chart_div" style={{width: 900, height: 300}} />
                    </div>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body pl-0">
                <div className="table-responsive">
                    <table className="table table-responsive">
                    <thead>
                        <tr>
                        <th colSpan={4} style={{textAlign: 'center'}} className="bgradius">Equity Evolution in Action:  Valuation Calculation</th>
                        <th colSpan={5} style={{textAlign: 'center'}} className="bgradius">1% Quarterly Improvement</th>
                        <th colSpan={1} />
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="thead-primary">
                        <th style={{width: '30%'}}>Industry Specific Valuation Scenario</th>
                        <th>Valuation Multiple (quality)</th>
                        <th>Profit, EBITDA, or EBIT (quantity)</th>
                        <th>Current Valuation</th>
                        <th>1  Year of Growth</th>
                        <th>2  Years of Growth</th>
                        <th>3  Years of Growth</th>
                        <th>4  Years of Growth</th>
                        <th>5  Years of Growth</th>
                        <th>Total Growth Over 5 Years</th>
                        </tr>
                        <tr>
                        <td>Subpar Industry Multiple</td>
                        <td>3.5</td>
                        <td> $35,00,000 </td>
                        <td> $1,22,50,000 </td>
                        <td> $1,60,27,717 </td>
                        <td> $2,24,86,016 </td>
                        <td> $3,29,40,248 </td>
                        <td> $4,93,97,159 </td>
                        <td> $6,97,04,941 </td>
                        <td />
                        </tr>
                        <tr>
                        <td>  Average Industry Multiple</td>
                        <td>5.5</td>
                        <td> $35,00,000 </td>
                        <td>  $1,92,50,000 </td>
                        <td> $2,51,86,412</td>
                        <td> $3,53,35,168 </td>
                        <td> $5,17,63,247</td>
                        <td> $7,76,24,107</td>
                        <td> $10,95,36,336</td>
                        <td> $9,02,86,336</td>
                        </tr>
                        <tr>
                        <td>  Premium Industry Multiple</td>
                        <td>7.5</td>
                        <td> $35,00,000</td>
                        <td> $2,62,50,000 </td>
                        <td> $3,43,45,107</td>
                        <td> $4,81,84,321</td>
                        <td> $7,05,86,246</td>
                        <td> $10,58,51,055</td>
                        <td> $14,93,67,731</td>
                        <td> $13,01,17,731 </td>
                        </tr>
                        <tr>
                        <td>  "Dream" Multiple</td>
                        <td>9.5</td>
                        <td> $35,00,000</td>
                        <td> $3,32,50,000</td>
                        <td> $4,35,03,803</td>
                        <td> $6,10,33,473</td>
                        <td> $8,94,09,245 </td>
                        <td> $13,40,78,003</td>
                        <td> $18,91,99,127</td>
                        <td> $16,99,49,127</td>
                        </tr>                               
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            <div className="linkbtn">
                <a href="whats-driving-growth.html"><i className="fa fa-arrow-left" /> Proceed to What's Driving Growth</a>
            </div>
            <br />
            <br />
            <div className="card">
                <div className="card-body contentleft pl-0">
                <h4 style={{padding: 10}}>Median Deal Multiples by EBITDA Size of Company</h4>
                <div className="table table-responsive">
                    <table className="table">
                    <thead>
                        <tr className="thead-primary">
                        <th>Industry</th>
                        <th>$0-1M EBITDA</th>
                        <th>$1-5M EBITDA</th>
                        <th>$5-10M EBITDA</th>
                        <th>$10-25M EBITDA</th>
                        <th>$25-50M EBITDA</th>
                        <th>&gt;$50M EBITDA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Manufacturing</td>
                        <td>4.0</td>
                        <td>6.0</td>
                        <td>6.3</td>
                        <td>7.0</td>
                        <td>7.3</td>
                        <td>10.0</td>
                        </tr>
                        <tr>
                        <td>Construction &amp; Engineering</td>
                        <td>3.5</td>
                        <td>4.5</td>
                        <td>5.5</td>
                        <td>6.3</td>
                        <td>8.0</td>
                        <td>9.0</td>
                        </tr>
                        <tr>
                        <td>Consumer Goods &amp; Services</td>
                        <td>4.3</td>
                        <td>6.0</td>
                        <td>6.5</td>
                        <td>7.0</td>
                        <td>7.5</td>
                        <td>8.0</td>
                        </tr>
                        <tr>
                        <td>Wholesale &amp; Distribution</td>
                        <td>4.0</td>
                        <td>5.3</td>
                        <td>5.5</td>
                        <td>5.5</td>
                        <td>7.0</td>
                        <td>7.3</td>
                        </tr>
                        <tr>
                        <td>Business Services</td>
                        <td>4.0</td>
                        <td>6.0</td>
                        <td>6.3</td>
                        <td>7.0</td>
                        <td>8.0</td>
                        <td>8.5</td>
                        </tr>
                        <tr>
                        <td>Basic Materials &amp; Energy</td>
                        <td>3.0</td>
                        <td>4.0</td>
                        <td>6.5</td>
                        <td>6.5</td>
                        <td className="bluetab" />
                        <td className="bluetab" />
                        </tr>
                        <tr>
                        <td>Health Care &amp; Biotech</td>
                        <td>2.5</td>
                        <td>6.3</td>
                        <td>4.8</td>
                        <td>6.5</td>
                        <td>8.5</td>
                        <td>10.0</td>
                        </tr>
                        <tr>
                        <td>Information Technology</td>
                        <td>4.5</td>
                        <td>5.5</td>
                        <td>6.8</td>
                        <td>7.0</td>
                        <td>9.0</td>
                        <td>10.0</td>
                        </tr>
                        <tr>
                        <td>Financial Services &amp; Real Estate</td>
                        <td>4.5</td>
                        <td>5.0</td>
                        <td>6.3</td>
                        <td>8.5</td>
                        <td>8.5</td>
                        <td>10.0</td>
                        </tr>
                        <tr>
                        <td>Media &amp; Entertainment</td>
                        <td>5.0</td>
                        <td>6.0</td>
                        <td>7.0</td>
                        <td>8.5</td>
                        <td>9.0</td>
                        <td>10.0</td>
                        </tr>
                        <tr>
                        <td>Average</td>
                        <td>4.5</td>
                        <td>5.5</td>
                        <td>6.3</td>
                        <td>6.8</td>
                        <td>7.5</td>
                        <td>8.6</td>
                        </tr>
                        <tr>
                        <td colSpan={7}>NOTE:  This information was taken from the 2020 Pepperdine University Private Capital Markets Report.</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body contentleft pl-0">
                <h4 style={{padding: 10}}>NAICS Average Multiples by Industry Sector</h4>
                <div className="table table-responsive">
                    <table className="table">
                    <thead>
                        <tr className="thead-primary">
                        <th>NAICS Industry Sector</th>
                        <th>2010</th>
                        <th>2011</th>
                        <th>2012</th>
                        <th>2013</th>
                        <th>2014</th>
                        <th>2015</th>
                        <th>2016</th>
                        <th>2017</th>
                        <th>2018</th>
                        <th>2019</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Construction</td>
                        <td>2.8</td>
                        <td>3.1</td>
                        <td>4.1</td>
                        <td>4.0</td>
                        <td>3.4</td>
                        <td>3.7</td>
                        <td>3.3</td>
                        <td>3.7</td>
                        <td>4.0</td>
                        <td>3.3</td>
                        </tr>
                        <tr>
                        <td>Manufacturing</td>
                        <td>5.0</td>
                        <td>6.5</td>
                        <td>6.6</td>
                        <td>7.2</td>
                        <td>5.8</td>
                        <td>6.1</td>
                        <td>6.5</td>
                        <td>5.6</td>
                        <td>6.2</td>
                        <td>5.5</td>
                        </tr>
                        <tr>
                        <td>Wholesale Trade</td>
                        <td>3.9</td>
                        <td>4.7</td>
                        <td>4.8</td>
                        <td>4.8</td>
                        <td>6.2</td>
                        <td>6.9</td>
                        <td>6.4</td>
                        <td>5.3</td>
                        <td>4.3</td>
                        <td>4.9</td>
                        </tr>
                        <tr>
                        <td>Transportation &amp; Warehousing</td>
                        <td>3.1</td>
                        <td>2.9</td>
                        <td>2.6</td>
                        <td>3.2</td>
                        <td>3.2</td>
                        <td>3.5</td>
                        <td>4.2</td>
                        <td>3.7</td>
                        <td>3.1</td>
                        <td>3.3</td>
                        </tr>
                        <tr>
                        <td>Information</td>
                        <td>6.4</td>
                        <td>10.1</td>
                        <td>7.0</td>
                        <td>8.6</td>
                        <td>10.0</td>
                        <td>6.9</td>
                        <td>10.7</td>
                        <td>13.6</td>
                        <td>9.7</td>
                        <td className="bluetab" />
                        </tr>
                        <tr>
                        <td>Finance &amp; Insurance</td>
                        <td>6.2</td>
                        <td>3.2</td>
                        <td>4.5</td>
                        <td>3.8</td>
                        <td>6.2</td>
                        <td>7.8</td>
                        <td>9.7</td>
                        <td>13.6</td>
                        <td>12.1</td>
                        <td>7.6</td>
                        </tr>
                        <tr>
                        <td>Real Estate, Rental &amp; Leasing</td>
                        <td>2.6</td>
                        <td>2.8</td>
                        <td>3.1</td>
                        <td>2.4</td>
                        <td>4.5</td>
                        <td>2.9</td>
                        <td>3.8</td>
                        <td>4.2</td>
                        <td>6.2</td>
                        <td className="bluetab" />
                        </tr>
                        <tr>
                        <td>Professional, Scientific &amp; Technical Services</td>
                        <td>5.2</td>
                        <td>8.5</td>
                        <td>4.2</td>
                        <td>4.6</td>
                        <td>5.5</td>
                        <td>8.0</td>
                        <td>5.4</td>
                        <td>5.9</td>
                        <td>4.6</td>
                        <td>3.7</td>
                        </tr>
                        <tr>
                        <td>Admin, Support, Waste Mgmt. &amp; Remediation Svcs.</td>
                        <td>2.5</td>
                        <td>2.7</td>
                        <td>3.2</td>
                        <td>2.6</td>
                        <td>2.8</td>
                        <td>3.0</td>
                        <td>3.8</td>
                        <td>3.7</td>
                        <td>3.4</td>
                        <td>5.4</td>
                        </tr>
                        <tr>
                        <td>Educational Services</td>
                        <td>2.6</td>
                        <td>2.8</td>
                        <td>4.7</td>
                        <td>2.7</td>
                        <td>3.5</td>
                        <td>3.6</td>
                        <td>4.1</td>
                        <td>3.1</td>
                        <td>4.4</td>
                        <td>4.0</td>
                        </tr>
                        <tr>
                        <td>Health Care &amp; Social Assistance</td>
                        <td>4.3</td>
                        <td>5.4</td>
                        <td>2.6</td>
                        <td>4.6</td>
                        <td>4.2</td>
                        <td>3.2</td>
                        <td>4.2</td>
                        <td>3.8</td>
                        <td>4.4</td>
                        <td>4.4</td>
                        </tr>
                        <tr>
                        <td>Arts, Entertainment &amp; Recreation</td>
                        <td>2.1</td>
                        <td>2.2</td>
                        <td>2.5</td>
                        <td>3.1</td>
                        <td>3.6</td>
                        <td>3.3</td>
                        <td>4.6</td>
                        <td>3.3</td>
                        <td>3.1</td>
                        <td>3.0</td>
                        </tr>
                        <tr>
                        <td>Accomodation &amp; Food Services</td>
                        <td>1.9</td>
                        <td>1.9</td>
                        <td>1.8</td>
                        <td>1.8</td>
                        <td>2.1</td>
                        <td>2.4</td>
                        <td>2.4</td>
                        <td>2.8</td>
                        <td>2.8</td>
                        <td>2.9</td>
                        </tr>
                        <tr>
                        <td>Other Services</td>
                        <td>2.2</td>
                        <td>2.6</td>
                        <td>2.4</td>
                        <td>2.6</td>
                        <td>2.4</td>
                        <td>2.8</td>
                        <td>2.6</td>
                        <td>3.0</td>
                        <td>2.8</td>
                        <td>3.5</td>
                        </tr>
                        <tr>
                        <td><b>All Sectors</b></td>
                        <td>2.9</td>
                        <td>3.5</td>
                        <td>3.1</td>
                        <td>3.3</td>
                        <td>3.9</td>
                        <td>3.8</td>
                        <td>3.9</td>
                        <td>4.1</td>
                        <td>3.9</td>
                        <td>3.8</td>
                        </tr>
                        <tr>
                        <td colSpan={11}>NOTE:  Each data point in this chart is based on a minimum of 10 transactions of private targets.  If any industry sector does not meet this criterion, it is not included in the chart.</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body pl-0">
                <div className="table-responsive">
                    <table className="table">
                    <thead>
                        <tr className="thead-primary">
                        <th colSpan={2}>12 Equity Drivers activated by the 120 Growth Operating System and the impact they can have on valuation.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Competitive Advantage (2x) - It's difficult to launch a competitor that can take your market share.  Warren Buffett calls a Durable Competitive Advantage the "moat" protecting the castle (aka Buffett's Moat).</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Intellectual Property (1x+) - Developing intellectual property is important as it can often account for a significant percentage of the company's value, even surpassing the value of physical assets.</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>New Business Optionality (.5x) - When a company is positioned properly in the market they can launch new businesses or business segments effectively.  Allows for a varied product range.</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>Growth Rate (1x) - The faster you're growing, the larger future revenues should be.</td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td>Gross Margin (1x) - The percent of revenue the company retains.  How do your profit margins compare to industry averages?</td>
                        </tr>
                        <tr>
                        <td>6</td>
                        <td>Scalability (.7x) - Higher revenues create higher profit margin (Marginal Profitability Calculation).</td>
                        </tr>
                        <tr>
                        <td>7</td>
                        <td>Customer Retention (.5x) - Investors are highly fixated on higher customer retention rates and lower attrition/churn rates than industry averages.  High cost of switching vendors.</td>
                        </tr>
                        <tr>
                        <td>8</td>
                        <td>Customer Base (.5x) - The larger your active customer base, the more value investors will find in your business.</td>
                        </tr>
                        <tr>
                        <td>9</td>
                        <td>Customer Responsiveness (.5x) - customers respond/buy to your communication.  This is achieved by having a well-developed "back end", a complete and well-organized customer database (active, inactive and prospective), and higher than average Customer Lifetime Value.</td>
                        </tr>
                        <tr>
                        <td>10</td>
                        <td>Systems &amp; Operating Procedures (1x) - All of your operating procedures should be systematized, optimized and documented.</td>
                        </tr>
                        <tr>
                        <td>11</td>
                        <td>Marketing Processes (1x) - All of your customer acquisition and customer retention processes should be systematized, optimized and documented.</td>
                        </tr>
                        <tr>
                        <td>12</td>
                        <td>Resilience (.5x) - Not being dependent on a small number of major accounts or vendors/suppliers/partners. Having good management below the owner in place.  Also, having a predictable business model makes it easier to predict future cash flows.</td>
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
