import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import { BuyingLifetimeGraph } from "../graph/BuyingLifetimeGraph";


export default function LeadGenerationContent() {
    
    const dispatch = useDispatch();
    const { leadGenerationData, CustomerFinancialValuesData } = bindActionCreators(actionCreators, dispatch)
    CustomerFinancialValuesData("INITIAL_STATE");
    const clientInputs = useSelector(state => state.clientInputs)
    const CustomerFinancialValues = useSelector(state => state.CustomerFinancialValues)
    const leadGeneration = useSelector(state => state.leadGeneration)
    console.log(leadGeneration)

    const [Inputs, setInputs] = useState({
        leadGenerationD16: leadGeneration.leadGenerationD16
    });

    const { clientInputsH25, clientInputsH26, clientInputsH41 } = clientInputs
    let leadGenerationD15 = parseFloat(clientInputsH25) ? parseFloat(clientInputsH25) : 0 

    useEffect(() => {
        console.log('first');
        leadGenerationData("leadGenerationD15", leadGenerationD15);
        //leadGenerationData("leadGenerationD16", leadGeneration.leadGenerationD16);
    }, []);

    useEffect(() => {
        console.log('second');
        if(!isNaN(leadGenerationD15) && !isNaN(leadGeneration.leadGenerationD16)){
            leadGenerationData("leadGenerationImprovement", {
                CustomerFinancialValues,
                clientInputsH26,
                clientInputsH41
            });
        }
    }, [Inputs.leadGenerationD16, clientInputs.clientInputsH25]);

    const { leadGenerationD16, leadGenerationD20, leadGenerationE20, leadGenerationF20, leadGenerationG20, leadGenerationH20, leadGenerationI20, leadGenerationD21, leadGenerationE21, leadGenerationF21, leadGenerationG21, leadGenerationH21, leadGenerationI21, leadGenerationD25, leadGenerationE25, leadGenerationF25, leadGenerationG25, leadGenerationH25, leadGenerationI25, leadGenerationD26, leadGenerationE26, leadGenerationF26, leadGenerationG26, leadGenerationH26, leadGenerationI26, leadGenerationD28, leadGenerationE28, leadGenerationF28, leadGenerationG28, leadGenerationH28, leadGenerationI28,leadGenerationD29, leadGenerationE29, leadGenerationF29, leadGenerationG29, leadGenerationH29, leadGenerationI29,leadGenerationD31, leadGenerationE31, leadGenerationF31, leadGenerationG31, leadGenerationH31, leadGenerationI31 } = leadGeneration //object destructuring for leadGeneration

  return (
      <div className="content-body">
          {/* row */}
          <div className="container-fluid">
            <div className="head-title">
                <h2>Lead Generation</h2>	
                <p>Lead generation is simply the process of getting in front of your target customers to you can try to sell to them.</p>
            </div>
            <div className="row">
                <div className="col-xl-6 contentleft">
                <h4>Improving Lead Generation</h4>        				
                <div className="card h-auto">
                    <div className="card-body">
                    <a href="javascript:void(0);" className="leftbox"><i className="fas fa-redo" /></a>
                    <div className="d-flex justify-content-between">
                        <p>Leads <br />Generated Annually</p>
                        <form>
                        <input type="text" name className="form-control" placeholder={0} value={clientInputsH25} />
                        </form>
                    </div>
                    </div>
                </div>
                <div className="card h-auto redleft">
                    <div className="card-body">
                    <a href="javascript:void(0);" className="leftbox"><i className="fas fa-sync" /></a>   
                    <div className="d-flex justify-content-between">
                        <p>What improvement do<br /> you think is possible?</p>
                        <form>
                        <div className="inputbages">
                            <input 
                                type="text" 
                                name="improvementPrcnt" 
                                className="form-control" 
                                placeholder={0}
                                value={Inputs.leadGenerationD16}
                                onChange={(event) => {
                                    setInputs({ ...Inputs, leadGenerationD16: event.target.value });
                                    leadGenerationData("leadGenerationD16", event.target.value)
                                }}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                                />
                            <span className="percent">%</span>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-6 contentleft">
                <h4>Lead Generation: Impact on Financial Performance</h4>
                <div className="card">
                    <div className="card-body">
                    <div className="textdiv">            						
                       <BuyingLifetimeGraph style={{minHeight: 270}} />
                    </div>
                    </div>
                </div>
                </div>
            </div>	
            <div className="card">
                <div className="card-body pl-0">
                <div className="table-responsive">
                    <table className="table table-responsive-md table-striped mb-0">
                    <thead>
                        <tr>
                        <th style={{width: '40%'}} className="table-primar" />
                        <th colSpan={2} style={{textAlign: 'center'}} className="bgradius">Year 1 Gains</th>
                        <th colSpan={5} style={{textAlign: 'center'}} className="bgradius">Long-Term Gains </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="thead-primary">
                        <th>Lead Generation Improvements</th>
                        <th>Your Projection</th>
                        <th>1% Quarterly Improvement</th>
                        <th>2 Years of 1% Improvements</th>
                        <th>3 Years of 1% Improvements</th>
                        <th>4 Years of 1% Improvements</th>
                        <th>5 Years of 1% Improvements</th>
                        </tr>
                        <tr>
                        <td style={{width: '40%'}}>New Leads Generated Annually</td>
                        <td>{leadGenerationD20}</td>
                        <td>{leadGenerationE20}</td>
                        <td>{leadGenerationF20}</td>
                        <td>{leadGenerationG20}</td>
                        <td>{leadGenerationH20}</td>
                        <td>{leadGenerationI20}</td>
                        </tr>
                        <tr>
                        <td style={{width: '40%'}}>Total Numbers of Leads Generated Annually</td>
                        <td>{leadGenerationD21}</td>
                        <td>{leadGenerationE21}</td>
                        <td>{leadGenerationF21}</td>
                        <td>{leadGenerationG21}</td>
                        <td>{leadGenerationH21}</td>
                        <td>{leadGenerationI21}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body pl-0">
                <div className="table-responsive">
                    <table className="table table-responsive-md table-striped mb-0">
                    <thead>
                        <tr>
                        <th style={{width: '40%'}}>Financial Improvements</th>
                        <th colSpan={2} style={{textAlign: 'center'}} className="bgradius">Year 1 Gains</th>
                        <th colSpan={5} style={{textAlign: 'center'}} className="bgradius">Long-Term Gains </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="thead-primary">
                        <th style={{width: '40%'}}>Annual Impact of Leads Generation</th>
                        <th>Your Projection</th>
                        <th>1% Quarterly Improvement</th>
                        <th>2 Years of 1% Improvements</th>
                        <th>3 Years of 1% Improvements</th>
                        <th>4 Years of 1% Improvements</th>
                        <th>5 Years of 1% Improvements</th>
                        </tr>
                        <tr>
                        <td style={{width: '40%'}}>Annual Sales</td>
                        <td>${Number(leadGenerationD25).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationE25).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationF25).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationG25).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationH25).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationI25).toLocaleString('en-IN')}</td>
                        </tr>
                        <tr>
                        <td style={{width: '40%'}}>Annual Profit</td>
                        <td>${Number(leadGenerationD26).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationE26).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationF26).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationG26).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationH26).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationI26).toLocaleString('en-IN')}</td>
                        </tr>
                        <tr className="thead-primary">
                        <th style={{width: '40%'}}>Lifetime Impact of Lead Generation</th>
                        <th>Your Projection</th>
                        <th>1% Quarterly Improvement</th>
                        <th>2 Years of 1% Improvements</th>
                        <th>3 Years of 1% Improvements</th>
                        <th>4 Years of 1% Improvements</th>
                        <th>5 Years of 1% Improvements</th>
                        </tr>
                        <tr>
                        <td style={{width: '40%'}}>Lifetime Sales</td>
                        <td>${Number(leadGenerationD28).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationE28).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationF28).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationG28).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationH28).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationI28).toLocaleString('en-IN')}</td>
                        </tr>
                        <tr>
                        <td style={{width: '40%'}}>Lifetime Profit</td>
                        <td>${Number(leadGenerationD29).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationE29).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationF29).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationG29).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationH29).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationI29).toLocaleString('en-IN')}</td>
                        </tr>
                        <tr className="thead-primary">
                        <th style={{width: '40%'}}>Valuation Impact of Lead Generation</th>
                        <th>Your Projection</th>
                        <th>1% Quarterly Improvement</th>
                        <th>2 Years of 1% Improvements</th>
                        <th>3 Years of 1% Improvements</th>
                        <th>4 Years of 1% Improvements</th>
                        <th>5 Years of 1% Improvements</th>
                        </tr>
                        <tr>
                        <td style={{width: '40%'}}>Estimated Valuation Impact</td>
                        <td>${Number(leadGenerationD31).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationE31).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationF31).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationG31).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationH31).toLocaleString('en-IN')}</td>
                        <td>${Number(leadGenerationI31).toLocaleString('en-IN')}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>

    </div>

  )
}
