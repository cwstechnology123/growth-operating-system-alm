import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import { CustomerAttritionGraph } from "../graph/CustomerAttritionGraph";
import { Link } from "react-router-dom";

export default function CustomerAttritionContent() {

    const dispatch = useDispatch();
    const { reducingAttritionData, CustomerFinancialValuesData } = bindActionCreators(actionCreators, dispatch)
    CustomerFinancialValuesData("INITIAL_STATE");
    const clientInputs = useSelector(state => state.clientInputs)
    const CustomerFinancialValues = useSelector(state => state.CustomerFinancialValues)
    const impactof120GrowthOS = useSelector(state => state.impactof120GrowthOS)
    const reducingAttrition = useSelector(state => state.reducingAttrition)
    //console.log(reducingAttrition)

    const [Inputs, setInputs] = useState({
        reducingAttritionD13: reducingAttrition.reducingAttritionD13
    });

    const { clientInputsH22, clientInputsH41 } = clientInputs
    let reducingAttritionD12 = parseFloat(clientInputsH22) ? parseFloat(clientInputsH22) : 0 

    const {impactof120GrowthOSH23, impactof120GrowthOSI23, impactof120GrowthOSJ23, impactof120GrowthOSK23} = impactof120GrowthOS

    useEffect(() => {
        console.log('first');
        reducingAttritionData("reducingAttritionD12", reducingAttritionD12);
        reducingAttritionData("reducingAttritionD13", reducingAttrition.reducingAttritionD13);
    }, []);

    useEffect(() => {
        console.log('second');
        if(!isNaN(reducingAttritionD12) && !isNaN(reducingAttrition.reducingAttritionD13)){
            reducingAttritionData("reducingAttritionImprovement", {
                reducingAttritionD12,
                clientInputsH22,
                clientInputsH41,
                CustomerFinancialValues,
                impactof120GrowthOSH23,
                impactof120GrowthOSI23,
                impactof120GrowthOSJ23,
                impactof120GrowthOSK23
            });
        }
    }, [Inputs.reducingAttritionD13]);

    const { reducingAttritionD16, reducingAttritionD17, reducingAttritionD18, reducingAttritionD19, reducingAttritionD23, reducingAttritionE23, reducingAttritionF23, reducingAttritionG23, reducingAttritionH23, reducingAttritionI23, reducingAttritionD24, reducingAttritionE24, reducingAttritionF24, reducingAttritionG24, reducingAttritionH24, reducingAttritionI24, reducingAttritionD25, reducingAttritionE25, reducingAttritionF25, reducingAttritionG25, reducingAttritionH25, reducingAttritionI25, reducingAttritionD26, reducingAttritionE26, reducingAttritionF26, reducingAttritionG26, reducingAttritionH26, reducingAttritionI26, reducingAttritionD30, reducingAttritionE30, reducingAttritionF30, reducingAttritionG30, reducingAttritionH30, reducingAttritionI30,reducingAttritionD31, reducingAttritionE31, reducingAttritionF31, reducingAttritionG31, reducingAttritionH31, reducingAttritionI31, reducingAttritionD33, reducingAttritionE33, reducingAttritionF33, reducingAttritionG33, reducingAttritionH33, reducingAttritionI33, reducingAttritionD34, reducingAttritionE34, reducingAttritionF34, reducingAttritionG34, reducingAttritionH34, reducingAttritionI34, reducingAttritionD36, reducingAttritionE36, reducingAttritionF36, reducingAttritionG36, reducingAttritionH36, reducingAttritionI36  } = reducingAttrition //object destructuring for reducingAttrition

  return (
   <div className="content-body">
  {/* row */}
  <div className="container-fluid">
    <div className="head-title">
        <h2>Reducing Customer Attrition</h2>	
        <p>Customer attrition is the opposite of customer retention.It is the number of customers you lose over a period of time, and is often called churn or turnover.</p>				
    </div>
    <div className="row">
        <div className="col-xl-6 contentleft">
        <h4>Reducing Customer Attrition</h4>
        <div className="card h-auto">
            <div className="card-body">
            <Link to="/" className="leftbox"><i className="fas fa-redo" /></Link>
            <div className="d-flex justify-content-between">
                <p>Current customer Attrition Rate </p>
                <form>
                <div className="inputbages">
                    <input type="text" className="form-control" placeholder={0} value={reducingAttritionD12} disabled />
                    <span className="percentWhite">%</span>
                </div>
                </form>
            </div>
            </div>
        </div>
        <div className="card h-auto redleft">
            <div className="card-body">
            <Link to="/" className="leftbox"><i className="fas fa-sync" /></Link>   
            <div className="d-flex justify-content-between">
                <p>What improvement do<br /> you think is possible?</p>
                <form>
                <div className="inputbages">
                    <input 
                        type="text" 
                        name="reducingAttritionD13"
                        className="form-control"
                        placeholder={0}
                        value={Inputs.reducingAttritionD13}
                        onChange={(event) => {
                            setInputs({ ...Inputs, reducingAttritionD13: event.target.value });
                            reducingAttritionData("reducingAttritionD13", event.target.value)
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
        <div className="card h-auto pb-3">
            <div className="card-body pl-0"> 
            <div className="table-responsive">
                <table className="table table-striped table-responsive-md mb-0">
                <thead className="thead-primary">
                    <tr>
                    <th>Losses Due to Customer Attrition</th>
                    <th>Annual Losses</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Total active Customers</td>
                    <td>{Number(reducingAttritionD16).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                    </tr>
                    <tr>
                    <td>Customers Lost Annually</td>
                    <td>{Number(reducingAttritionD17).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                    </tr>
                    <tr>
                    <td>Sales Lost Annually</td>
                    <td>$ {Number(reducingAttritionD18).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                    </tr>
                    <tr>
                    <td>Profits Lost Annually</td>
                    <td>$ {Number(reducingAttritionD19).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
        <div className="col-xl-6 contentleft">
        <h4>Reducing Attrition: Impact on Financial Performence</h4>
        <div className="card">
            <div className="card-body">
            <div className="textdiv">            						
                <CustomerAttritionGraph style={{minHeight: 270}} />
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
                <th style={{width: '30%'}} />
                <th colSpan={2} style={{textAlign: 'center'}} className="bgradius">Year 1 Gains</th>
                <th colSpan={5} style={{textAlign: 'center'}} className="bgradius">Long-Term Gains </th>
                </tr>
            </thead>
            <tbody>
                <tr className="thead-primary">
                <th>New Customer Attrition Rate</th>
                <th>Your Projection</th>
                <th>1% Quarterly Improvement</th>
                <th>2 Years of 1% Improvements</th>
                <th>3 Years of 1% Improvements</th>
                <th>4 Years of 1% Improvements</th>
                <th>5 Years of 1% Improvements</th>
                </tr>
                <tr>
                <td style={{width: '30%'}}>Improved Customer Attrition Rate</td>
                <td>{Number(reducingAttritionD23).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}%</td>
                <td>{Number(reducingAttritionE23).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}%</td>
                <td>{Number(reducingAttritionF23).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}%</td>
                <td>{Number(reducingAttritionG23).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}%</td>
                <td>{Number(reducingAttritionH23).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}%</td>
                <td>{Number(reducingAttritionI23).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}%</td>
                </tr>
                <tr>
                <td style={{width: '30%'}}>Total Active Customers</td>
                <td>{Number(reducingAttritionD24).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>{Number(reducingAttritionE24).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>{Number(reducingAttritionF24).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>{Number(reducingAttritionG24).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>{Number(reducingAttritionH24).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>{Number(reducingAttritionI24).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                </tr>
                <tr>
                <td style={{width: '30%'}}>Customers Lost Annually</td>
                <td>{Number(reducingAttritionD25).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>{Number(reducingAttritionE25).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>{Number(reducingAttritionF25).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>{Number(reducingAttritionG25).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>{Number(reducingAttritionH25).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>{Number(reducingAttritionI25).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                </tr>
                <tr>
                <td style={{width: '30%'}}>Customers GainedAnnually by Reducing Attrition</td>
                <td>{Number(reducingAttritionD26).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>{Number(reducingAttritionE26).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>{Number(reducingAttritionF26).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>{Number(reducingAttritionG26).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>{Number(reducingAttritionH26).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>{Number(reducingAttritionI26).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
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
                <th style={{width: '30%'}}>Financial Improvements</th>
                <th colSpan={2} style={{textAlign: 'center'}} className="bgradius">Year 1 Gains</th>
                <th colSpan={5} style={{textAlign: 'center'}} className="bgradius">Long-Term Gains </th>
                </tr>
            </thead>
            <tbody>
                <tr className="thead-primary">
                <th style={{width: '30%'}}>Annual Impact of Reducing Customer Attrition</th>
                <th>Your Projection</th>
                <th>1% Quarterly Improvement</th>
                <th>2 Years of 1% Improvements</th>
                <th>3 Years of 1% Improvements</th>
                <th>4 Years of 1% Improvements</th>
                <th>5 Years of 1% Improvements</th>
                </tr>
                <tr>
                <td style={{width: '30%'}}>Annual Sales</td>
                <td>$ {Number(reducingAttritionD30).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionE30).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionF30).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionG30).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionH30).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionI30).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                </tr>
                <tr>
                <td style={{width: '30%'}}>Annual Profit</td>
                <td>$ {Number(reducingAttritionD31).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionE31).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionF31).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionG31).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionH31).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionI31).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                </tr>
                <tr className="thead-primary">
                <th style={{width: '30%'}}>Lifetime Impact of Reducing Customer Attrition</th>
                <th>Your Projection</th>
                <th>1% Quarterly Improvement</th>
                <th>2 Years of 1% Improvements</th>
                <th>3 Years of 1% Improvements</th>
                <th>4 Years of 1% Improvements</th>
                <th>5 Years of 1% Improvements</th>
                </tr>
                <tr>
                <td style={{width: '30%'}}>Lifetime Sales</td>
                <td>$ {Number(reducingAttritionD33).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionE33).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionF33).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionG33).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionH33).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionI33).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                </tr>
                <tr>
                <td style={{width: '30%'}}>Lifetime Profit</td>
                <td>$ {Number(reducingAttritionD34).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionE34).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionF34).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionG34).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionH34).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionI34).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                </tr>
                <tr className="thead-primary">
                <th style={{width: '30%'}}>Valuation Impact of Reducing Customer Attrition</th>
                <th>Your Projection</th>
                <th>1% Quarterly Improvement</th>
                <th>2 Years of 1% Improvements</th>
                <th>3 Years of 1% Improvements</th>
                <th>4 Years of 1% Improvements</th>
                <th>5 Years of 1% Improvements</th>
                </tr>
                <tr>
                <td style={{width: '30%'}}>Estimated Valuation Impact</td>
                <td>$ {Number(reducingAttritionD36).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionE36).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionF36).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionG36).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionH36).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                <td>$ {Number(reducingAttritionI36).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
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
