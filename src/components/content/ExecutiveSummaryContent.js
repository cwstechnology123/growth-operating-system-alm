import React from 'react'
import { Link } from "react-router-dom";

export default function ExecutiveSummaryContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <h2>Executive Summary</h2>	            					
            </div>
            <div className="card">
                <div className="card-body contentleft">
                <h4>What exactly is the 120 Growth Catalyst™?</h4>
                <p>It is a short, the 120 Growth Catalyst™ is a performance benchmarking and growth planning system that simplifies achieving sustained growth in competitive markets.  Tailored specifically to your unique circumstances and objectives, it provides a systematic framework for driving organic revenue growth, company valuation, and building an agile competitive advantage.</p>
                <p>As a strategic planning tool, the 120 Growth Catalyst™ links strategy to capabilities, capabilities to performance, and performance to sustainable growth.  In volatile and uncertain markets, it's more important than ever to rely on data to guide your decisions.  Even though our primary objective is to improve hard financial performance, the 120 Growth Catalyst™ also puts quantifiable measurements on often overlooked and neglected soft areas, too.  This empowers your leaders to measure and improve both team capabilities and overall growth performance.</p>
                <p><b>In summary, the 120 Growth Catalyst™ can be your single source of reality for uncovering growth opportunities and basing decisions that help you make constant progress toward your goals.</b></p>
                </div>
            </div>
            <div className="card backbgg">
                <div className="card-body">
                <h4>Why should you care?</h4>
                <div className="divflex">
                    <div className="leftsummary">
                    <i className="bi bi-hand-thumbs-up" />
                    </div>
                    <div className="rightsummary">
                    <p>The 120 Growth Catalyst™ makes it easier for established companies to sustain growth in a controlled, repeatable, and methodical way... even in competitive and disrupted markets.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <h2>01</h2>
                    <h3>Small Changes = Big Results</h3>
                    <p>We help you turn a few small and very achievable 1% improvements into 20% annual growth in sales, profit, and company valuation.</p>
                    <p>The small, focused changes won't disrupt your daily operations, and will likely save you both time and money over the period of the year.</p>
                    </div>
                    <div className="col-md-4">
                    <h2>02</h2>
                    <h3>Greater Clarity &amp; Control</h3>
                    <p>Focus and unify your teams around shared priorities while building resilience and minimizing the risks associated with growth.</p>
                    <p>Get your teams  aligned and operating from the same page as you build repeatable growth systems.</p>
                    </div>
                    <div className="col-md-4">
                    <h2>03</h2>
                    <h3>Build an Agile Growth Strategy</h3>
                    <p>While most companies struggle with change and increased competition, you will build a durable competitive advantage.</p>
                    <p>Develop your ability to outmanuever and out-innovate competition while quickly adapting to changing conditions.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="linkbtn">
                <Link to="/improve-your-score"><i className="fa fa-arrow-left" /> Click here to see how the 120 Growth Catalyst™ works.</Link>
            </div>
        </div>
    </div>
  )
}
