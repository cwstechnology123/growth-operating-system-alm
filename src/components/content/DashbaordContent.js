import React from 'react'

export default function DashbaordContent() {
    return (
        <div className="content-body">
        {/* row */}
        <div className="container-fluid benchmark">
          <div className="head-title">
            <h2>Benchmark Scorecard</h2>	
            <p>120 Growth Benchmark score (orange) and scores for each of the 11 critical growth measures</p>				
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-3">
              <h3>120 Growth</h3>
              <div className="bench1">
                <p>Benchmark Score</p>
                <div className="benchbody d-flex justify-content-between">
                  <figure>
                    <img src="images/svg/i.png" alt="img" />
                  </figure>
                  <h2>54%</h2>
                </div>
              </div>
            </div> 
            <div className="col-md-12 col-lg-9">
              <h3>Short-Term Growth  (revenue)</h3>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                  <div className="bench1 green">
                    <p>Customer Acquisition</p>
                    <div className="benchbody d-flex justify-content-between">
                      <figure>
                        <img src="images/svg/i2.png" alt="img" />
                      </figure>
                      <h2>54%</h2>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="bench1 green">
                    <p>Customer Retention</p>
                    <div className="benchbody d-flex justify-content-between">
                      <figure>
                        <img src="images/svg/i3.png" alt="img" />
                      </figure>
                      <h2>54%</h2>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="bench1 green">
                    <p>Customer Transactions</p>
                    <div className="benchbody d-flex justify-content-between">
                      <figure>
                        <img src="images/svg/i4.png" alt="img" />
                      </figure>
                      <h2>54%</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <h3>Strategic Foundation</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="bench1 darkblue">
                    <p>Competitive Advantage</p>
                    <div className="benchbody d-flex justify-content-between">
                      <figure>
                        <img src="images/svg/i6.png" alt="img" />
                      </figure>
                      <h2>54%</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bench1 darkblue">
                    <p>Financial Performance</p>
                    <div className="benchbody d-flex justify-content-between">
                      <figure>
                        <img src="images/svg/i5.png" alt="img" />
                      </figure>
                      <h2>54%</h2>
                    </div>
                  </div>
                </div>
              </div>                     
            </div> 
            <div className="col-md-12 col-lg-6">
              <h3>Agility Engine</h3>
              <div className="row">                         
                <div className="col-md-6">
                  <div className="bench1 lightblue">
                    <p>Ability</p>
                    <div className="benchbody d-flex justify-content-between">
                      <figure>
                        <img src="images/svg/i7.png" alt="img" />
                      </figure>
                      <h2>54%</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bench1 lightblue">
                    <p>Agility</p>
                    <div className="benchbody d-flex justify-content-between">
                      <figure>
                        <img src="images/svg/i8.png" alt="img" />
                      </figure>
                      <h2>54%</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <div className="row">
            <div className="col-md-12">
              <h3>Long-Term Growth (valuation)</h3>
              <div className="row add-new-d">
                <div className="col-md-6 col-lg-3">
                  <div className="bench1 lighterblue">
                    <p>Strategic Value</p>
                    <div className="benchbody d-flex justify-content-between">
                      <figure>
                        <img src="images/svg/i9.png" alt="img" />
                      </figure>
                      <h2>54%</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="bench1 lighterblue">
                    <p>Customers</p>
                    <div className="benchbody d-flex justify-content-between">
                      <figure>
                        <img src="images/svg/i10.png" alt="img" />
                      </figure>
                      <h2>54%</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="bench1 lighterblue">
                    <p>Operations</p>
                    <div className="benchbody d-flex justify-content-between">
                      <figure>
                        <img src="images/svg/i11.png" alt="img" />
                      </figure>
                      <h2>54%</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="bench1 lighterblue">
                    <p>Growth Platform</p>
                    <div className="benchbody d-flex justify-content-between">
                      <figure>
                        <img src="images/svg/i12.png" alt="img" />
                      </figure>
                      <h2>54%</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}
