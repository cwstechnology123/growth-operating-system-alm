import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function MainContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <h2>Contents</h2>	            					
            </div>
            <div className="card">
                <div className="card-body">
                <div className="divflex">
                    <div className="leeftside">
                    <i className="bi bi-speedometer" />
                    </div>
                    <div className="righttside">
                    <h3>Introduction to the 120 Growth Catalyst™</h3>
                    <ul>
                        <li><Link to="/executive-summary">Executive Summary</Link></li>
                        <li><Link to="/improve-your-score">How the 120 Growth Catalyst™ Works</Link></li>
                    </ul>
                    </div>
                </div>
                <div className="divflex">
                    <div className="leeftside">
                    <i className="bi bi-activity" />
                    </div>
                    <div className="righttside">
                    <h3>State of the Business:  Benchmarking Your Performance &amp; Capabilities</h3>
                    <ul>
                        <li><Link to="/benchmark-Scorecard">Benchmark Scorecard</Link></li>
                        <li><Link to="/growth-driver-performance-overview">Growth Driver Performance Overview</Link></li>
                        <li><Link to="/benchmark-score-gap-analysis">Benchmark Score Gap Analysis</Link></li>
                    </ul>
                    </div>
                </div>
                <div className="divflex">
                    <div className="leeftside">
                    <i className="bi bi-lightbulb-off-fill" />
                    </div>
                    <div className="righttside">
                    <h3>Your Growth Potential:  Driving Short- and Long-Term Growth</h3>
                    <ul>
                        <li><Link to="/client-inputs">Client Inputs</Link></li>
                        <li><Link to="/customer-financial-value">Customer Financial Values</Link></li>
                        <li><a href="javascript:void(0);">The Power of 1%:  This is what a few 1% improvements can do for your business.</a></li>
                        <li><Link to="/impact-of-the-120-growth">Financial Impact of the 120 Growth Operating System™</Link></li>
                        <li><Link to="/creating-growth-momentum">Creating Growth Momentum</Link></li>
                        <li><Link to="/equity-evolution">Equity Evolution™ </Link></li>
                        <li><Link to="/finding-growth-in-your-business">Finding Growth in Your Business</Link></li>
                        <li><Link to="/what-is-driving-growth">What's Driving Growth?</Link></li>
                        <li><a href="javascript:void(0);">120 Growth Return On Investment</a></li>
                    </ul>
                    </div>
                </div>
                <div className="divflex">
                    <div className="leeftside">
                    <i className="bi bi-tools" />
                    </div>
                    <div className="righttside">
                    <h3>Revenue Growth Drivers</h3>
                    <ul>
                        <li><Link to="/lead-generation">Lead Generation</Link></li>
                        <li><Link to="/conversion">Conversion</Link></li>
                        <li><Link to="/referrals">Referrals</Link></li>
                        <li><Link to="/purchase-frequency">Purchase Frequency</Link></li>
                        <li><Link to="/buying-lifetime">Buying Lifetime</Link></li>
                        <li><Link to="/customer-attrition">Reducing Attrition</Link></li>
                        <li><Link to="/customer-reactivation">Customer Reactivation</Link></li>
                        <li><Link to="/average-transaction-value">Average Transaction Value</Link></li>
                        <li><Link to="/profit-margin">Profit Margin</Link></li>
                    </ul>
                    </div>
                </div>
                <div className="divflex">
                    <div className="leeftside">
                    <i className="bi bi-currency-exchange" />
                    </div>
                    <div className="righttside">
                    <h3>120 Growth Benchmark</h3>
                    <ul>
                        <li><Link to="/competitive-advantage">Competitive Advantage</Link></li>
                        <li><Link to="/financial-performance">Financial Performance</Link></li>
                        <li><Link to="/customer-acquisition">Customer Acquisition</Link></li>
                        <li><Link to="/customer-retention">Customer Retention</Link></li>
                        <li><Link to="/customer-transactions">Customer Transactions</Link></li>
                        <li><Link to="/ability">Ability</Link></li>
                        <li><Link to="/agility">Agility</Link></li>
                        <li><Link to="/long-term-growth">Long-Term Growth &amp; Enterprise Value</Link></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>

    </div>
  )
}
