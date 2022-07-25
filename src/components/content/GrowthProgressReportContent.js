import React from 'react'

export default function GrowthProgressReportContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <h2>Growth Progress Report</h2>	            					
            </div> 
            <div className="card">
                <div className="card-body pl-0">
                <div className="table-responsive">
                    <table className="table table-responsive">
                    <thead>
                        <tr className="thead-primary">
                        <th>Plan</th>
                        <th>Optimism</th>
                        <th>Momentum</th>
                        <th>Motivation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="bgradiusf">Forging Your Future</td>
                        <td className="bgradiusf">Taking Pride in Achievements</td>
                        <td className="bgradiusf">Building Confidance</td>
                        <td className="bgradiusf">Looking Farward</td>
                        </tr>
                        <tr>
                        <td>What are the strategic goals you would like to achieve over the next Quarter and years?</td>
                        <td>What you have achievedin the past quarter that makes you proud?</td>
                        <td>What areas the focus, progress or performance make you the most confident?</td>
                        <td>What new opportunities or strategies give you the gretest sence of excitement?</td>
                        </tr>
                        <tr>
                        <td style={{height: 150}} />
                        <td style={{height: 150}} />
                        <td style={{height: 150}} />
                        <td style={{height: 150}} />
                        </tr>
                        <tr className="thead-primary">
                        <th>Achievement 1</th>
                        <th>Achievement 2</th>
                        <th>Achievement 3</th>
                        <th>Achievement 4</th>
                        </tr>
                        <tr>
                        <td style={{height: 100}} />
                        <td style={{height: 100}} />
                        <td style={{height: 100}} />
                        <td style={{height: 100}} />
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
