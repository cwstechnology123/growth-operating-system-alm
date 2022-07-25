import React, { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';

export default function ClientInputContent() {
  const alert = useAlert();
  const currentYear = new Date().getFullYear(); // previousYear
  const previousYear1 =  currentYear-1;
  const previousYear2 =  previousYear1-1;
  const previousYear3 =  previousYear2-1;

  // redux dispatch
  const dispatch = useDispatch();
  const {clientInputsData} = bindActionCreators(actionCreators,dispatch)

  const clientInputs = useSelector(state => state.clientInputs)

  const [Inputs, setInputs] = useState({
    clientInputsD11: clientInputs.clientInputsD11,
    clientInputsD12: clientInputs.clientInputsD12,
    clientInputsD13: clientInputs.clientInputsD13,
    clientInputsH16: clientInputs.clientInputsH16,
    clientInputsH17: clientInputs.clientInputsH17,
    clientInputsH18: clientInputs.clientInputsH18,
    clientInputsH19: clientInputs.clientInputsH19,
    clientInputsH20: clientInputs.clientInputsH20,
    clientInputsH21: clientInputs.clientInputsH21,
    clientInputsH22: clientInputs.clientInputsH22,
    clientInputsH23: clientInputs.clientInputsH23,
    clientInputsH24: clientInputs.clientInputsH24,
    clientInputsH25: clientInputs.clientInputsH25,
    clientInputsH26: clientInputs.clientInputsH26,
    clientInputsH27: clientInputs.clientInputsH27,
    clientInputsH30: clientInputs.clientInputsH30,
    clientInputsH31: clientInputs.clientInputsH31,
    clientInputsH32: clientInputs.clientInputsH32,
    clientInputsH33: clientInputs.clientInputsH33,
    clientInputsH36: clientInputs.clientInputsH36,
    clientInputsH37: clientInputs.clientInputsH37,
    clientInputsH38: clientInputs.clientInputsH38,
    clientInputsH41: clientInputs.clientInputsH41,
  });

  useEffect(() => {
    clientInputsData("clientInputsGrowthRate");
    clientInputsData("clientInputsCAGR");
  }, [Inputs.clientInputsD11, Inputs.clientInputsD12, Inputs.clientInputsD13]);

  return (
  <div className="content-body">
  {/* row */}
  <div className="container-fluid">
    <div className="head-title">            		
      <h2>Client Inputs</h2>	
      <p>State of the Business</p>				
    </div>
    <div className="card inptbg">
      <div className="card-body pl-0">
        <div className="row">
          <div className="col-xl-8 ">
            <div className="table-responsive">
              <table className="table table-responsive-md ">
                <thead className="thead-primary">
                  <tr>
                    <th colSpan={2}>Annual Sales</th>
                    <th>Growth Rate</th>
                    <th>CAGR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{width: '30%'}}>{previousYear1}</td>
                    <td>
                      <div className="inputbages">
                        <span className="dollors">$</span>
                        <input 
                          type="text" 
                          name="annual_sales_1" 
                          className="form-control" 
                          placeholder="0" 
                          value={Inputs.clientInputsD11}  
                          onChange={(event) => {setInputs({...Inputs, clientInputsD11 : event.target.value});clientInputsData("clientInputsD11", event.target.value)}}
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }} />
                      </div>
                    </td>
                    <td>{clientInputs.clientInputsE11}%</td>
                    <td>{clientInputs.clientInputsF11}%</td>
                  </tr>
                  <tr>
                    <td style={{width: '30%'}}>{previousYear2}</td>
                    <td>
                      <div className="inputbages">
                        <span className="dollors">$</span>
                        <input 
                          type="text" 
                          name="annual_sales_2" 
                          className="form-control" 
                          placeholder="0" 
                          value={Inputs.clientInputsD12}  
                          onChange={(event) => {setInputs({...Inputs, clientInputsD12 : event.target.value});clientInputsData("clientInputsD12", event.target.value)}}
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}/>
                      </div>
                    </td>
                    <td>{clientInputs.clientInputsE12}%</td>
                    <td />
                  </tr>
                  <tr>
                    <td style={{width: '30%'}}>{previousYear3}</td>
                    <td>
                      <div className="inputbages">
                        <span className="dollors">$</span>
                        <input 
                          type="text" 
                          name="annual_sales_3" 
                          className="form-control" 
                          placeholder="0" 
                          value={Inputs.clientInputsD13}  
                          onChange={(event) => {setInputs({...Inputs, clientInputsD13 : event.target.value});clientInputsData("clientInputsD13", event.target.value)}}
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}/>
                      </div>
                    </td>
                    <td />
                    <td />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="table-responsive">
              <table className="table table-responsive">
                <thead className="thead-primary">
                  <tr>
                    <th>Comments</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control"/></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control"/></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="table-responsive">
              <table className="table table-responsive">
                <thead className="thead-primary">
                  <tr>
                    <th colSpan={2}>Your Customers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{width: '80%'}}>Active Customers in {previousYear1}:</td>
                    <td><input type="text" 
                          name="active-customer-one" 
                          className="form-control" 
                          placeholder={0} 
                          value={Inputs.clientInputsH16}  
                          onChange={(event) => {setInputs({...Inputs, clientInputsH16 : event.target.value});clientInputsData("clientInputsH16", event.target.value)}} 
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}/></td>
                  </tr>
                  <tr>
                    <td style={{width: '80%'}}>Active Customers in {previousYear2}:</td>
                    <td><input type="text" 
                          className="form-control" 
                          placeholder={0} 
                          value={Inputs.clientInputsH17}  
                          onChange={(event) => {setInputs({...Inputs, clientInputsH17 : event.target.value});clientInputsData("clientInputsH17", event.target.value)}} 
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}/></td>
                  </tr>
                  <tr>
                    <td style={{width: '80%'}}>Active Customers in {previousYear3}:</td>
                    <td><input type="text" 
                          className="form-control" 
                          placeholder={0} 
                          value={Inputs.clientInputsH18}  
                          onChange={(event) => {setInputs({...Inputs, clientInputsH18 : event.target.value});clientInputsData("clientInputsH18", event.target.value)}} 
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}/></td>
                  </tr>
                  <tr>
                    <td style={{width: '80%'}}>Average Customer Buying Lifetime (years):</td>
                    <td><input type="text" 
                          className="form-control" 
                          placeholder={0} 
                          value={Inputs.clientInputsH19}  
                          onChange={(event) => {setInputs({...Inputs, clientInputsH19 : event.target.value});clientInputsData("clientInputsH19", event.target.value)}} 
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}/></td>
                  </tr>
                  <tr>
                    <td style={{width: '80%'}}>Total Number of inactive customers from the last 3 years:</td>
                    <td><input type="text" 
                          className="form-control" 
                          placeholder={0} 
                          value={Inputs.clientInputsH20}  
                          onChange={(event) => {setInputs({...Inputs, clientInputsH20 : event.target.value});clientInputsData("clientInputsH20", event.target.value)}} 
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}/></td>
                  </tr>
                  <tr>
                    <td style={{width: '80%'}}>Total Number of Un-sold, un-closed Prospects from the last 2 years:</td>
                    <td><input 
                            type="text" 
                            name="" 
                            className="form-control" 
                            placeholder={0} 
                            value={Inputs.clientInputsH21}  
                            onChange={(event) => {setInputs({...Inputs, clientInputsH21 : event.target.value});clientInputsData("clientInputsH21", event.target.value)}} 
                            onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}/></td>
                  </tr>
                  <tr>
                    <td style={{width: '80%'}}>Current Customers attrition Rate (Opposite of customer retention)</td>
                    <td>
                      <div className="inputbages">
                        <input type="text" 
                            className="form-control" 
                            placeholder={0} 
                            value={Inputs.clientInputsH22}  
                            onChange={(event) => {setInputs({...Inputs, clientInputsH22 : event.target.value});clientInputsData("clientInputsH22", event.target.value)}} 
                            onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}/> <span className="dollors">%</span></div></td>
                  </tr>
                  <tr>
                    <td style={{width: '80%'}}>Customers who purchased from you in {previousYear1}</td>
                    <td><input type="text" 
                            name="total_customer_one" 
                            value={Inputs.clientInputsH16} 
                            className="form-control" 
                            placeholder={0} disabled 
                            /></td>
                  </tr>
                  <tr>
                    <td style={{width: '80%'}}>Customers from {previousYear2} who also purchased in {previousYear1}</td>
                    <td><input type="text" 
                            className="form-control" 
                            placeholder={0} 
                            value={Inputs.clientInputsH24}  
                            onChange={(event) => {setInputs({...Inputs, clientInputsH24 : event.target.value});clientInputsData("clientInputsH24", event.target.value)}} 
                            onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}/></td>
                  </tr>
                  <tr>
                    <td style={{width: '80%'}}>Number of Leads generation last year:</td>
                    <td><input 
                          type="text" 
                          name="lea" 
                          className="form-control" 
                          placeholder={0} 
                          value={Inputs.clientInputsH25}  
                          onChange={(event) => {setInputs({...Inputs, clientInputsH25 : event.target.value});clientInputsData("clientInputsH25", event.target.value)}}
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}/></td>
                  </tr>
                  <tr>
                    <td style={{width: '80%'}}>Average leads conversion Rate (Closing ratio)</td>
                    <td>
                      <div className="inputbages">
                        <input 
                          type="text" 
                          name="conversionRate" 
                          className="form-control" 
                          max="100" 
                          placeholder={0}
                          value={Inputs.clientInputsH26}  
                          onChange={(event) => {setInputs({...Inputs, clientInputsH26 : event.target.value});clientInputsData("clientInputsH26", event.target.value)}}
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}/><span className="dollors">%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{width: '80%'}}>Refferrals generated last year:</td>
                    <td><input type="text" 
                            className="form-control" 
                            placeholder={0} 
                            value={Inputs.clientInputsH27}  
                            onChange={(event) => {setInputs({...Inputs, clientInputsH27 : event.target.value});clientInputsData("clientInputsH27", event.target.value)}} 
                            onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}/></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="table-responsive">
              <table className="table table-responsive">
                <thead className="thead-primary">
                  <tr>
                    <th>Comments</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="table-responsive">
              <table className="table table-responsive">
                <thead className="thead-primary">
                  <tr>
                    <th colSpan={2}>Customer Transactions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{width: '80%'}}>Number of total transactions in {previousYear1}:</td>
                    <td><input type="text" 
                            className="form-control" 
                            placeholder="0" 
                            value={Inputs.clientInputsH30}  
                            onChange={(event) => {setInputs({...Inputs, clientInputsH30 : event.target.value});clientInputsData("clientInputsH30", event.target.value)}} 
                            onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}/></td>
                  </tr>
                  <tr>
                    <td style={{width: '80%'}}>Number of total transactions in {previousYear2}:</td>
                    <td><input type="text" 
                            className="form-control" 
                            placeholder={"0"} 
                            value={Inputs.clientInputsH31}  
                            onChange={(event) => {setInputs({...Inputs, clientInputsH31 : event.target.value});clientInputsData("clientInputsH31", event.target.value)}} 
                            onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}/></td>
                  </tr>
                  <tr>
                    <td style={{width: '80%'}}>Number of total transactions in {previousYear3}:</td>
                    <td><input type="text" 
                            className="form-control" 
                            placeholder={0} 
                            value={Inputs.clientInputsH32}  
                            onChange={(event) => {setInputs({...Inputs, clientInputsH32 : event.target.value});clientInputsData("clientInputsH32", event.target.value)}} 
                            onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}/></td>
                  </tr>
                  <tr>
                    <td style={{width: '80%'}}>Average transaction value in {previousYear1}:</td>
                    <td><input type="text" 
                          className="form-control" 
                          placeholder="0" 
                          value={Inputs.clientInputsH33}  
                          onChange={(event) => {setInputs({...Inputs, clientInputsH33 : event.target.value});clientInputsData("clientInputsH33", event.target.value)}} 
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}/></td>
                  </tr>          							
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="table-responsive">
              <table className="table table-responsive">
                <thead className="thead-primary">
                  <tr>
                    <th>Comments</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="table-responsive">
              <table className="table table-responsive">
                <thead className="thead-primary">
                  <tr>
                    <th colSpan={2}>Gross Profit Margin</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{width: '80%'}}>Gross Profit Margin in {previousYear1}:</td>
                    <td>
                      <div className="inputbages">
                        <input type="text" 
                            className="form-control" 
                            max="100" 
                            placeholder={0} 
                            value={Inputs.clientInputsH36}  
                            onChange={(event) => {setInputs({...Inputs, clientInputsH36 : event.target.value});clientInputsData("clientInputsH36", event.target.value)}} 
                            onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}/>
                        <span className="dollors">%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{width: '80%'}}>Gross Profit Margin in {previousYear2}:</td>
                    <td>
                      <div className="inputbages">
                        <input type="text" 
                            className="form-control" 
                            max="100" 
                            placeholder={0} 
                            value={Inputs.clientInputsH37}  
                            onChange={(event) => {setInputs({...Inputs, clientInputsH37 : event.target.value});clientInputsData("clientInputsH37", event.target.value)}} 
                            onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}/>
                        <span className="dollors">%</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{width: '80%'}}>Gross Profit Margin in {previousYear3}:</td>
                    <td>
                      <div className="inputbages">
                        <input type="text" 
                            className="form-control" 
                            max="100" 
                            placeholder={0} 
                            value={Inputs.clientInputsH38}  
                            onChange={(event) => {setInputs({...Inputs, clientInputsH38 : event.target.value});clientInputsData("clientInputsH38", event.target.value)}} 
                            onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}/>
                        <span className="dollors">%</span>
                      </div>
                    </td>
                  </tr>        							
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="table-responsive">
              <table className="table table-responsive">
                <thead className="thead-primary">
                  <tr>
                    <th>Comments</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="table-responsive">
              <table className="table table-responsive">
                <thead className="thead-primary">
                  <tr>
                    <th colSpan={2}>Valuation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{width: '80%'}}>Most Current valuation Multiple:</td>
                    <td><input type="text" 
                            className="form-control" 
                            placeholder="0" 
                            value={Inputs.clientInputsH41}  
                            onChange={(event) => {setInputs({...Inputs, clientInputsH41 : event.target.value});clientInputsData("clientInputsH41", event.target.value)}} 
                            onKeyPress={(event) => {
                              if (/^[-+]?[0-9]+\.[0-9]+$/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}/></td>
                  </tr>       							
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="table-responsive">
              <table className="table table-responsive">
                <thead className="thead-primary">
                  <tr>
                    <th>Comments</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="text" className="form-control" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="table-responsive">
              <button className="btn btn-primary float-end m-2"  onClick={() => alert.show('Data saved successfully!')}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
