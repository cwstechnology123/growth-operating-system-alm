import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import { ProfitMarginGraph } from "../graph/ProfitMarginGraph";

export default function ProfitMarginContent() {

    const clientInputs = useSelector(state => state.clientInputs)
    const dispatch = useDispatch();
    const { profitMarginData, CustomerFinancialValuesData } = bindActionCreators(actionCreators, dispatch)
    CustomerFinancialValuesData("INITIAL_STATE");
    const CustomerFinancialValues = useSelector(state => state.CustomerFinancialValues)
    const profitMargin = useSelector(state => state.profitMargin)
    const [Inputs, setInputs] = useState({
        profitMarginD13: profitMargin.profitMarginD13,
    });

    const { clientInputsH36, clientInputsH41 } = clientInputs
    let profitMarginD12 = parseFloat(clientInputsH36) ? parseFloat(clientInputsH36) : 0

    useEffect(() => {
        profitMarginData("profitMarginD12",profitMarginD12);
        profitMarginData("profitMarginD13",profitMargin.profitMarginD13);
    }, [])

    useEffect(() => {
        profitMarginData("profitMarginImprovement", {
            profitMarginD12,
            CustomerFinancialValues,
            clientInputsH41,
        });
    }, [Inputs.profitMarginD13]);



    const { profitMarginD17, profitMarginE17, profitMarginF17, profitMarginG17, profitMarginH17, profitMarginI17, profitMarginD18, profitMarginE18, profitMarginF18, profitMarginG18, profitMarginH18, profitMarginI18, profitMarginD22, profitMarginE22, profitMarginF22, profitMarginG22, profitMarginH22, profitMarginI22, profitMarginD24, profitMarginE24, profitMarginF24, profitMarginG24, profitMarginH24, profitMarginI24, profitMarginD26, profitMarginE26, profitMarginF26, profitMarginG26, profitMarginH26, profitMarginI26 } = profitMargin //object destructuring for profitMargin

    return (
        <div className="content-body">
            {/* row */}
            <div className="container-fluid">
                <div className="head-title">
                    <h2>Profit Margin </h2>
                    <p>Profit Margin is how much money you keep from every sale</p>
                </div>
                <div className="row">
                    <div className="col-xl-6 contentleft">
                        <h4>Improving Profit Margin</h4>
                        <div className="card h-auto">
                            <div className="card-body">
                                <a href="javascript:void(0);" className="leftbox"><i className="fas fa-redo" /></a>
                                <div className="d-flex justify-content-between">
                                    <p>Gross Profit Margin</p>
                                    <form>
                                        <div className="inputbages">
                                            <input type="text" name className="form-control" placeholder="0" value={profitMarginD12} disabled />
                                            <span className="percentWhite">%</span>
                                        </div>
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
                                                className="form-control"
                                                placeholder="0"
                                                value={Inputs.profitMarginD13}
                                                onChange={(event) => {
                                                    setInputs({ ...Inputs, profitMarginD13: event.target.value });
                                                    profitMarginData("profitMarginD13", event.target.value)
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
                        <h4>Profit Margin: Impact on Financial Performence</h4>
                        <div className="card">
                            <div className="card-body">
                                <div className="textdiv">
                                    <ProfitMarginGraph style={{ minHeight: 270 }} />
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
                                        <th>Improved Gross Profit Margin</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Percent Improvement of Gross Profit Margin</td>
                                        <td> {profitMarginD17} </td>
                                        <td> {profitMarginE17} </td>
                                        <td> {profitMarginF17} </td>
                                        <td> {profitMarginG17} </td>
                                        <td> {profitMarginH17} </td>
                                        <td> {profitMarginI17} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}> Potential New Gross Profit Margin</td>
                                        <td> {Number(profitMarginD18).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginE18).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginF18).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginG18).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginH18).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginI18).toLocaleString('en')} </td>
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
                                        <th style={{ width: '30%' }}>Financial Improvements</th>
                                        <th colSpan={2} style={{ textAlign: 'center' }} className="bgradius">Year 1 Gains</th>
                                        <th colSpan={5} style={{ textAlign: 'center' }} className="bgradius">Long-Term Gains </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="thead-primary">
                                        <th style={{ width: '30%' }}>Annual Impact of Improving Gross Profit Margin</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Annual Profit</td>
                                        <td> {Number(profitMarginD22).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginE22).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginF22).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginG22).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginH22).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginI22).toLocaleString('en')} </td>
                                    </tr>
                                    <tr className="thead-primary">
                                        <th style={{ width: '30%' }}>Lifetime Impact of Improving Gross Profit Margin</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Lifetime Profit</td>
                                        <td> {Number(profitMarginD24).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginE24).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginF24).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginG24).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginH24).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginI24).toLocaleString('en')} </td>
                                    </tr>
                                    <tr className="thead-primary">
                                        <th style={{ width: '30%' }}>Valuation Impact of Improving Gross Profit Margin</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Estimated Valuation Impact</td>
                                        <td> {Number(profitMarginD26).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginE26).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginF26).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginG26).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginH26).toLocaleString('en')} </td>
                                        <td> {Number(profitMarginI26).toLocaleString('en')} </td>
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
