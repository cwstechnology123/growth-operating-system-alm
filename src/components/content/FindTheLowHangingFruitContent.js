import React from 'react'

export default function FindTheLowHangingFruitContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <h2>Find the Low Hanging Fruit</h2>	            					
            </div>
            <div className="card">
                <div className="card-body contentleft sideul">
                    <h4>HOW DO YOU ASSIGN VALUE?</h4>
                    <p>Value can be determined from an absolute or relative perspective. An absolute perspective is when an appropriate analysis has determined an actual value.  Relative value can be created when hypothetically comparing different options without an actual analysis.  Use relative value when there is a good relative sense that one option is more valuable than another.</p>
                    <div className="row">
                        <div className="col-md-8">
                            <h4>HOW DO YOU ASSIGN COST / EFFORT?</h4>
                            <p>The effort axis can represent cost, capital, ease of implementation, people, timing or other effort levers. Once again, you can assign levels of efforts on an absolute or relative basis. If you have actual data and analysis, then use the data to plot projects. If you don’t, you typically have a good intuition on the relative levels of efforts of different options.</p>
                            <br /><br />
                            <div className="table-responsive">
                                <table className="table">
                                <thead>
                                    <tr>
                                    <th style={{width: '35%'}} />
                                    <th className="bgradius text-center">Prioritization Dimension <br /> #1</th>
                                    <th className="bgradius text-center">Prioritization Dimension <br /> #2</th>
                                    </tr>
                                    <tr>
                                    <th style={{width: '35%'}} />
                                    <th className="bgradiusf text-center">"Effort"</th>
                                    <th className="bgradiusf text-center">"Value"</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="thead-primary">
                                    <th>Opportunity</th>
                                    <th>(1=low; 10=high)</th>
                                    <th>(1=low; 10=high)</th>
                                    </tr>
                                    <tr>
                                    <td>Activity A</td>
                                    <td>3</td>
                                    <td>7</td>
                                    </tr>
                                    <tr>
                                    <td>Activity B</td>
                                    <td>2</td>
                                    <td>3</td>
                                    </tr>
                                    <tr>
                                    <td>Activity C</td>
                                    <td>7</td>
                                    <td>7</td>
                                    </tr>
                                    <tr>
                                    <td>Activity D</td>
                                    <td>7</td>
                                    <td>2</td>
                                    </tr>
                                    <tr>
                                    <td>Activity E</td>
                                    <td>8</td>
                                    <td>4</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h4>INSTRUCTIONS</h4>
                            <ul>
                                <li>1. Define the Prioritization Dimensions</li>
                                <li>2. Brainstorm Options</li>
                                <li>3. Define Values for Options (High is Good, Low is Not Good)</li>
                                <li>4. Sort Options by Total Value</li>
                                <li>5. You Now Have Prioritized Your Options</li>
                            </ul>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    </div>
  )
}
