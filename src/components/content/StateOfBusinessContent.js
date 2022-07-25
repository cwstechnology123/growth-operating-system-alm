import React from 'react'
import { Link } from "react-router-dom";

export default function StateOfBusinessContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <h2>State Of Business</h2>	
                <p>Benchmark your performance, capabilities, and discover your growth potential.</p>  
                <br />          					
            </div>
            <div className="row">
                <div className="col-xl-12 contentleft">
                <div className="card">
                    <div className="card-body">
                    <ul>
                        <li><i className="fa fa-check" /> Benchmark your growth strategy and execution against a wide range of high performance organizations.</li>
                        <li><i className="fa fa-check" /> Provides you with quantifiable data, measures, and clarity to guide your decisions.</li>
                        <li><i className="fa fa-check" /> Align your teams around a common set of priorities, helping you focus and simplify your growth efforts.</li>
                        <li><i className="fa fa-check" /> Compress potentially months of work into just a few days.</li>                                    
                    </ul>
                    <br />
                    <br />
                    </div>
                </div>
                <div className="linkbtn">
                <Link to="/benchmark-scorecard"><i className="fa fa-arrow-left" /> Proceed to the Benchmark Scorecard</Link>
                </div>      			
                <br /><br /><br /><br /><br /><br />
                </div>
            </div>
        </div>
    </div>
  )
}
