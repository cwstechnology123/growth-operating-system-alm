import React from 'react'

export default function BenchmarkScoreGapAnalysisContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <h2>Benchmark Score Gap Analysis</h2>	            					
            </div>   
            <div className="row">
                <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                    <canvas id="marksChart" width="200px" height="200px" />
                    <br />
                    <br /><br /><br /><br />
                    <div className="linkbtn">
                        <a href="javascript:void(0);"><i className="fa fa-arrow-left" /> Proceed to Benchmark Score Gap Analysis</a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="card">
                    <div className="card-body pl-0">
                    <div className="table-responsive">
                        <table className="table table-responsive">
                        <thead>
                            <tr className="thead-primary">
                            <th colSpan={2}>11 Criticle Growth Measures</th>
                            <th>Score</th>
                            <th>Target</th>
                            <th>Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Comatitive Advantage</td>
                            <td>84</td>
                            <td>160</td>
                            <td>53%</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Financial Performance</td>
                            <td>84</td>
                            <td>140</td>
                            <td>57%</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Customer Acquisition</td>
                            <td>73</td>
                            <td>140</td>
                            <td>52%</td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>Customer Retention</td>
                            <td>74</td>
                            <td>170</td>
                            <td>44%</td>
                            </tr>
                            <tr>
                            <td>5</td>
                            <td>Customer Transaction</td>
                            <td>40</td>
                            <td>90</td>
                            <td>44%</td>
                            </tr>
                            <tr>
                            <td>6</td>
                            <td>Ability</td>
                            <td>46</td>
                            <td>100</td>
                            <td>46%</td>
                            </tr>
                            <tr>
                            <td>7</td>
                            <td>Agility</td>
                            <td>31</td>
                            <td>100</td>
                            <td>31%</td>
                            </tr>
                            <tr>
                            <td>8</td>
                            <td>Stragic Value</td>
                            <td>14</td>
                            <td>25</td>
                            <td>56%</td>
                            </tr>
                            <tr>
                            <td>9</td>
                            <td>Customers</td>
                            <td>10</td>
                            <td>25</td>
                            <td>40%</td>
                            </tr>
                            <tr>
                            <td>10</td>
                            <td>Operations</td>
                            <td>13</td>
                            <td>24</td>
                            <td>54%</td>
                            </tr>
                            <tr>
                            <td>11</td>
                            <td>Growth Plateform</td>
                            <td>9</td>
                            <td>26</td>
                            <td>35%</td>
                            </tr>
                            <tr>
                            <td colSpan={1} />
                            <td>Overall Score</td>
                            <td>474</td>
                            <td>1000</td>
                            <td>47%</td>
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
