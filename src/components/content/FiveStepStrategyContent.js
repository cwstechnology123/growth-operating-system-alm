import React from 'react'

export default function FiveStepStrategyContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <h2>Five-Step Strategy</h2>	            					
            </div>
            <div className="card">
                <div className="card-body">
                <div className="row">
                    <div className="col-md-12 contentleft">
                    <p>There are Nine Organic Revenue Growth Drivers.  The 120 Growth Catalyst can help you activate, align, and improve the performance of all nine, generating controlled and repeatable growth.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body pl-0 fivestep tenyears">
                <table className="table">
                    <thead>
                    <tr className="thead-primary">
                        <th>Winning Aspiration</th>
                        <th>Where To Play</th>
                        <th>How to Win</th>
                        <th>Capabilities</th>
                        <th>Management System</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="bgradiusf">What is your winning aspiration for the business?</td>
                        <td className="bgradiusf">In What markets will you play?</td>
                        <td className="bgradiusf">How will you win within markets you play?</td>
                        <td className="bgradiusf">What capabilities are required to win? </td>
                        <td className="bgradiusf">What management system are required to win?</td>
                    </tr>
                    <tr>
                        <td><input type="text" className="form-control" name placeholder="Enter aspiration here" /></td>
                        <td><input type="text" className="form-control" name placeholder="Enter market here" /></td>
                        <td><input type="text" className="form-control" name placeholder="Enter how to win here " /></td>
                        <td><input type="text" className="form-control" name placeholder="Enter capabilities here " /></td>
                        <td><input type="text" className="form-control" name placeholder="Enter management system here" /></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="form-control" name /></td>
                        <td><input type="text" className="form-control" name /></td>
                        <td><input type="text" className="form-control" name /></td>
                        <td><input type="text" className="form-control" name /></td>
                        <td><input type="text" className="form-control" name /></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="form-control" name /></td>
                        <td><input type="text" className="form-control" name /></td>
                        <td><input type="text" className="form-control" name /></td>
                        <td><input type="text" className="form-control" name /></td>
                        <td><input type="text" className="form-control" name /></td>
                    </tr>
                    <tr>
                        <td><input type="text" className="form-control" name /></td>
                        <td><input type="text" className="form-control" name /></td>
                        <td><input type="text" className="form-control" name /></td>
                        <td><input type="text" className="form-control" name /></td>
                        <td><input type="text" className="form-control" name /></td>
                    </tr>                                
                    </tbody>
                </table>
                </div>
            </div>
            </div>

    </div>
  )
}
