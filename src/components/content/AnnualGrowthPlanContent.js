import React from 'react'
import { Link } from "react-router-dom";

export default function AnnualGrowthPlanContent() {
  return (
    <div className="content-body">
    {/* row */}
   <div className="container-fluid">
        <div className="head-title">
            <h2>Annual Growth Planning</h2>	            					
        </div>
        <div className="card">
            <div className="card-body">
            <div className="row">
                <div className="col-md-6 contentleft">
                <h4>Day 1:  Performance Benchmarking</h4>
                <p>The Goals for the first day is to complete the <Link to="/120-growth-benchmark">120 Growth Benchmark</Link>. this will take between 4-6 hours with 10 minuts Breaks scheduled each hour, and an hour long lunch break. </p>
                </div>
                <div className="col-md-6 contentleft">
                <h4>Day 2:  Growth Planning</h4>
                <ul>
                    <li>Prioritize areas of improvement identified by the <a href="the-120-Growth-Benchmark.html">120 Growth Benchmark</a>.</li>
                    <li>Identify Growth Opportunities for each of the Nine Revenue Growth Drivers.</li>
                    <li>Conduct an Opportunity Analysis for the top revenue growth opportunities.</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>

    </div>
  )
}
