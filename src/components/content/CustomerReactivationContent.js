import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import { CustomerReactivationGraph } from "../graph/CustomerReactivationGraph";

export default function CustomerReactivationContent() {
    const clientInputs = useSelector(state => state.clientInputs)
    const leadGeneration = useSelector(state => state.leadGeneration)
    const dispatch = useDispatch();
    const { customerReactivationData, CustomerFinancialValuesData, impactof120GrowthOSData } = bindActionCreators(actionCreators, dispatch)
    CustomerFinancialValuesData("INITIAL_STATE");
    impactof120GrowthOSData("INITIAL_STATE");
    const CustomerFinancialValues = useSelector(state => state.CustomerFinancialValues)
    const impactof120GrowthOS = useSelector(state => state.impactof120GrowthOS)
    const customerReactivation = useSelector(state => state.customerReactivation)

    const [Inputs, setInputs] = useState({
        customerReactivationD13: customerReactivation.customerReactivationD13,
    });
    const { clientInputsH20, clientInputsH41 } = clientInputs
    let customerReactivationD12 = (parseFloat(clientInputsH20)) ? parseFloat(clientInputsH20) : 0

    useEffect(() => {
        customerReactivationData("customerReactivationD12",customerReactivationD12);
        customerReactivationData("customerReactivationD13",customerReactivation.customerReactivationD13);
    }, [])

    useEffect(() => {
        customerReactivationData("customerReactivation", {
            customerReactivationD12,
            CustomerFinancialValues,
            impactof120GrowthOS,
            clientInputsH41,
        });
    }, [Inputs.customerReactivationD13]);


    const { customerReactivationD17, customerReactivationE17, customerReactivationF17, customerReactivationG17, customerReactivationH17, customerReactivationI17, customerReactivationD18, customerReactivationE18, customerReactivationF18, customerReactivationG18, customerReactivationH18, customerReactivationI18, customerReactivationD22, customerReactivationE22, customerReactivationF22, customerReactivationG22, customerReactivationH22, customerReactivationI22, customerReactivationD23, customerReactivationE23, customerReactivationF23, customerReactivationG23, customerReactivationH23, customerReactivationI23, customerReactivationD25, customerReactivationE25, customerReactivationF25, customerReactivationG25, customerReactivationH25, customerReactivationI25, customerReactivationD26, customerReactivationE26, customerReactivationF26, customerReactivationG26, customerReactivationH26, customerReactivationI26, customerReactivationD28, customerReactivationE28, customerReactivationF28, customerReactivationG28, customerReactivationH28, customerReactivationI28, customerReactivationD31, customerReactivationD32, customerReactivationD33, customerReactivationD34, customerReactivationD35 } = customerReactivation //object destructuring for customerReactivation

    return (
        <div className="content-body">
            {/* row */}
            <div className="container-fluid">
                <div className="head-title">
                    <h2>Customer Reactivation </h2>
                    <p>Customer Reativation is the process of taking action win back your Inactive Customers.</p>
                </div>
                <div className="row">
                    <div className="col-xl-6 contentleft">
                        <h4>Customer Reactivation</h4>
                        <div className="card h-auto">
                            <div className="card-body">
                                <a href="javascript:void(0);" className="leftbox"><i className="fas fa-redo" /></a>
                                <div className="d-flex justify-content-between">
                                    <p>Total<br /> Inactive Customers</p>
                                    <form>
                                        <input type="text" name className="form-control" placeholder="0" value={(parseFloat(clientInputsH20)) ? parseFloat(clientInputsH20) : 0} />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card h-auto redleft">
                            <div className="card-body">
                                <a href="javascript:void(0);" className="leftbox"><i className="fas fa-sync" /></a>
                                <div className="d-flex justify-content-between">
                                    <p>Percent of inactive Customers<br /> you can reactivate Annually</p>
                                    <form>
                                        <div className="inputbages">
                                            <input
                                                type="text"
                                                name="Inputs.customerReactivationD13"
                                                className="form-control"
                                                placeholder={0}
                                                value={Inputs.customerReactivationD13}
                                                onChange={(event) => {
                                                    setInputs({ ...Inputs, customerReactivationD13: event.target.value });
                                                    customerReactivationData("customerReactivationD13", event.target.value)
                                                }}
                                                onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                        event.preventDefault();
                                                    }
                                                }}
                                            />
                                            <span className="percentWhite">%</span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 contentleft">
                        <h4>Customer Reactivation: Impact on Financial Performence</h4>
                        <div className="card">
                            <div className="card-body">
                                <div className="textdiv">
                                    <CustomerReactivationGraph style={{ minHeight: 270 }} />
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
                                        <th style={{ width: '30%' }} />
                                        <th colSpan={2} style={{ textAlign: 'center' }} className="bgradius">Year 1 Gains</th>
                                        <th colSpan={5} style={{ textAlign: 'center' }} className="bgradius">Long-Term Gains </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="thead-primary">
                                        <th>Customers Reactivated Improvement</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Number Of inactive Customers</td>
                                        <td> {customerReactivationD17} </td>
                                        <td> {customerReactivationE17} </td>
                                        <td> {customerReactivationF17} </td>
                                        <td> {customerReactivationG17} </td>
                                        <td> {customerReactivationH17} </td>
                                        <td> {customerReactivationI17} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Customers Reactivated Annually</td>
                                        <td> {customerReactivationD18} </td>
                                        <td> {customerReactivationE18} </td>
                                        <td> {customerReactivationF18} </td>
                                        <td> {customerReactivationG18} </td>
                                        <td> {customerReactivationH18} </td>
                                        <td> {customerReactivationI18} </td>
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
                                        <th style={{ width: '30%' }}><h3 style={{ fontSize: 16 }}>Financial Improvements</h3></th>
                                        <th colSpan={2} style={{ textAlign: 'center' }} className="bgradius">Year 1 Gains</th>
                                        <th colSpan={5} style={{ textAlign: 'center' }} className="bgradius">Long-Term Gains </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="thead-primary">
                                        <th style={{ width: '30%' }}>Annual Impact of Increasing Customer Reactivation</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Annual Sales</td>
                                        <td> {Number(customerReactivationD22).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationE22).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationF22).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationG22).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationH22).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationI22).toLocaleString('en')} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Annual Profit</td>
                                        <td> {Number(customerReactivationD23).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationE23).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationF23).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationG23).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationH23).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationI23).toLocaleString('en')} </td>
                                    </tr>
                                    <tr className="thead-primary">
                                        <th style={{ width: '30%' }}>Lifetime Impact of Increasing Customer Reactivation</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Lifetime Sales</td>
                                        <td> {Number(customerReactivationD25).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationE25).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationF25).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationG25).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationH25).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationI25).toLocaleString('en')} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Lifetime Profit</td>
                                        <td> {Number(customerReactivationD26).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationE26).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationF26).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationG26).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationH26).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationI26).toLocaleString('en')} </td>
                                    </tr>
                                    <tr className="thead-primary">
                                        <th style={{ width: '30%' }}>Valuation Impact of Increasing Customer Reactivation</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Estimated Valuation Impact</td>
                                        <td> {Number(customerReactivationD28).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationE28).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationF28).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationG28).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationH28).toLocaleString('en')} </td>
                                        <td> {Number(customerReactivationI28).toLocaleString('en')} </td>
                                    </tr>
                                    <br/>
                                    <tr className="thead-primary">
                                        <th style={{ width: '30%' }}>5-Year Total Impact from Customer Reactivation</th>
                                        <th>Impact</th>
                                       
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Valuation Impact</td>
                                        <td> {Number(customerReactivationD31).toLocaleString('en')} </td>
                                       
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Lifetime Profits</td>
                                        <td> {Number(customerReactivationD32).toLocaleString('en')} </td>
                                       
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Lifetime Sales</td>
                                        <td> {Number(customerReactivationD33).toLocaleString('en')} </td>
                                       
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Annual Profits</td>
                                        <td> {Number(customerReactivationD34).toLocaleString('en')} </td>
                                       
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Annual Sales</td>
                                        <td> {Number(customerReactivationD35).toLocaleString('en')} </td>
                                       
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
