import React from 'react'
import { Link } from "react-router-dom";

export default function RevanueGrowthDriversContent() {
  return (
      <div className="content-body">
          {/* row */}
         <div className="container-fluid">
            <div className="head-title">
                <h2>Revanue Growth Drivers</h2>	           					
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
            <div className="row">
                <div className="col-md-4 contentleft table-responsive">
                <div className="card">
                    <div className="card-body">
                    <h3>Customer Acquisition</h3>
                    <ul>
                        <li><Link to="/lead-generation">1.  Lead Generation</Link></li>
                        <li><Link to="/conversion">2.  Conversion</Link></li>
                        <li><Link to="/referrals">3.  Referrals</Link></li>
                    </ul>
                    </div>   
                </div>
                </div>
                <div className="col-md-4 contentleft table-responsive">
                <div className="card">
                    <div className="card-body">
                    <h3>Customer Retention</h3>
                    <ul>
                        <li><Link to="/purchase-frequency">4.  Purchase Frequency</Link></li>
                        <li><Link to="/buying-lifetime">5.  Buying Lifetime</Link></li>
                        <li><Link to="/customer-attrition">6.  Customer Attrition</Link></li>
                        <li><Link to="/customer-reactivation">7.  Reactivation</Link></li>
                    </ul>
                    </div>   
                </div>
                </div>
                <div className="col-md-4 contentleft table-responsive">
                <div className="card">
                    <div className="card-body">
                    <h3>Customer Transactions</h3>
                    <ul>
                        <li><Link to="/average-transaction-value">8.  Average Transaction Value</Link></li>
                        <li><Link to="/profit-margin">9.  Profit Margin</Link></li>
                    </ul>
                    </div>   
                </div>
                </div>
            </div>
        </div>
    </div>

  )
}
