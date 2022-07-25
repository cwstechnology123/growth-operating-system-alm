import React from 'react'
import { Link } from "react-router-dom";

export default function ImproveYourScoreContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <h2>Improve Your Score - Grow Your Business</h2>	   
                <br /><br />         					
            </div>
            <div className="card">
                <div className="card-body improve pl-0">
                <div className="row">
                    <div className="col-md-7">
                    <p>Organizations that score higher on the 120 growth Catalyst™ benchmark grow on Avarage 3-7x faster than their peers.the clear links between score and growth rate exists becouse the performance benchmark is directly tied to growth drivers of the business. simply put the higher a company scores on the benchmark the faster they grow,</p>
                    <div id="scatter_top_x" />
                    </div>
                    <div className="col-md-5">
                    <ul>
                        <li>- 2nd Quartile companies grow 2.9X faster than 1st quartile companies.</li>
                        <li>- 3rd Quartile companies grow 5.6X faster than 1st quartile companies.</li>
                        <li>- 4th Quartile companies Outplace 1st quartile companies by 7.3X.</li>
                    </ul>
                    <div id="columnchart_values" />
                    </div>
                </div>
                </div>
            </div>
            <div className="linkbtn">
                <Link to="/state-of-business"><i className="fa fa-arrow-left" /> Proceed to State of Business</Link>
            </div>
        </div>
    </div>
  )
}
