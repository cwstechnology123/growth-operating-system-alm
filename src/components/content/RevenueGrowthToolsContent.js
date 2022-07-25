import React from 'react'
import { Link } from 'react-router-dom'

export default function RevenueGrowthToolsContent() {
  return (
        <div className="content-body">
            {/* row */}
            <div className="container-fluid">
                <div className="head-title">
                    <h2>Revenue Growth Tools </h2> 
                </div>
                <div className="card">
                    <div className="card-body">
                    <div className="row">
                        <div className="col-md-12 contentleft">
                        <p>Growth Planning is not something that can be done just once per year.  The 120 Growth Catalyst makes growth planning easy, fast, and thorough.  The result:  an agile growth strategy that keeps you consistently advancing toward your goals. </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row strategicpage">
                    <div className="col-md-4 contentleft">
                    <div className="card add-new-card">
                        <div className="card-body">
                        <h4>Revenue Growth Tools </h4>
                        <ul>
                            <li><Link to="/growth-option-scorecard">Growth Option Scorecard </Link></li>
                            <li><Link to="javascript:void(0);">90-Day Jumpstart </Link></li>
                            <li><Link to="/whats-working-now">What's Working Now </Link></li>
                            <li><Link to="/marketing-plan">Marketing Plan</Link></li>
                            <li><Link to="/sales-elevation-plan">Sales Elevation Plan</Link></li>
                            <li><Link to="/customer-communication-plan">Customer Communication Plan</Link></li>
                        </ul>
                        </div>   
                    </div>
                    </div>
                    <div className="col-md-4 contentleft">
                    <div className="card add-new-card">
                        <div className="card-body">
                        <h4>Opportunity Analysis</h4>
                        <ul>
                            <li><Link to="/find-the-Low-Hanging-Fruit">Find the Low Hanging Fruit</Link></li>
                            <li><Link to="/opportunity-ranking-analysis">Opportunity Ranking Analysis</Link></li>
                            <li><Link to="/project-prioritization-matrix">Project Prioritization Matrix</Link></li>
                            <li><Link to="/synergy-scoring-worksheet">Synergy Scoring Framework </Link></li>
                            <li><Link to="/alliance-evaluation-worksheet">Alliance Opportunity Evaluation</Link></li>
                        </ul>
                        </div>   
                    </div>
                    </div>
                    <div className="col-md-4 contentleft">
                    <div className="card add-new-card">
                        <div className="card-body">
                        <h4>Sales &amp; Sales Management</h4>
                        <ul>
                            <li><Link to="/javascript:void()">Sales Elevation</Link></li>
                            <li><Link to="/sales-elevation-plan">Sales Elevation Planning</Link></li>
                            <li><Link to="/sales-call-objectives">Sales Call Objectives</Link></li>
                            <li><Link to="/account-penetration-matrix">Account Penetration Matrix</Link></li>
                            <li><Link to="/objection-resolution-worksheet">Objection Resolution Worksheet</Link></li>
                            <li><Link to="/target-account-list-prioritization">Target Account Prioritization</Link></li>
                            <li><Link to="/target-account-planning">Target Account Planning</Link></li>
                            <li><Link to="/value-first-strategy-development">Value First Strategy</Link></li>
                            <li><Link to="/customer-transformation-model">Customer Transformation Worksheet </Link></li>
                            <li><Link to="/referral-strategy-worksheet">Referral Strategy</Link></li>
                        </ul>
                        </div>   
                    </div>
                    </div>
                    <div className="col-md-4 contentleft">
                    <div className="card add-new-card">
                        <div className="card-body">
                        <h4>Innovation</h4>
                        <ul>
                            <li><Link to="/innovate-or-optimize">Innovate or Optimize</Link></li>
                            <li><Link to="/innovation-concept-development">Innovation Concept Development</Link></li>
                            <li><Link to="/SCAMPER-Ideation">SCAMPER Ideation</Link></li>
                            <li><Link to="/PAINstorming">PAINstorming</Link></li>
                            <li><Link to="/outcome-driven-innovation">Outcome Driven Innovation</Link></li>
                            <li><Link to="/six-thinking-hats">Six Thinking Hats</Link></li>
                            <li><Link to="/agile-innovation">Agile Innovation</Link></li>
                            <li><Link to="/innovation-ranking-matrix">Innovation Ranking Analysis</Link></li>
                            <li><Link to="/jobs-to-be-done">Jobs To Be Done</Link></li>
                            <li><Link to="/insights-to-action-to-impact-worksheet">Insights to Action to Impact</Link></li>
                            <li><Link to="/disruptive-innovation">Disruptive Innovation</Link></li>
                            <li><Link to="/7-step-case-for-change">7-Step Case for Change</Link></li>
                            <li><Link to="/optimization-accelerator">Optimization Accelerator</Link></li>
                        </ul>
                        </div>   
                    </div>
                    </div>
                    <div className="col-md-4 contentleft">
                    <div className="card add-new-card">
                        <div className="card-body">
                        <h4>Customer Retention, Loyalty &amp; Experience </h4>
                        <ul>
                            <li><Link to="/customer-retention-loop">Customer Retention Loop </Link></li>
                            <li><Link to="/net-promoter-score">Net Promoter Score</Link></li>
                            <li><Link to="/customer-journey-mapping">Customer Journey Mapping</Link></li>
                            <li><Link to="/voice-of-the-customer-table">Voice of the Customer</Link></li>
                        </ul>
                        </div>   
                    </div>
                    </div>
                </div>
            </div>

        </div>

  )
}
