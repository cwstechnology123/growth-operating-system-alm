import React from 'react'
import { Link } from "react-router-dom";

export default function GrowthPlanningContent() {
  return (
    <div className="content-body">
        {/* row */}
       <div className="container-fluid">
            <div className="head-title">
                <h2>Growth Planning Tools</h2>	           					
            </div>
            <div className="card">
                <div className="card-body">
                <div className="row">
                    <div className="col-md-6 contentleft">
                    <p>There are Nine Organic Revenue Growth Drivers.  The 120 Growth Catalyst can help you activate, align, and improve the performance of all nine, generating controlled and repeatable growth.</p>
                    </div>
                    <div className="col-md-6">
                    {/* <img src=""> */}
                    </div>
                </div>
                </div>
            </div>
            <div className="row sameheight">
                <div className="col-md-4 contentleft table-responsive">
                <div className="card">
                    <div className="card-body">
                    <h3>Annual Planning</h3>
                    <ul>
                        <li><Link to="/120-growth-benchmark">1. 120 Growth Benchmark</Link></li>
                        <li><Link to="/10-5-3-1-Planning">2. 10-5-3-1 Planning</Link></li>
                        <li><Link to="/five-step-strategy">3. Five Step Strategy</Link></li>
                        <li><Link to="/brand-scorecard">4. Brand Scorecard</Link></li>
                        <li><Link to="/annual-growth-plan">5. Annual Growth Plan</Link></li>
                        <li><Link to="/marketing-plan">6. Marketing Plan</Link></li>
                        <li><Link to="/sales-elevation-plan">7. Sales Elevation Plan</Link></li>
                        <li><Link to="/customer-communication-plan">8. Customer Communication Plan</Link></li>
                        <li><Link to="/pyramid-of-purpose">9. Pyaramid of Purpose</Link></li>
                        <li><Link to="/growth-progress-report">10. Growth Progress Report</Link></li>
                        <li><Link to="/what-is-working-now">11. What's Working Now</Link></li>
                    </ul>
                    </div>   
                </div>
                </div>
                <div className="col-md-4 contentleft table-responsive">
                <div className="card">
                    <div className="card-body">
                    <h3>Quaterly &amp; Monthly Planning</h3>
                    <ul>
                        <li><Link to="/quarterly-and-monthly-planning">12. Quaterly &amp; Monthly Growth Planning</Link></li>
                        <li><Link to="/innovate-or-optimize">13. Innovate Or Optimize?</Link></li>
                        <li><a href="javascript:void()">14. Find the Low-Hanging Fruit</a></li>
                        <li><Link to="/marketing-plan">15. Marketing Plan</Link></li>
                        <li><Link to="/sales-elevation-plan">16. Sales Elevation Plan</Link></li>
                        <li><Link to="/customer-communication-plan">17. Customer Communication Plan</Link></li>
                        <li><a href="javascript:void()">18. Cost Savings and waste Reduction</a></li>
                        <li><a href="javascript:void()">19. Playbook Creation Template</a></li>
                        <li><Link to="/pyramid-of-purpose">20. Pyaramid of Purpose</Link></li>
                        <li><Link to="/growth-progress-report">21. Growth Progress Report</Link></li>
                        <li><Link to="/what-is-working-now">22. What's Working Now</Link></li>
                    </ul>
                    </div>   
                </div>
                </div>
                <div className="col-md-4 contentleft table-responsive">
                <div className="card">
                    <div className="card-body">
                    <h3>Weekly Planning</h3>
                    <ul>
                        <li><a href="javascript:void()">23. 15-Minute Growth Meeting</a></li>
                        <li><a href="javascript:void()">24. Testing Secquence</a></li>
                        <li><a href="javascript:void()">25. Testing Report</a></li>
                        <li><a href="javascript:void()">26. Playbook Creation Template</a></li>
                    </ul>
                    </div>   
                </div>
                </div>
            </div>
            </div>

    </div>
  )
}
