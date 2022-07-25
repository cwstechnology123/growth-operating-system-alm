import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import { ReferralsGraph } from "../graph/ReferralsGraph";

export default function ReferralsContent() {

    const clientInputs = useSelector(state => state.clientInputs)
    const leadGeneration = useSelector(state => state.leadGeneration)
    const dispatch = useDispatch();
    const { referralsData, CustomerFinancialValuesData } = bindActionCreators(actionCreators, dispatch)
    CustomerFinancialValuesData("INITIAL_STATE");
    const CustomerFinancialValues = useSelector(state => state.CustomerFinancialValues)
    const referrals = useSelector(state => state.referrals)

    const [Inputs, setInputs] = useState({
        referralsD13: referrals.referralsD13,
    });

    const { clientInputsH41, clientInputsH27 } = clientInputs

    useEffect(() => {
        referralsData("referralsD12",clientInputsH27);
        referralsData("referralsD13",referrals.referralsD13);
    }, [])

    useEffect(() => {
        referralsData("referralsImproving", {
            clientInputsH27,
            CustomerFinancialValues,
            clientInputsH41,
        });
    }, [Inputs.referralsD13]);

   
    



    const { referralsD17, referralsE17, referralsD18, referralsE18, referralsF18, referralsG18, referralsF17, referralsG17, referralsH18, referralsI18, referralsH17, referralsI17, referralsD22, referralsE22, referralsF22, referralsG22, referralsH22, referralsI22, referralsD23, referralsE23, referralsF23, referralsG23, referralsH23, referralsI23, referralsD25, referralsE25, referralsF25, referralsG25, referralsH25, referralsI25, referralsD26, referralsE26, referralsF26, referralsG26, referralsH26, referralsI26, referralsD28, referralsE28, referralsF28, referralsG28, referralsH28, referralsI28 } = referrals //object destructuring for referrals

    return (
        <div className="content-body">
            {/* row */}
            <div className="container-fluid">
                <div className="head-title">
                    <h2>Referrals</h2>
                    <p>Referral Occur when other people or Bisinesses Send prospects or customers to your business. Referral customers tend to come to you with a higher sense of trust, close faster, and or often more profitable and loyel.</p>
                </div>
                <div className="row">
                    <div className="col-xl-6 contentleft">
                        <h4>Improving Referrals </h4>
                        <div className="card h-auto">
                            <div className="card-body">
                                <a href="javascript:void(0);" className="leftbox"><i className="fas fa-redo" /></a>
                                <div className="d-flex justify-content-between">
                                    <p>Referral <br />Generated Annually</p>
                                    <form>
                                        <input type="text" name className="form-control" placeholder="0"
                                            //value={clientInputs.clientInputsH27}
                                            value={clientInputsH27}
                                            disabled />
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
                                                name="Inputs.referralsD13"
                                                className="form-control"
                                                placeholder={0}
                                                value={Inputs.referralsD13}
                                                onChange={(event) => {
                                                    setInputs({ ...Inputs, referralsD13: event.target.value });
                                                    referralsData("referralsD13", event.target.value)
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
                        <h4>Referrals: Impact on Financial Performence</h4>
                        <div className="card">
                            <div className="card-body">
                                <div className="textdiv">
                                    <ReferralsGraph style={{ minHeight: 270 }} />
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
                                        <th style={{ width: '40%' }} />
                                        <th colSpan={2} style={{ textAlign: 'center' }} className="bgradius">Year 1 Gains</th>
                                        <th colSpan={5} style={{ textAlign: 'center' }} className="bgradius">Long-Term Gains </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="thead-primary">
                                        <th>Referral Improvements</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '40%' }}>New Customer From Referrals</td>
                                        <td> {referralsD17} </td>
                                        <td> {referralsE17} </td>
                                        <td> {referralsF17} </td>
                                        <td> {referralsG17} </td>
                                        <td> {referralsH17} </td>
                                        <td> {referralsI17} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '40%' }}>Total Number of Annual Referrals</td>
                                        <td> {referralsD18} </td>
                                        <td> {referralsE18} </td>
                                        <td> {referralsF18} </td>
                                        <td> {referralsG18} </td>
                                        <td> {referralsH18} </td>
                                        <td> {referralsI18} </td>
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
                                        <th style={{ width: '40%' }}>Financial Improvements</th>
                                        <th colSpan={2} style={{ textAlign: 'center' }} className="bgradius">Year 1 Gains</th>
                                        <th colSpan={5} style={{ textAlign: 'center' }} className="bgradius">Long-Term Gains </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="thead-primary">
                                        <th style={{ width: '40%' }}>Annual Impact of Improved Referrals</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '40%' }}>Annual Sales</td>
                                        <td>$ {Number(referralsD22).toLocaleString('en')} </td>
                                        <td>$ {Number(referralsE22).toLocaleString('en')} </td>
                                        <td>$ {Number(referralsF22).toLocaleString('en')} </td>
                                        <td>$ {Number(referralsG22).toLocaleString('en')}</td>
                                        <td>$ {Number(referralsH22).toLocaleString('en')}</td>
                                        <td>$ {Number(referralsI22).toLocaleString('en')}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '40%' }}>Annual Profit</td>
                                        <td>$ {Number(referralsD23).toLocaleString('en')} </td>
                                        <td>$ {Number(referralsE23).toLocaleString('en')} </td>
                                        <td>$ {Number(referralsF23).toLocaleString('en')} </td>
                                        <td>$ {Number(referralsG23).toLocaleString('en')}</td>
                                        <td>$ {Number(referralsH23).toLocaleString('en')}</td>
                                        <td>$ {Number(referralsI23).toLocaleString('en')}</td>
                                    </tr>
                                    <tr className="thead-primary">
                                        <th style={{ width: '40%' }}>Lifetime Impact of Improved Referrals</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '40%' }}>Lifetime Sales</td>
                                        <td>$ {Number(referralsD25).toLocaleString('en')} </td>
                                        <td>$ {Number(referralsE25).toLocaleString('en')} </td>
                                        <td>$ {Number(referralsF25).toLocaleString('en')} </td>
                                        <td>$ {Number(referralsG25).toLocaleString('en')}</td>
                                        <td>$ {Number(referralsH25).toLocaleString('en')}</td>
                                        <td>$ {Number(referralsI25).toLocaleString('en')}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '40%' }}>Lifetime Profit</td>
                                        <td>$ {Number(referralsD26).toLocaleString('en')} </td>
                                        <td>$ {Number(referralsE26).toLocaleString('en')} </td>
                                        <td>$ {Number(referralsF26).toLocaleString('en')} </td>
                                        <td>$ {Number(referralsG26).toLocaleString('en')}</td>
                                        <td>$ {Number(referralsH26).toLocaleString('en')}</td>
                                        <td>$ {Number(referralsI26).toLocaleString('en')}</td>
                                    </tr>
                                    <tr className="thead-primary">
                                        <th style={{ width: '40%' }}>Valuation Impact of Improved Referrals</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '40%' }}>Estimated Valuation Impact</td>
                                        <td>$ {Number(referralsD28).toLocaleString('en')} </td>
                                        <td>$ {Number(referralsE28).toLocaleString('en')} </td>
                                        <td>$ {Number(referralsF28).toLocaleString('en')} </td>
                                        <td>$ {Number(referralsG28).toLocaleString('en')}</td>
                                        <td>$ {Number(referralsH28).toLocaleString('en')}</td>
                                        <td>$ {Number(referralsI28).toLocaleString('en')}</td>
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
