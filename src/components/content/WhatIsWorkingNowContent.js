import React from 'react'

export default function WhatIsWorkingNowContent() {
  return (
    <div className="content-body">
        {/* row */}
       <div className="container-fluid">
            <div className="head-title">
                <h2>What's Working Now</h2>	            					
            </div> 
            <div className="card">
                <div className="card-body pl-0">
                <div className="row">
                    <div className="col-md-6">
                    <br /><br /><br /><br /><br />
                    <div id="columnchart_material" style={{height: 500, padding: '0 10px'}} />
                    </div>
                    <div className="col-md-6">
                    <div className="table-responsive">
                        <table className="table table-responsive">
                        <thead>
                            <tr>
                            <th className="bgradius" colSpan={3}>Cumulative Percentage Cutoff:</th>
                            <th className="bgradius">80%</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="thead-primary">
                            <th>#</th>
                            <th>Tactics / Activities</th>
                            <th>Quarterly Sales</th>
                            <th>Cumulative %</th>
                            </tr>
                            <tr>
                            <td>1</td>
                            <td>Customer Communication Program</td>
                            <td> $34,30,477</td>
                            <td>38.6%</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Targeted Accounts Program</td>
                            <td> $25,68,756 </td>
                            <td>67.5%</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Reactivation Program (offer 6)</td>
                            <td> $8,70,684</td>
                            <td>77.3%</td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>PoP upsell &amp; cross-sell (inside sales)</td>
                            <td> $5,11,570</td>
                            <td>83.1%</td>
                            </tr>
                            <tr>
                            <td>5</td>
                            <td>Referral Program (offer 3)</td>
                            <td> $3,66,655</td>
                            <td>87.2%</td>
                            </tr>
                            <tr>
                            <td>6</td>
                            <td>PoP "did you know…"</td>
                            <td> $3,18,658 </td>
                            <td>94.2%</td>
                            </tr>
                            <tr>
                            <td>7</td>
                            <td>Insight Story Webinar</td>
                            <td> $3,04,623 </td>
                            <td>96.9%</td>
                            </tr>
                            <tr>
                            <td>8</td>
                            <td>Organic Search</td>
                            <td> $2,38,500</td>
                            <td>98.1%</td>
                            </tr>
                            <tr>
                            <td>9</td>
                            <td>Package Inserts</td>
                            <td> $1,08,492</td>
                            <td>98.8%</td>
                            </tr>
                            <tr>
                            <td>10</td>
                            <td>Google Adwords (10 keywords)</td>
                            <td> $62,400</td>
                            <td>99.3%</td>
                            </tr>
                            <tr>
                            <td>11</td>
                            <td>LinkedIn prospecting</td>
                            <td> $44,707</td>
                            <td>99.7%</td>
                            </tr>
                            <tr>
                            <td>12</td>
                            <td>Sales Prospecting</td>
                            <td> $31,700</td>
                            <td>99.7%</td>
                            </tr>
                            <tr>
                            <td>13</td>
                            <td>Trade Shows</td>
                            <td> $26,651</td>
                            <td>100.0%</td>
                            </tr>
                            <tr>
                            <td>14</td>
                            <td />
                            <td />
                            <td>100.0%</td>
                            </tr>
                            <tr>
                            <td>15</td>
                            <td />
                            <td />
                            <td>100.0%</td>
                            </tr>
                            <tr className="thead-primary">
                            <th>13</th>
                            <th />
                            <th>$ 88,83,873</th>
                            <th />
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
