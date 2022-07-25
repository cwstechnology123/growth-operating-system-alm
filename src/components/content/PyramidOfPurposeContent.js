import React, { useState, useEffect } from 'react'

export default function PyramidOfPurposeContent() {

  return (
      <div className="content-body">
        {/* row */}
      <div className="container-fluid">
        <div className="head-title">
            <h2>Pyramid of Purpose</h2>	  
        </div> 
        <div className="card">
            <div className="card-body contentleft">
            <p>The Pyramid of Purpose is a tool that can help plan and communicate a business strategy across an organization. Each level of the pyramid represents a different question about the strategy that an employee could ask.  Starting at the base and working its way up, the answer to one question leads to the next:</p>  
            <ul>
                <li><b>Why? </b>-  The strategies that are created should all be created in service of fulfilling the mission of the company.</li>
                <li><b>What?</b> - The organization should list out the goals that will further its progress towards making its mission into a reality.</li>
                <li><b>How? </b>- This process involves determining what specific actions will be taken and when, as well as the resources that are needed.</li>
                <li><b>Who? </b>- Finally, in order to answer this question, the organization must identify who will be responsible for completing each task.</li>
            </ul>                 
            </div>
        </div>
        <div className="card">
            <div className="card-body pl-0">
            <div className="row">
                <div className="col-md-6">
                <div id="chartContainer" style={{height: 300, width: '100%'}} />
                </div>
                <div className="col-md-6">
                <div className="d-flex flex-colomn">
                    <h3>4. Who?</h3>
                    <div className="formgrp">
                    <textarea className="from-control" rows={3} defaultValue={""} />
                    </div>
                </div>
                <div className="d-flex flex-colomn">
                    <h3>3. How?</h3>
                    <div className="formgrp">
                    <textarea className="from-control" rows={3} defaultValue={""} />
                    </div>
                </div>
                <div className="d-flex flex-colomn">
                    <h3>2. What</h3>
                    <div className="formgrp">
                    <textarea className="from-control" rows={3} defaultValue={""} />
                    </div>
                </div>
                <div className="d-flex flex-colomn">
                    <h3>1. Why?</h3>
                    <div className="formgrp">
                    <textarea className="from-control" rows={3} defaultValue={""} />
                    </div>
                </div>
                </div>               
            </div>           
            </div>
        </div>
        {/***********************************
             Content body end
        ************************************/}
        {/***********************************
             Footer start
        ************************************/}
        <div className="footer">
            <div className="copyright">
            <p>Copyright © 2022, Growth Catalyst™</p>
            </div>
        </div>
        {/***********************************
             Footer end
        ************************************/}
        </div>

    </div>

  )
}
