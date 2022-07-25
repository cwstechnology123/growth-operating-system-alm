import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import { AverageTransactionValueGraph } from "../graph/AverageTransactionValueGraph";

export default function AverageTransactionValueContent() {

    const clientInputs = useSelector(state => state.clientInputs)
    const leadGeneration = useSelector(state => state.leadGeneration)
    const dispatch = useDispatch();
    const { averageTransactionValueData, CustomerFinancialValuesData } = bindActionCreators(actionCreators, dispatch)
    CustomerFinancialValuesData("INITIAL_STATE");
    const CustomerFinancialValues = useSelector(state => state.CustomerFinancialValues)
    const averageTransactionValue = useSelector(state => state.averageTransactionValue)

    const [Inputs, setInputs] = useState({
        averageTransactionValueD13: averageTransactionValue.averageTransactionValueD13,
    });
    const { clientInputsH33, clientInputsH41 } = clientInputs
    let averageTransactionValueD12 = (parseFloat(clientInputsH33)) ? parseFloat(clientInputsH33) : 0

    useEffect(() => {
        averageTransactionValueData("averageTransactionValueD12",averageTransactionValueD12);
        averageTransactionValueData("averageTransactionValueD13",averageTransactionValue.averageTransactionValueD13);
    }, [])

    useEffect(() => {
        averageTransactionValueData("averageTransactionValue", {
            averageTransactionValueD12,
            CustomerFinancialValues,
            clientInputsH41,
        });
    }, [Inputs.averageTransactionValueD13]);


    const { averageTransactionValueD17, averageTransactionValueE17, averageTransactionValueF17, averageTransactionValueG17, averageTransactionValueH17, averageTransactionValueI17, averageTransactionValueD18, averageTransactionValueE18, averageTransactionValueF18, averageTransactionValueG18, averageTransactionValueH18, averageTransactionValueI18, averageTransactionValueD22, averageTransactionValueE22, averageTransactionValueF22, averageTransactionValueG22, averageTransactionValueH22, averageTransactionValueI22, averageTransactionValueD23, averageTransactionValueE23, averageTransactionValueF23, averageTransactionValueG23, averageTransactionValueH23, averageTransactionValueI23, averageTransactionValueD25, averageTransactionValueE25, averageTransactionValueF25, averageTransactionValueG25, averageTransactionValueH25, averageTransactionValueI25, averageTransactionValueD26, averageTransactionValueE26, averageTransactionValueF26, averageTransactionValueG26, averageTransactionValueH26, averageTransactionValueI26, averageTransactionValueD28, averageTransactionValueE28, averageTransactionValueF28, averageTransactionValueG28, averageTransactionValueH28, averageTransactionValueI28 } = averageTransactionValue //object destructuring for averageTransactionValue

    return (
        <div className="content-body">
            {/* row */}
            <div className="container-fluid">
                <div className="head-title">
                    <h2>Average Transaction Value </h2>
                    <p>Average Transaction Value is the value of average purchase or order Amount.</p>
                </div>
                <div className="row">
                    <div className="col-xl-6 contentleft">
                        <h4>Increasing Average Transaction Value</h4>
                        <div className="card h-auto">
                            <div className="card-body">
                                <a href="javascript:void(0);" className="leftbox"><i className="fas fa-redo" /></a>
                                <div className="d-flex justify-content-between">
                                    <p>Average Transaction Value</p>
                                    <form>
                                        <div className="inputbages">
                                            <span className="percentWhite">$</span>
                                            <input type="text" name className="form-control" placeholder="0" value={(parseFloat(clientInputsH33)) ? parseFloat(clientInputsH33) : 0} />
                                        </div>
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
                                                name="Inputs.averageTransactionValueD13"
                                                className="form-control"
                                                placeholder={0}
                                                value={Inputs.averageTransactionValueD13}
                                                onChange={(event) => {
                                                    setInputs({ ...Inputs, averageTransactionValueD13: event.target.value });
                                                    averageTransactionValueData("averageTransactionValueD13", event.target.value)
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
                        <h4>Transaction Value: Impact on Financial Performence</h4>
                        <div className="card">
                            <div className="card-body">
                                <div className="textdiv">
                                    <AverageTransactionValueGraph style={{ minHeight: 260 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body  pl-0">
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
                                        <th>Improved Average Transaction Value</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Dollor Improvement of Average Transaction</td>
                                        <td> {averageTransactionValueD17} </td>
                                        <td> {averageTransactionValueE17} </td>
                                        <td> {averageTransactionValueF17} </td>
                                        <td> {averageTransactionValueG17} </td>
                                        <td> {averageTransactionValueH17} </td>
                                        <td> {averageTransactionValueI17} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}> Potentioal Improvement in Average Transaction Value</td>
                                        <td> {Number(averageTransactionValueD18).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueE18).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueF18).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueG18).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueH18).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueI18).toLocaleString('en')} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body  pl-0">
                        <div className="table-responsive">
                            <table className="table table-responsive-md table-striped mb-0">
                                <thead>
                                    <tr>
                                        <th style={{ width: '30%' }}><h3>Financial Improvements</h3></th>
                                        <th colSpan={2} style={{ textAlign: 'center' }} className="bgradius">Year 1 Gains</th>
                                        <th colSpan={5} style={{ textAlign: 'center' }} className="bgradius">Long-Term Gains </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="thead-primary">
                                        <th style={{ width: '30%' }}>Annual Impact of Improved Avg Transaction Value</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Annual Sales</td>
                                        <td> {Number(averageTransactionValueD22).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueE22).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueF22).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueG22).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueH22).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueI22).toLocaleString('en')} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Annual Profit</td>
                                        <td> {Number(averageTransactionValueD23).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueE23).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueF23).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueG23).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueH23).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueI23).toLocaleString('en')} </td>
                                    </tr>
                                    <tr className="thead-primary">
                                        <th style={{ width: '30%' }}>Lifetime Impact of Improved Avg Transaction Value</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Lifetime Sales</td>
                                        <td> {Number(averageTransactionValueD25).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueE25).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueF25).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueG25).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueH25).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueI25).toLocaleString('en')} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Lifetime Profit</td>
                                        <td> {Number(averageTransactionValueD26).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueE26).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueF26).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueG26).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueH26).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueI26).toLocaleString('en')} </td>
                                    </tr>
                                    <tr className="thead-primary">
                                        <th style={{ width: '30%' }}>Valuation Impact of Improved Avg Transaction Value</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Estimated Valuation Impact</td>
                                        <td> {Number(averageTransactionValueD28).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueE28).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueF28).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueG28).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueH28).toLocaleString('en')} </td>
                                        <td> {Number(averageTransactionValueI28).toLocaleString('en')} </td>
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
