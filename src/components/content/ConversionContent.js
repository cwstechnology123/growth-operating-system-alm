import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import { FinancialPerformanceImpactGraph } from "../graph/FinancialPerformanceImpactGraph";

export default function ConversionContent() {
    const dispatch = useDispatch();
    const {conversionData} = bindActionCreators(actionCreators,dispatch)
    const leadGeneration = useSelector(state => state.leadGeneration)
    const clientInputs = useSelector(state => state.clientInputs)
    const CustomerFinancialValues = useSelector(state => state.CustomerFinancialValues)
   
    const conversion = useSelector(state => state.conversion)

    const [Inputs, setInputs] = useState({
        conversionD14: conversion.conversionD14
    });

    const { leadGenerationE21, leadGenerationF21, leadGenerationG21, leadGenerationH21 } = leadGeneration
    const {CustomerFinancialValuesD24, CustomerFinancialValuesD25, CustomerFinancialValuesD26, CustomerFinancialValuesD27} = CustomerFinancialValues

    const { clientInputsH21, clientInputsH25, clientInputsH26, clientInputsH41} = clientInputs
    let conversionD13 = parseFloat(clientInputsH26) ? parseFloat(clientInputsH26) : 0 

    useEffect(() => {
        conversionData("conversionD13", conversionD13)
        conversionData("conversionD14", conversion.conversionD14)
      }, [])

    useEffect(() => {
        if(!isNaN(conversion.conversionD13) && conversion.conversionD13 != 0){
            console.log('first'); 
            conversionData("conversionRateImprovement", {
                conversionD13,
                clientInputsH21,
                clientInputsH25,
                clientInputsH41,
                leadGenerationE21,
                leadGenerationF21,
                leadGenerationG21,
                leadGenerationH21,
                leadGenerationE21,
                leadGenerationF21,
                leadGenerationG21,
                leadGenerationH21,
                CustomerFinancialValuesD24,
                CustomerFinancialValuesD25,
                CustomerFinancialValuesD26,
                CustomerFinancialValuesD27
            });
        }    
    }, [Inputs.conversionD14]);

    const { conversionD18, conversionE18, conversionF18, conversionG18, conversionH18, conversionI18, conversionD19, conversionE19, conversionF19, conversionG19, conversionH19, conversionI19, conversionD23, conversionE23, conversionF23, conversionG23, conversionH23, conversionI23, conversionD24, conversionE24, conversionF24, conversionG24, conversionH24, conversionI24, conversionD25, conversionE25, conversionF25, conversionG25, conversionH25, conversionI25, conversionD26, conversionE26, conversionF26, conversionG26, conversionH26, conversionI26, conversionD28, conversionE28, conversionF28, conversionG28, conversionH28, conversionI28, conversionD33, conversionE33, conversionF33, conversionG33, conversionH33, conversionI33, conversionD34, conversionE34, conversionF34, conversionG34, conversionH34, conversionI34, conversionD36, conversionE36, conversionF36, conversionG36, conversionH36, conversionI36, conversionD37, conversionE37, conversionF37, conversionG37, conversionH37, conversionI37, conversionD39, conversionE39, conversionF39, conversionG39, conversionH39, conversionI39 } = conversion

    return (
        <div className="content-body">
            {/* row */}
            <div className="container-fluid">
                <div className="head-title">
                    <h2>Conversion</h2>
                    <p>Conversion is the process of turning leads into paying customers or clients.  Conversion is often called "closing ratio" when applied to sales.</p>
                </div>
                <div className="row">
                    <div className="col-xl-4 contentleft">
                        <h4>Improving Conversion</h4>
                        <div className="card h-auto">
                            <div className="card-body">
                                <Link to="/" className="leftbox"><i className="fas fa-redo" /></Link>
                                <div className="d-flex justify-content-between">
                                    <p>Beginning <br />Conversion Rate</p>
                                    <form>
                                        <div className="inputbages">
                                            <input type="text" className="form-control" placeholder="0" value={clientInputs.clientInputsH26} disabled/>
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
                                    <p>What imprvement do<br /> you think is possible?</p>
                                    <form>
                                       <div className="inputbages">
                                            <input 
                                                type="text" 
                                                name="Inputs.conversionD14"
                                                className="form-control" 
                                                placeholder={0} 
                                                value={Inputs.conversionD14} 
                                                onChange={(event) => {setInputs({...Inputs, conversionD14 : event.target.value});conversionData("conversionD14", event.target.value)}} 
                                                onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                    event.preventDefault();
                                                    }
                                                }} />
                                            <span className="percent">%</span>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 contentleft">
                        <h4>Financial Performance Impact</h4>
                        <div className="card h-auto">
                            <div className="card-body">
                                <div className="textdiv">
                                    <FinancialPerformanceImpactGraph dataInput={{'price':10000,'rate':'10'}}/>
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
                                        <th style={{ width: '33%' }}><h3>Impact On Customers</h3></th>
                                        <th colSpan={2} style={{ textAlign: 'center' }} className="bgradius">Year 1 Gains</th>
                                        <th colSpan={5} style={{ textAlign: 'center' }} className="bgradius">Long-Term Gains </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="thead-primary">
                                        <th>Conversion Rate Improvements</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '33%' }}>Potential Improvement in Conversion Rate</td>
                                        <td>{Number(conversionD18).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}%</td>
                                        <td>{Number(conversionE18).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}%</td>
                                        <td>{Number(conversionF18).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}%</td>
                                        <td>{Number(conversionG18).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}%</td>
                                        <td>{Number(conversionH18).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}%</td>
                                        <td>{Number(conversionI18).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}%</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '33%' }}>New Customers from Improved Conversion</td>
                                        <td>{Number(conversionD19).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionE19).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionF19).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionG19).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionH19).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionI19).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-responsive mt-5 mb-5">
                            <table className="table table-responsive-md mb-0">
                                <thead>
                                    <tr>
                                        <th style={{ width: '33%' }}><h3> Converting Unclosed Leads </h3> </th>
                                        <th colSpan={2} style={{ textAlign: 'center' }} className="bgradius">Year 1 Gains</th>
                                        <th colSpan={5} style={{ textAlign: 'center' }} className="bgradius">Long-Term Gains </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="thead-primary">
                                        <th style={{ width: '33%' }}>Converting Unclosed Leads</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '33%' }}>Number of Unclosed leads Last year</td>
                                        <td>{Number(conversionD23).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionE23).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionF23).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionG23).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionH23).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionI23).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '33%' }}>Number of Unclosed leads From two Year Ago</td>
                                        <td>{Number(conversionD24).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionE24).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionF24).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionG24).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionH24).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionI24).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '33%' }}>Total Number of Unclosed Leads</td>
                                        <td>{Number(conversionD25).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionE25).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionF25).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionG25).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionH25).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionI25).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '33%' }}>New Customers from Unclosed Leads</td>
                                        <td>{Number(conversionD26).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionE26).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionF26).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionG26).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionH26).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>{Number(conversionI26).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mb-5">
                            <div className="table-responsive carddiv">
                                <table className="table table-responsive-md mb-0">
                                    <tbody>
                                        <tr>
                                            <th style={{ width: '33%' }}><b>Total New Customer from Improved Conversion</b></th>
                                            <td>{Number(conversionD28).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                            <td>{Number(conversionE28).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                            <td>{Number(conversionF28).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                            <td>{Number(conversionG28).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                            <td>{Number(conversionH28).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                            <td>{Number(conversionI28).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="table-responsive mb-3">
                            <table className="table table-responsive-md mb-5">
                                <thead>
                                    <tr>
                                        <th style={{ width: '33%' }}><h3>Financial Improvements</h3></th>
                                        <th colSpan={2} style={{ textAlign: 'center' }} className="bgradius">Year 1 Gains</th>
                                        <th colSpan={5} style={{ textAlign: 'center' }} className="bgradius">Long-Term Gains </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="thead-primary">
                                        <th style={{ width: '33%' }}>Annual Impact of Conversion Improvement</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr className="lightgreen">
                                        <td style={{ width: '33%' }} className="greenbg">Annual Sales</td>
                                        <td>${Number(conversionD33).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionE33).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionF33).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionG33).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionH33).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionI33).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                    </tr>
                                    <tr className="lightgreen">
                                        <td style={{ width: '33%' }} className="greenbg">Annual Profit</td>
                                        <td>${Number(conversionD34).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionE34).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionF34).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionG34).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionH34).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionI34).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="table table-responsive-md mb-5">
                                <tbody>
                                    <tr className="thead-primary">
                                        <th style={{ width: '33%' }}>Annual Impact of Conversion Improvement</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '33%' }}>Lifetime Sales</td>
                                        <td>${Number(conversionD36).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionE36).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionF36).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionG36).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionH36).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionI36).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '33%' }}>Lifetime Profit</td>
                                        <td>${Number(conversionD37).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionE37).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionF37).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionG37).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionH37).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionI37).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="table table-responsive-md mb-0">
                                <tbody>
                                    <tr className="thead-primary">
                                        <th style={{ width: '33%' }}>Valuation Impact of Conversion Improvement</th>
                                        <th>Your Projection</th>
                                        <th>1% Quarterly Improvement</th>
                                        <th>2 Years of 1% Improvements</th>
                                        <th>3 Years of 1% Improvements</th>
                                        <th>4 Years of 1% Improvements</th>
                                        <th>5 Years of 1% Improvements</th>
                                    </tr>
                                    <tr>
                                        <td style={{ width: '33%' }}>Estimated Valuation Impact</td>
                                        <td>${Number(conversionD39).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionE39).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionF39).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionG39).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionH39).toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</td>
                                        <td>${Number(conversionI39).toLocaleString('en-IN', {
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
