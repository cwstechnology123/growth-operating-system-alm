import React from 'react'
import { Link } from "react-router-dom";

export default function The120GrowthBenchmarkContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <h2>The 120 Growth Benchmark</h2>	           					
            </div>
            <div className="card">
                <div className="card-body">
                <div className="row">
                    <div className="col-md-12 contentleft">
                    <p>The 120 Growth Benchmark provides business leaders and investors with a clear and detailed picture of the organization's growth strategy, opportunities, and performance. </p>
                    <p>With the 120 Growth Benchmark, you get a single source of reality to base decisions and uncover growth insights so you make constant progress toward your goals.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-6 contentleft table-responsive">
                <div className="card">
                    <div className="card-body">
                    <ul>
                        <li><Link to="/competitive-advantage">1.  Competitive Advantage</Link></li>
                        <li><Link to="/financial-performance">2.  Financial Performance</Link></li>
                        <li><Link to="/customer-acquisition">3.  Customer Acquisition</Link></li>
                        <li><Link to="/customer-retention">4.  Customer Retention</Link></li>
                    </ul>
                    </div>   
                </div>
                </div>
                <div className="col-md-12 col-lg-6 contentleft table-responsive">
                <div className="card">
                    <div className="card-body">
                    <ul>
                        <li><Link to="/customer-transactions">5.  Customer Transactions</Link></li>
                        <li><Link to="/ability">6.  Ability</Link></li>
                        <li><Link to="/agility">7.  Agility</Link></li>
                        <li><Link to="/long-term-growth">8.  Long-Term Growth</Link></li>
                    </ul>
                    </div>   
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
