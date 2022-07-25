import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';

export default function ImpactOfThe120GrowthContent() {
    const leadGeneration = useSelector(state => state.leadGeneration)
    const conversion = useSelector(state => state.conversion)
    const referrals = useSelector(state => state.referrals)
    const reducingAttrition = useSelector(state => state.reducingAttrition)
    const buyingLifeTime = useSelector(state => state.buyingLifeTime)
    const customerReactivation = useSelector(state => state.customerReactivation)
    const CustomerFinancialValues = useSelector(state => state.CustomerFinancialValues)
    const purchaseFrequency = useSelector(state => state.purchaseFrequency)
    const averageTransactionValue = useSelector(state => state.averageTransactionValue)
    const profitMargin = useSelector(state => state.profitMargin)
    const clientInputs = useSelector(state => state.clientInputs)
    const impactof120GrowthOS = useSelector(state => state.impactof120GrowthOS)


    const dispatch = useDispatch();
    const { impactof120GrowthOSData, CustomerFinancialValuesData } = bindActionCreators(actionCreators, dispatch)
    CustomerFinancialValuesData("INITIAL_STATE");

    const [Inputs, setInputs] = useState({
        impactof120GrowthOSE26: impactof120GrowthOS.impactof120GrowthOSE26,
    });

    let impactof120GrowthOSE26 = (parseFloat(Inputs.impactof120GrowthOSE26)) ? parseFloat(Inputs.impactof120GrowthOSE26) : 0

    useEffect(() => {
        impactof120GrowthOSData("impactof120GrowthOSAll", {
            leadGeneration,
            conversion,
            referrals,
            reducingAttrition,
            buyingLifeTime,
            customerReactivation,
            purchaseFrequency,
            CustomerFinancialValues,
            averageTransactionValue,
            profitMargin,
            clientInputs,
            impactof120GrowthOS,
            impactof120GrowthOSE26
        });
    }, [Inputs.impactof120GrowthOSE26]);

    const { impactof120GrowthOSE11, impactof120GrowthOSF11, impactof120GrowthOSG11, impactof120GrowthOSH11, impactof120GrowthOSI11, impactof120GrowthOSJ11, impactof120GrowthOSK11, impactof120GrowthOSE12, impactof120GrowthOSF12, impactof120GrowthOSG12, impactof120GrowthOSH12, impactof120GrowthOSI12, impactof120GrowthOSJ12, impactof120GrowthOSK12, impactof120GrowthOSE13, impactof120GrowthOSF13, impactof120GrowthOSG13, impactof120GrowthOSH13, impactof120GrowthOSI13, impactof120GrowthOSJ13, impactof120GrowthOSK13, impactof120GrowthOSF14, impactof120GrowthOSG14, impactof120GrowthOSH14, impactof120GrowthOSI14, impactof120GrowthOSJ14, impactof120GrowthOSK14, impactof120GrowthOSE15, impactof120GrowthOSF15, impactof120GrowthOSG15, impactof120GrowthOSH15, impactof120GrowthOSI15, impactof120GrowthOSJ15, impactof120GrowthOSK15, impactof120GrowthOSE16, impactof120GrowthOSF16, impactof120GrowthOSG16, impactof120GrowthOSH16, impactof120GrowthOSI16, impactof120GrowthOSJ16, impactof120GrowthOSK16, impactof120GrowthOSF18, impactof120GrowthOSG18, impactof120GrowthOSH18, impactof120GrowthOSI18, impactof120GrowthOSJ18, impactof120GrowthOSK18, impactof120GrowthOSF19, impactof120GrowthOSG19, impactof120GrowthOSH19, impactof120GrowthOSI19, impactof120GrowthOSJ19, impactof120GrowthOSK19, impactof120GrowthOSF20, impactof120GrowthOSG20, impactof120GrowthOSH20, impactof120GrowthOSI20, impactof120GrowthOSJ20, impactof120GrowthOSK20, impactof120GrowthOSF21, impactof120GrowthOSG21, impactof120GrowthOSH21, impactof120GrowthOSI21, impactof120GrowthOSJ21, impactof120GrowthOSK21, impactof120GrowthOSF27, impactof120GrowthOSE23, impactof120GrowthOSE27, impactof120GrowthOSF23, impactof120GrowthOSG23, impactof120GrowthOSF24, impactof120GrowthOSG24, impactof120GrowthOSH24, impactof120GrowthOSI24, impactof120GrowthOSJ24, impactof120GrowthOSK24, impactof120GrowthOSF25, impactof120GrowthOSG25, impactof120GrowthOSG26, impactof120GrowthOSG27, impactof120GrowthOSH23, impactof120GrowthOSH25, impactof120GrowthOSH26, impactof120GrowthOSH27, impactof120GrowthOSI23, impactof120GrowthOSI25, impactof120GrowthOSI26, impactof120GrowthOSI27, impactof120GrowthOSJ23, impactof120GrowthOSJ26, impactof120GrowthOSJ25, impactof120GrowthOSJ27, impactof120GrowthOSK23, impactof120GrowthOSK25, impactof120GrowthOSF26, impactof120GrowthOSK26, impactof120GrowthOSK27, impactof120GrowthOSE32, impactof120GrowthOSF32, impactof120GrowthOSG32, impactof120GrowthOSH32, impactof120GrowthOSI32, impactof120GrowthOSJ32, impactof120GrowthOSK32, impactof120GrowthOSE33, impactof120GrowthOSF33, impactof120GrowthOSG33, impactof120GrowthOSH33, impactof120GrowthOSI33, impactof120GrowthOSJ33, impactof120GrowthOSK33, impactof120GrowthOSE34, impactof120GrowthOSF34, impactof120GrowthOSG34, impactof120GrowthOSH34, impactof120GrowthOSI34, impactof120GrowthOSJ34, impactof120GrowthOSK34, impactof120GrowthOSE35, impactof120GrowthOSF35, impactof120GrowthOSG35, impactof120GrowthOSH35, impactof120GrowthOSI35, impactof120GrowthOSJ35, impactof120GrowthOSK35, impactof120GrowthOSE36, impactof120GrowthOSF36, impactof120GrowthOSG36, impactof120GrowthOSH36, impactof120GrowthOSI36, impactof120GrowthOSJ36, impactof120GrowthOSK36, impactof120GrowthOSE37, impactof120GrowthOSF37, impactof120GrowthOSG37, impactof120GrowthOSH37, impactof120GrowthOSI37, impactof120GrowthOSJ37, impactof120GrowthOSK37, impactof120GrowthOSE42, impactof120GrowthOSF42, impactof120GrowthOSG42, impactof120GrowthOSH42, impactof120GrowthOSI42, impactof120GrowthOSJ42, impactof120GrowthOSK42, impactof120GrowthOSL42, impactof120GrowthOSM42, impactof120GrowthOSN42, impactof120GrowthOSO42, impactof120GrowthOSE43, impactof120GrowthOSF43, impactof120GrowthOSG43, impactof120GrowthOSH43, impactof120GrowthOSI43, impactof120GrowthOSJ43, impactof120GrowthOSK43, impactof120GrowthOSL43, impactof120GrowthOSM43, impactof120GrowthOSN43, impactof120GrowthOSO43, impactof120GrowthOSE48, impactof120GrowthOSF48, impactof120GrowthOSG48, impactof120GrowthOSH48, impactof120GrowthOSI48, impactof120GrowthOSJ48, impactof120GrowthOSK48, impactof120GrowthOSE49, impactof120GrowthOSF49, impactof120GrowthOSG49, impactof120GrowthOSH49, impactof120GrowthOSI49, impactof120GrowthOSJ49, impactof120GrowthOSK49, impactof120GrowthOSE50, impactof120GrowthOSF50, impactof120GrowthOSG50, impactof120GrowthOSH50, impactof120GrowthOSI50, impactof120GrowthOSJ50, impactof120GrowthOSK50, impactof120GrowthOSE51, impactof120GrowthOSF51, impactof120GrowthOSG51, impactof120GrowthOSH51, impactof120GrowthOSI51, impactof120GrowthOSJ51, impactof120GrowthOSK51 } = impactof120GrowthOS

    return (
        <div className="content-body">
            {/* row */}
            <div className="container-fluid">
                <div className="head-title">
                    <h2>Impact of the 120 Growth Operating System™</h2>
                    <p>120 Growth Benchmark score (orange) and scores for each of the 11 critical growth measures</p>
                </div>
                <div className="row">
                    <div className="col-xl-6 contentleft">
                        <h4>5 Years Financial Performance</h4>
                        <div className="textdiv">
                            <div className="card">
                                <div className="card-body">
                                    <div id="multi-line-chart" className="ct-chart ct-golden-section chartlist-chart">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 contentleft">
                        <h4>Active Customers</h4>
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="textdiv">
                                    <canvas id="horizontalBarChartCanvas" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body pl-0 pr-0">
                        <div className="table-responsive lefttab1">
                            <div className="leftrotate"><span>Customer Acquisition</span></div>
                            <table className="table table-striped table-responsive-md ml-5">
                                <thead>
                                    <tr>
                                        <th colSpan={2} />
                                        <th className="bgradius">Your Projections</th>
                                        <th colSpan={5} style={{ textAlign: 'center' }} className="bgradius">Projected Annual Improvements</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="thead-primary">
                                        <th style={{ width: 250 }}>Improvement in Customers</th>
                                        <th>Current</th>
                                        <th>1 Year of Improvement</th>
                                        <th>1 Year of 1% Improvements</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}>1.  Lead Generation</td>
                                        <td> {Number(impactof120GrowthOSE11).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSF11).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG11).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH11).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI11).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ11).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK11).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}>2.  Conversion</td>
                                        <td> {Number(impactof120GrowthOSE12).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSF12).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG12).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH12).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI12).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ12).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK12).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr className="highlight">
                                        <td style={{ width: 250 }}> - New Customers from Lead Generation &amp; Conversion</td>
                                        <td> {Number(impactof120GrowthOSE13).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSF13).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG13).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH13).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI13).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ13).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK13).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}> - New Customers from Unclosed Leads</td>
                                        <td />
                                        <td> {Number(impactof120GrowthOSF14).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG14).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH14).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI14).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ14).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK14).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}> 3.  Referrals</td>
                                        <td> {Number(impactof120GrowthOSE15).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSF15).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG15).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH15).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI15).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ15).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK15).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr className="highlight">
                                        <td style={{ width: 250 }}>- New Customers from Acquisitions Activities</td>
                                        <td> {Number(impactof120GrowthOSE16).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSF16).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG16).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH16).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI16).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ16).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK16).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-responsive lefttab">
                            <div className="leftrotate"><span>Customer Retention</span></div>
                            <table className="table table-striped table-responsive-md ml-5">
                                <tbody>
                                    <tr>
                                        <td style={{ width: 250 }}>4.  Reduced Customer Attrition</td>
                                        <td className="bgradiusf" />
                                        <td> {Number(impactof120GrowthOSF18).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG18).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH18).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI18).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ18).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK18).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}>5.  Extending Buying Lifetime</td>
                                        <td className="bgradiusf" />
                                        <td> {Number(impactof120GrowthOSF19).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG19).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH19).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI19).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ19).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK19).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}>6.  Customer Reactivation</td>
                                        <td className="bgradiusf" />
                                        <td> {Number(impactof120GrowthOSF20).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG20).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH20).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI20).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ20).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK20).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr className="highlight">
                                        <td style={{ width: 250 }}> - Customers from Retention Activities</td>
                                        <td className="bgradiusf" />
                                        <td> {Number(impactof120GrowthOSF21).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG21).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH21).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI21).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ21).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK21).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-responsive lefttab2">
                            <div className="leftrotate"><span>Totals</span></div>
                            <table className="table table-striped table-responsive-md ml-5  mb-0">
                                <tbody>
                                    <tr>
                                        <td style={{ width: 250 }}>Total Active Customers from Previous Year</td>
                                        <td> {Number(impactof120GrowthOSE23).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSF23).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG23).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH23).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI23).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ23).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK23).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}>New Customers Created from Acquisition &amp; Retention</td>
                                        <td className="bgradiusf" />
                                        <td> {Number(impactof120GrowthOSF24).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG24).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH24).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI24).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ24).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK24).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}>Total Customers</td>
                                        <td className="bgradiusf" />
                                        <td> {Number(impactof120GrowthOSF24).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG24).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH24).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI24).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ24).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK24).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr className="redtable">
                                        <td style={{ width: 250 }}> Customers Lost to Attrition</td>
                                        <td style={{ width: 100 }}>
                                            <input
                                                type="text"
                                                name="Inputs.averageTransactionValueE26"
                                                className="form-control"
                                                placeholder={0}
                                                value={Inputs.impactof120GrowthOSE26}
                                                onChange={(event) => {
                                                    setInputs({ ...Inputs, impactof120GrowthOSE26: event.target.value });
                                                    impactof120GrowthOSData("impactof120GrowthOSE26", event.target.value)
                                                }}
                                                onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                        event.preventDefault();
                                                    }
                                                }}
                                            />
                                        </td>
                                        <td> {Number(impactof120GrowthOSF26).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG26).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH26).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI26).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ26).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK26).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr className="highlight">
                                        <td style={{ width: 250 }}>Active Customers After Improvements - Attrition</td>
                                        <td> {Number(impactof120GrowthOSE27).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSF27).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG27).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH27).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI27).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ27).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK27).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body pl-0 pr-0">
                        <div className="table-responsive">
                            <table className="table table-striped table-responsive-md mb-0">
                                <thead>
                                    <tr>
                                        <th colSpan={2}><h3 style={{ fontSize: 16 }}>Improvement in Financial Performance</h3></th>
                                        <th className="bgradius">Your Projections</th>
                                        <th colSpan={5} style={{ textAlign: 'center' }} className="bgradius">Projected Annual Improvements</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="thead-primary">
                                        <th style={{ width: 250 }}>New Customer Value Calculations</th>
                                        <th>Current</th>
                                        <th> 1 Year of Improvement</th>
                                        <th>1 Year of 1% Improvements</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}>7.  Purchase Frequency</td>
                                        <td> {Number(impactof120GrowthOSE32).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSF32).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG32).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH32).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI32).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ32).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK32).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}>8.  Average Transaction Value</td>
                                        <td> {Number(impactof120GrowthOSE33).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSF33).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG33).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH33).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI33).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ33).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK33).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}> 9.  Gross Profit Margin</td>
                                        <td> {Number(impactof120GrowthOSE34).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSF34).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG34).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH34).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI34).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ34).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK34).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }} className="greenbg"> Company Annual Sales</td>
                                        <td> {Number(impactof120GrowthOSE35).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSF35).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG35).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH35).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI35).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ35).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK35).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }} className="lightgrrn"> Company Annual Profit</td>
                                        <td> {Number(impactof120GrowthOSE36).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSF36).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG36).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH36).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI36).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ36).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK36).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr className="thead-primary">
                                        <td style={{ width: 250 }} className="thinngrrn">Estimated Valuation Impact</td>
                                        <td> {Number(impactof120GrowthOSE37).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSF37).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG37).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH37).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI37).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ37).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK37).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body pl-0 pr-0">
                        <div className="table-responsive">
                            <table className="table table-striped table-responsive-md mb-0">
                                <thead>
                                    <tr>
                                        <th colSpan={4}><h3 style={{ fontSize: 16 }}>Annual Growth</h3></th>
                                        <th colSpan={2} className="bgradius">Year 1 Growth</th>
                                        <th colSpan={2} style={{ textAlign: 'center' }} className="bgradius">Year 2 Growth</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="thead-primary">
                                        <th style={{ width: 250 }}>New Customer Value Calculations</th>
                                        <th>Current</th>
                                        <th>Financials</th>
                                        <th>Growth Rate</th>
                                        <th>Financials</th>
                                        <th>Growth Rate</th>
                                        <th>Financials</th>
                                        <th>Growth Rate</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}>Annual Sales</td>
                                        <td> {Number(impactof120GrowthOSE42).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td className="lightyello">{Number(impactof120GrowthOSF42).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td className="lightyello">{Number(impactof120GrowthOSG42).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(impactof120GrowthOSH42).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td className="bgradiusf">{Number(impactof120GrowthOSI42).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(impactof120GrowthOSJ42).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td className="bgradiusf">{Number(impactof120GrowthOSK42).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}>Annual Profit</td>
                                        <td> {Number(impactof120GrowthOSE43).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td className="lightyello">{Number(impactof120GrowthOSF43).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td className="lightyello">{Number(impactof120GrowthOSG43).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(impactof120GrowthOSH43).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td className="bgradiusf">{Number(impactof120GrowthOSI43).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(impactof120GrowthOSJ43).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td className="bgradiusf">{Number(impactof120GrowthOSK43).toLocaleString('en', {
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
                    <div className="card-body pl-0 pr-0">
                        <div className="table-responsive">
                            <table className="table table-striped table-responsive-md mb-0">
                                <thead>
                                    <tr>
                                        <th colSpan={2}><h3 style={{ fontSize: 16 }}>Customer Financial Values</h3></th>
                                        <th className="bgradius">Your Projection</th>
                                        <th colSpan={5} style={{ textAlign: 'center' }} className="bgradius">Projected Annual Improvements</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="thead-primary">
                                        <th style={{ width: 250 }}>Annual and Lifetime</th>
                                        <th>Current</th>
                                        <th> 1 Year of Improvement</th>
                                        <th>1 Year of 1% Improvements</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}>Annual Customer Value - Sales  (ACV-S)</td>
                                        <td> {Number(impactof120GrowthOSE48).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSF48).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG48).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH48).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI48).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ48).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK48).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}>8.  Average Transaction Value</td>
                                        <td> {Number(impactof120GrowthOSE49).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSF49).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG49).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH49).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI49).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ49).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK49).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}>8.  Average Transaction Value</td>
                                        <td> {Number(impactof120GrowthOSE50).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSF50).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG50).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH50).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI50).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ50).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK50).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}>8.  Average Transaction Value</td>
                                        <td> {Number(impactof120GrowthOSE51).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSF51).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSG51).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSH51).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSI51).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSJ51).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
                                        <td> {Number(impactof120GrowthOSK51).toLocaleString('en', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })} </td>
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
