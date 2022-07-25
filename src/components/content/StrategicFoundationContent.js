import React from 'react'
import { Link } from "react-router-dom";

export default function StrategicFoundationContent() {
  return (
    <div className="content-body">
        {/* row */}
       <div className="container-fluid">
            <div className="head-title">
                <h2>Strategic Foundation</h2>	           					
            </div>
            <div className="card">
                <div className="card-body">
                <div className="row">
                    <div className="col-md-12 contentleft">
                    <p>Growth Planning is not something that can be done just once per year.  The 120 Growth Catalyst makes growth planning easy, fast, and thorough.  The result:  an agile growth strategy that keeps you consistently advancing toward your goals.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="row strategicpage">
                <div className="col-md-4 contentleft">
                <div className="card">
                    <div className="card-body">
                    <h4>General Strategy Tools</h4>
                    <ul>
                        <li><Link to="/10-5-3-1-Planning">10-5-3-1 Planning</Link></li>
                        <li><Link to="/strategy-and-innovation-map">Strategy &amp; Innovation Map</Link></li>
                        <li><Link to="/critical-growth-factors">Critical Growth Factors</Link></li>
                        <li><Link to="/strategy-uncertainty-map">Strategy Uncertainty Map</Link></li>
                        <li><Link to="/break-through-strategy">Breakthrough Strategy</Link></li>
                        <li><Link to="/the-big-SWOT">The Big SWOT</Link></li>
                        <li><Link to="/customer-personas">Customer Personas</Link></li>
                        <li><Link to="/values-mission-goals">Values-Mission-Goals</Link></li>
                        <li><a href="javascript:void(0);">Go-To-Market Strategy</a></li>
                    </ul>
                    </div>   
                </div>
                </div>
                <div className="col-md-4 contentleft">
                <div className="card">
                    <div className="card-body">
                    <h4>General Strategy Tools (cont)</h4>
                    <ul>
                        <li><a href="javascript:void(0);">Pyramid of Purpose</a></li>
                        <li><a href="javascript:void(0);">Growth Progress Report</a></li>
                    </ul>
                    <h4>Competitive Strategy</h4>
                    <ul>
                        <li><a href="javascript:void(0);">Five Step Strategy</a></li>
                        <li><a href="javascript:void(0);">Competitive Analysis</a></li>
                        <li><a href="javascript:void(0);">Competitive Advantage Audit</a></li>
                        <li><a href="javascript:void(0);">VRIO Framework</a></li>
                        <li><a href="javascript:void(0);">Differentiation Diagnostic</a></li>
                        <li><a href="javascript:void(0);">ADL Matrix</a></li>
                    </ul>
                    </div>   
                </div>
                </div>
                <div className="col-md-4 contentleft">
                <div className="card">
                    <div className="card-body">
                    <h4>Competitive Strategy (cont)</h4>
                    <ul>
                        <li><a href="brand-scorecard.html">Brand Scorecard</a></li>
                        <li><a href="javascript:void()">Positioning Matrix</a></li>
                        <li><a href="javascript:void()">Five Forces Framework</a></li>
                        <li><a href="javascript:void()">Innovative Offering Analysis</a></li>
                    </ul>
                    <h4>Value Creation</h4>
                    <ul>
                        <li><a href="javascript:vpod(0);">Four Forces of Value</a></li>
                        <li><a href="javascript:vpod(0);">Customer Transformation Model</a></li>
                        <li><a href="javascript:vpod(0);">Value Proposition Template</a></li>
                    </ul>
                    </div>   
                </div>
                </div>
            </div>
            </div>

    </div>
  )
}
