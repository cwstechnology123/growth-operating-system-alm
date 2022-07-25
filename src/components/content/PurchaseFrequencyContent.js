import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import { PurchaseFrequencyGraph } from "../graph/PurchaseFrequencyGraph";


export default function PurchaseFrequencyContent() {
    const clientInputs = useSelector(state => state.clientInputs)
    const leadGeneration = useSelector(state => state.leadGeneration)
    const dispatch = useDispatch();
    const { purchaseFrequencyData, CustomerFinancialValuesData } = bindActionCreators(actionCreators, dispatch)
    CustomerFinancialValuesData("INITIAL_STATE");
    const CustomerFinancialValues = useSelector(state => state.CustomerFinancialValues)
    const purchaseFrequency = useSelector(state => state.purchaseFrequency)

    const [Inputs, setInputs] = useState({
        purchaseFrequencyD13: purchaseFrequency.purchaseFrequencyD13,
    });

    const { clientInputsH30, clientInputsH16, clientInputsH41 } = clientInputs
    let purchaseFrequencyD12 = (parseFloat(clientInputsH30) / parseFloat(clientInputsH16)) ? parseFloat(clientInputsH30) / parseFloat(clientInputsH16) : 0 

    useEffect(() => {
        purchaseFrequencyData("purchaseFrequencyD12",purchaseFrequencyD12);
        purchaseFrequencyData("purchaseFrequencyD13",purchaseFrequency.purchaseFrequencyD13);
    }, [])

    useEffect(() => {
        purchaseFrequencyData("purchaseFrequencyIncreasingPurchase", {
            purchaseFrequencyD12,
            CustomerFinancialValues,
            clientInputsH41,
        });
    }, [Inputs.purchaseFrequencyD13]);

    
    const { purchaseFrequencyD17, purchaseFrequencyE17, purchaseFrequencyD18, purchaseFrequencyE18, purchaseFrequencyF18, purchaseFrequencyG18, purchaseFrequencyF17, purchaseFrequencyG17, purchaseFrequencyH18, purchaseFrequencyI18, purchaseFrequencyH17, purchaseFrequencyI17, purchaseFrequencyD22, purchaseFrequencyE22, purchaseFrequencyF22, purchaseFrequencyG22, purchaseFrequencyH22, purchaseFrequencyI22, purchaseFrequencyD23, purchaseFrequencyE23, purchaseFrequencyF23, purchaseFrequencyG23, purchaseFrequencyH23, purchaseFrequencyI23, purchaseFrequencyD25, purchaseFrequencyE25, purchaseFrequencyF25, purchaseFrequencyG25, purchaseFrequencyH25, purchaseFrequencyI25, purchaseFrequencyD26, purchaseFrequencyE26, purchaseFrequencyF26, purchaseFrequencyG26, purchaseFrequencyH26, purchaseFrequencyI26, purchaseFrequencyD28, purchaseFrequencyE28, purchaseFrequencyF28, purchaseFrequencyG28, purchaseFrequencyH28, purchaseFrequencyI28 } = purchaseFrequency //object destructuring for purchaseFrequency

    return (
        <div className="content-body">
            {/* row */}
            <div className="container-fluid">
                <div className="head-title">
                    <h2>Purchase Frequency</h2>
                    <p>Referral Occur when other people or Bisinesses Send prospects or customers to your business. Referral customers tend to come to you with a higher sense of trust, close faster, and or often more profitable and loyel.</p>
                </div>
                <div className="row">
                    <div className="col-xl-6 contentleft">
                        <h4>Increasing Purchase Frequency </h4>
                        <div className="card h-auto">
                            <div className="card-body">
                                <a href="javascript:void(0);" className="leftbox"><i className="fas fa-redo" /></a>
                                <div className="d-flex justify-content-between">
                                    <p>Customer Purchase<br /> Frequency (Annually) </p>
                                    <form>
                                        <input type="text" name className="form-control" placeholder="0" value={(parseFloat(clientInputsH30) / parseFloat(clientInputsH16)) ? parseFloat(clientInputsH30) / parseFloat(clientInputsH16) : 0} />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card h-auto redleft">
                            <div className="card-body">
                                <a href="javascript:void(0);" className="leftbox"><i className="fas fa-sync" /></a>
                                <div className="d-flex justify-content-between">
                                    <p>What imprvement do<br /> you think is possible?</p>
                                    <form>
                                        <div className="inputbages">
                                            <input
                                                type="text"
                                                name="Inputs.purchaseFrequencyD13"
                                                className="form-control"
                                                placeholder={0}
                                                value={Inputs.purchaseFrequencyD13}
                                                onChange={(event) => {
                                                    setInputs({ ...Inputs, purchaseFrequencyD13: event.target.value });
                                                    purchaseFrequencyData("purchaseFrequencyD13", event.target.value)
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
                        <h4>Purchase Frequency: Impact on Financial Performence</h4>
                        <div className="card">
                            <div className="card-body">
                                <div className="textdiv">
                                    <PurchaseFrequencyGraph style={{ minHeight: 270 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body pl-0">
                        <div className="table-responsive">
                            <table className="table table-responsive-md mb-0">
                                <thead>
                                    <tr>
                                        <th style={{ width: '30%' }} />
                                        <th colSpan={2} style={{ textAlign: 'center' }} className="bgradius">Year 1 Gains</th>
                                        <th colSpan={5} style={{ textAlign: 'center' }} className="bgradius">Long-Term Gains </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="thead-primary">
                                        <th>Purchase Frequency Improvements</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Annual Improvement in Purchase Frequency </td>
                                        <td> {purchaseFrequencyD17} </td>
                                        <td> {purchaseFrequencyE17} </td>
                                        <td> {purchaseFrequencyF17} </td>
                                        <td> {purchaseFrequencyG17} </td>
                                        <td> {purchaseFrequencyH17} </td>
                                        <td> {purchaseFrequencyI17} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>New Annual Purchase Frequency</td>
                                        <td> {purchaseFrequencyD18} </td>
                                        <td> {purchaseFrequencyE18} </td>
                                        <td> {purchaseFrequencyF18} </td>
                                        <td> {purchaseFrequencyG18} </td>
                                        <td> {purchaseFrequencyH18} </td>
                                        <td> {purchaseFrequencyI18} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body pl-0">
                        <div className="table-responsive">
                            <table className="table table-responsive-md mb-0">
                                <thead>
                                    <tr>
                                        <th style={{ width: '30%' }}>Financial Improvements</th>
                                        <th colSpan={2} style={{ textAlign: 'center' }} className="bgradius">Year 1 Gains</th>
                                        <th colSpan={5} style={{ textAlign: 'center' }} className="bgradius">Long-Term Gains </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="thead-primary">
                                        <th style={{ width: '30%' }}>Annual Impact of Increasing Purchase Frequency</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Annual Sales</td>
                                        <td>$ {Number(purchaseFrequencyD22).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyE22).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyF22).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyG22).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyH22).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyI22).toLocaleString('en')} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Annual Profit</td>
                                        <td>$ {Number(purchaseFrequencyD23).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyE23).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyF23).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyG23).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyH23).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyI23).toLocaleString('en')} </td>
                                    </tr>
                                    <tr className="thead-primary">
                                        <th style={{ width: '30%' }}>Lifetime Impact of Increasing Purchase Frequency</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Lifetime Sales</td>
                                        <td>$ {Number(purchaseFrequencyD25).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyE25).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyF25).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyG25).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyH25).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyI25).toLocaleString('en')} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Lifetime Profit</td>
                                        <td>$ {Number(purchaseFrequencyD26).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyE26).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyF26).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyG26).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyH26).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyI26).toLocaleString('en')} </td>
                                    </tr>
                                    <tr className="thead-primary">
                                        <th style={{ width: '30%' }}>Valuation Impact of Increasing Purchase Frequency</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Estimated Valuation Impact</td>
                                        <td>$ {Number(purchaseFrequencyD28).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyE28).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyF28).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyG28).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyH28).toLocaleString('en')} </td>
                                        <td>$ {Number(purchaseFrequencyI28).toLocaleString('en')} </td>
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
