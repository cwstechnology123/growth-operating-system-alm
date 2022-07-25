import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';

export default function FindingGrowthInYourBusinessContent() {
    const dispatch = useDispatch();
    const clientInputs = useSelector(state => state.clientInputs)
    const findingGrowthInYourBusiness = useSelector(state => state.findingGrowthInYourBusiness)
    console.log("findingGrowthInYourBusiness", findingGrowthInYourBusiness)
    const { findingGrowthInYourBusinessData } = bindActionCreators(actionCreators, dispatch)

    const { clientInputsH16, clientInputsH30, clientInputsH33, clientInputsH36 } = clientInputs

    const [Inputs, setInputs] = useState({
        findingGrowthInYourBusinessE17: findingGrowthInYourBusiness.findingGrowthInYourBusinessE17,
        findingGrowthInYourBusinessE18: findingGrowthInYourBusiness.findingGrowthInYourBusinessE18,
        findingGrowthInYourBusinessE19: findingGrowthInYourBusiness.findingGrowthInYourBusinessE19,
        findingGrowthInYourBusinessE20: findingGrowthInYourBusiness.findingGrowthInYourBusinessE20,

    });

    //console.log(Inputs)

    useEffect(() => {
        findingGrowthInYourBusinessData("findingGrowthInYourBusinessE17", Inputs.findingGrowthInYourBusinessE17);
        findingGrowthInYourBusinessData("findingGrowthInYourBusinessE18", Inputs.findingGrowthInYourBusinessE18);
        findingGrowthInYourBusinessData("findingGrowthInYourBusinessE19", Inputs.findingGrowthInYourBusinessE19);
        findingGrowthInYourBusinessData("findingGrowthInYourBusinessE120", Inputs.findingGrowthInYourBusinessE20);
    }, [])

    useEffect(() => {
        findingGrowthInYourBusinessData("findingGrowthInYourBusinessImproving", {
            clientInputsH16, clientInputsH30, clientInputsH33, clientInputsH36
        });
    }, [
        Inputs.findingGrowthInYourBusinessE17,
        Inputs.findingGrowthInYourBusinessE18,
        Inputs.findingGrowthInYourBusinessE19,
        Inputs.findingGrowthInYourBusinessE20,
    ]);

    const { findingGrowthInYourBusinessD17, findingGrowthInYourBusinessF17, findingGrowthInYourBusinessD18, findingGrowthInYourBusinessF18, findingGrowthInYourBusinessD19, findingGrowthInYourBusinessF19, findingGrowthInYourBusinessD20, findingGrowthInYourBusinessF20, findingGrowthInYourBusinessD22, findingGrowthInYourBusinessF22, findingGrowthInYourBusinessD23, findingGrowthInYourBusinessF23, } = findingGrowthInYourBusiness

    return (
        <div className="content-body">
            {/* row */}
            <div className="container-fluid">
                <div className="head-title">
                    <h2>Finding Growth in Your Business</h2>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body">
                                {/* <div id="chart-with-area" class="ct-chart ct-golden-section chartlist-chart"></div>	 */}
                                <div id="multi-line-chart" className="ct-chart ct-golden-section chartlist-chart">	</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-body pb-0">
                                <div className="card alert-social facebook totalimp">
                                    <div className="card-header">
                                        <h2><i className="bi bi-reception-4" /> Total Improvement</h2>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="icons">
                                                <h5>Gross Sales</h5>
                                                <h2>16%</h2>
                                            </div>
                                            <div className="text">
                                                <h5>Gross Profit</h5>
                                                <h2>22%</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card inputbg">
                    <div className="card-body pl-0">
                        <div className="table-responsive">
                            <table className="table table-responsive-md mb-0">
                                <tbody>
                                    <tr>
                                        <th colSpan={1} />
                                        <th className="bluetab">Current</th>
                                        <th className="bluetab">Iprovement</th>
                                        <th className="bluetab">Potential</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Number of Active Customers</td>
                                        <td> {Number(findingGrowthInYourBusinessD17).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td style={{ width: '20%' }}>
                                            <div className="inputbages">
                                                <input
                                                    type="text"
                                                    name="Inputs.findingGrowthInYourBusinessE17"
                                                    className="form-control"
                                                    placeholder={0}
                                                    value={Inputs.findingGrowthInYourBusinessE17}
                                                    onChange={(event) => {
                                                        setInputs({ ...Inputs, findingGrowthInYourBusinessE17: event.target.value });
                                                        findingGrowthInYourBusinessData("findingGrowthInYourBusinessE17", event.target.value)
                                                    }}
                                                    onKeyPress={(event) => {
                                                        if (!/[0-9]/.test(event.key)) {
                                                            event.preventDefault();
                                                        }
                                                    }}
                                                />
                                                <span className="percentWhite">%</span>
                                            </div>
                                        </td>
                                        <td> {Number(findingGrowthInYourBusinessF17).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Average Customer Purchase Frequency</td>
                                        <td> {Number(findingGrowthInYourBusinessD18).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>
                                            <div className="inputbages">
                                                <input
                                                    type="text"
                                                    name="Inputs.findingGrowthInYourBusinessE18"
                                                    className="form-control"
                                                    placeholder={0}
                                                    value={Inputs.findingGrowthInYourBusinessE18}
                                                    onChange={(event) => {
                                                        setInputs({ ...Inputs, findingGrowthInYourBusinessE18: event.target.value });
                                                        findingGrowthInYourBusinessData("findingGrowthInYourBusinessE18", event.target.value)
                                                    }}
                                                    onKeyPress={(event) => {
                                                        if (!/[0-9]/.test(event.key)) {
                                                            event.preventDefault();
                                                        }
                                                    }}
                                                />
                                                <span className="percentWhite">%</span>
                                            </div>
                                        </td>
                                        <td> {Number(findingGrowthInYourBusinessF18).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Average Transaction Value</td>
                                        <td>$ {Number(findingGrowthInYourBusinessD19).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td style={{ width: '20%' }}>
                                            <div className="inputbages">
                                                <input
                                                    type="text"
                                                    name="Inputs.findingGrowthInYourBusinessE19"
                                                    className="form-control"
                                                    placeholder={0}
                                                    value={Inputs.findingGrowthInYourBusinessE19}
                                                    onChange={(event) => {
                                                        setInputs({ ...Inputs, findingGrowthInYourBusinessE19: event.target.value });
                                                        findingGrowthInYourBusinessData("findingGrowthInYourBusinessE19", event.target.value)
                                                    }}
                                                    onKeyPress={(event) => {
                                                        if (!/[0-9]/.test(event.key)) {
                                                            event.preventDefault();
                                                        }
                                                    }}
                                                />
                                                <span className="percentWhite">%</span>
                                            </div>
                                        </td>
                                        <td>$ {Number(findingGrowthInYourBusinessF19).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Profit margin</td>
                                        <td>{findingGrowthInYourBusinessD20}%</td>
                                        <td style={{ width: '20%' }}>
                                            <div className="inputbages">
                                                <input
                                                    type="text"
                                                    name="Inputs.findingGrowthInYourBusinessE20"
                                                    className="form-control"
                                                    placeholder={0}
                                                    value={Inputs.findingGrowthInYourBusinessE20}
                                                    onChange={(event) => {
                                                        setInputs({ ...Inputs, findingGrowthInYourBusinessE20: event.target.value });
                                                        findingGrowthInYourBusinessData("findingGrowthInYourBusinessE20", event.target.value)
                                                    }}
                                                    onKeyPress={(event) => {
                                                        if (!/[0-9]/.test(event.key)) {
                                                            event.preventDefault();
                                                        }
                                                    }}
                                                />
                                                <span className="percentWhite">%</span>
                                            </div>
                                        </td>
                                        <td>{Number(findingGrowthInYourBusinessF20).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}%</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Estimated Gross Sales</td>
                                        <td> $ {Number(findingGrowthInYourBusinessD22).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td className="bgradiusf" />
                                        <td> $ {Number(findingGrowthInYourBusinessF22).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '30%' }}>Estimated Gross Profit</td>
                                        <td> $ {Number(findingGrowthInYourBusinessD23).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td className="bgradiusf" />
                                        <td> $ {Number(findingGrowthInYourBusinessF23).toLocaleString('en', {
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
