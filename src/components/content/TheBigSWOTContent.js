import React from 'react'

export default function TheBigSWOTContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title bigsout">
                <h2>The Big SWOT</h2>  
                <p><b>SWOT Analysis</b> is a strategic planning tool that explores an organization’s internal and external environment, including strengths, weaknesses, opportunities, and threats. Perform your SWOT Analysis for either your entire business or a specific segment of your business.</p>     
                <p>Sometimes called an Internal-External Analysis (IE Analysis), SWOT analysis is used widely by many teams, organizations, and consultants to quickly assess the most relevant aspects of a company’s current and potential future strategy. When creating your SWOT, consider the following questions:</p>
                <ul>
                <li><b>Strengths:</b>  What are our internal core competencies and source of competitive differentiation?</li>
                <li><b>Weaknesses:</b>  What internal capability gaps or weaknesses exist that might cause problems in the future?</li>
                <li><b>Opportunities:</b> What external market opportunities that we should pursue?</li>
                <li><b>Threats:</b> What external threats exists that we should address?</li>
                </ul>  		
                <p>Existing organizations can use a SWOT analysis as part of their traditional planning processes. New ventures and start-ups can use SWOT analysis to gain insight into potentially future challenges and ways to create competitive differentiation. Even nonprofit organizations can use SWOT analysis. The goal is to create a simple structure that engages and aligns teams and organizations around the current state and future strategies and plans for the business.</p>			
            </div>                                              	
            <div className="card">
                <div className="card-body pl-0">                                            
                <div className="table-responsive">
                    <table className="table">
                    <thead>
                        <tr className="thead-primary">
                        <th>Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="lightyello"><input type="text" className="form-control text-left" name placeholder="Enter the purpose of the analysis here" /></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <table className="table">
                        <thead>
                        <tr>
                            <th className="bluetab"><strong>S</strong></th>
                            <th className="bgradiusf">Internal STRENGTHS</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="bgradiusf">1</td>
                            <td>What do our customers love most?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">2</td>
                            <td>What are we more efficient at?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">3</td>
                            <td>What can we do for less money?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">4</td>
                            <td>What can we do in less time?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">5</td>
                            <td>What makes us stand out?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">6</td>
                            <td />
                        </tr>
                        <tr>
                            <td className="bgradiusf">7</td>
                            <td />
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="col-md-3">
                    <table className="table">
                        <thead>
                        <tr>
                            <th className="bluetab"><strong>W</strong></th>
                            <th className="bgradiusf">Internal WEAKNESSSES</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="bgradiusf">1</td>
                            <td>Where do we lack efficiency?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">2</td>
                            <td>Where are we wasting money?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">3</td>
                            <td>Where are we wasting time and resources?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">4</td>
                            <td>What do our competitors do better?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">5</td>
                            <td>What are our top customer complaints?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">6</td>
                            <td />
                        </tr>
                        <tr>
                            <td className="bgradiusf">7</td>
                            <td />
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="col-md-3">
                    <table className="table">
                        <thead>
                        <tr>
                            <th className="bluetab"><strong>O</strong></th>
                            <th className="bgradiusf">External OPPORTUNITIES</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="bgradiusf">1</td>
                            <td>What is missing in our market?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">2</td>
                            <td>What could we create or do better than a competitor?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">3</td>
                            <td>What new trends are occurring?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">4</td>
                            <td>What new technology could we use?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">5</td>
                            <td>What openings in the market are there?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">6</td>
                            <td />
                        </tr>
                        <tr>
                            <td className="bgradiusf">7</td>
                            <td />
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="col-md-3">
                    <table className="table">
                        <thead>
                        <tr>
                            <th className="bluetab"><strong>T</strong></th>
                            <th className="bgradiusf">External THREATS</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="bgradiusf">1</td>
                            <td>What changes are occurring in our market's environment?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">2</td>
                            <td>What technologies could replace what we do?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">3</td>
                            <td>What changes are occurring in the way we're being discovered?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">4</td>
                            <td>What social changes could threaten us?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">5</td>
                            <td>Are there any threatening government policies or regulations?</td>
                        </tr>
                        <tr>
                            <td className="bgradiusf">6</td>
                            <td />
                        </tr>
                        <tr>
                            <td className="bgradiusf">7</td>
                            <td />
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body pl-0">
                <div className="table-responsive">
                    <table className="table">
                    <thead>
                        <tr className="thead-primary">
                        <th colSpan={5}>Comprehensive SWOT Analysis Categories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="bgradiusf">External: Targets</td>
                        <td className="bgradiusf">Rank Order</td>
                        <td className="bgradiusf">Opportunities</td>
                        <td className="bgradiusf">Rank Order</td>
                        <td className="bgradiusf">Threats</td>
                        </tr>
                        <tr>
                        <td>Customer Segments</td>
                        <td />
                        <td />
                        <td />
                        <td />
                        </tr>
                        <tr>
                        <td>Markets</td>
                        <td />
                        <td />
                        <td />
                        <td />
                        </tr>
                        <tr>
                        <td>Geographies</td>
                        <td />
                        <td />
                        <td />
                        <td />
                        </tr>
                        <tr>
                        <td className="bgradiusf">Internal:  Value Propositions</td>
                        <td className="bgradiusf">Rank Order</td>
                        <td className="bgradiusf">Strengths Relative to Competitors</td>
                        <td className="bgradiusf">Rank Order</td>
                        <td className="bgradiusf">Weaknesses Relative to Competitors</td>
                        </tr>
                        <tr>
                        <td>Products</td>
                        <td />
                        <td />
                        <td />
                        <td />
                        </tr>
                        <tr>
                        <td>Services</td>
                        <td />
                        <td />
                        <td />
                        <td />
                        </tr>
                        <tr>
                        <td>Pricing</td>
                        <td />
                        <td />
                        <td />
                        <td />
                        </tr>
                        <tr>
                        <td className="bgradiusf">Internal:  Go-To-Market</td>
                        <td className="bgradiusf">Rank Order</td>
                        <td className="bgradiusf">Strengths Relative to Competitors</td>
                        <td className="bgradiusf">Rank Order</td>
                        <td className="bgradiusf">Weaknesses Relative to Competitors</td>
                        </tr>
                        <tr>
                        <td>Distribution</td>
                        <td />
                        <td />
                        <td />
                        <td />
                        </tr>
                        <tr>
                        <td>Marketing</td>
                        <td />
                        <td />
                        <td />
                        <td />
                        </tr>
                        <tr>
                        <td>Sales</td>
                        <td />
                        <td />
                        <td />
                        <td />
                        </tr>
                        <tr>
                        <td className="bgradiusf">Internal:  The Organization</td>
                        <td className="bgradiusf">Rank Order</td>
                        <td className="bgradiusf">Strengths Relative to Competitors</td>
                        <td className="bgradiusf">Rank Order</td>
                        <td className="bgradiusf">Weaknesses Relative to Competitors</td>
                        </tr>
                        <tr>
                        <td>Processes / Functions</td>
                        <td />
                        <td />
                        <td />
                        <td />
                        </tr>
                        <tr>
                        <td>People</td>
                        <td />
                        <td />
                        <td />
                        <td />
                        </tr>
                        <tr>
                        <td>Infrastructure</td>
                        <td />
                        <td />
                        <td />
                        <td />
                        </tr>
                        <tr>
                        <td>Partnerships</td>
                        <td />
                        <td />
                        <td />
                        <td />
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
                        <th style={{textAlign: 'center'}} colSpan={2}>Action Items &amp; Goals</th>
                        </tr>                                    
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Which opportunities should we pursue? How can we use our strengths to help us achieve our goals?</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Which weaknesses need to be improved so we are less susceptible to external threats?</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>What strategies can we put into place to be prepared for threats?</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>How can we use our strengths to make best use of any existing opportunities?</td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td />
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
