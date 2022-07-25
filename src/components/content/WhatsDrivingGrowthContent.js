import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';

export default function WhatsDrivingGrowth() {
    // const dispatch = useDispatch();
    // const leadGeneration = useSelector(state => state.leadGeneration)
    // const conversion = useSelector(state => state.conversion)
    // const referrals = useSelector(state => state.referrals)
    // const purchaseFrequency = useSelector(state => state.purchaseFrequency)
    // const buyingLifeTime = useSelector(state => state.buyingLifeTime)
    // const reducingAttrition = useSelector(state => state.reducingAttrition)
    // const customerReactivation = useSelector(state => state.customerReactivation)
    // const averageTransactionValue = useSelector(state => state.averageTransactionValue)
    // const whatsDrivingGrowth = useSelector(state => state.whatsDrivingGrowth)
    // console.log("whatsDrivingGrowth", whatsDrivingGrowth)
    // const { whatsDrivingGrowthData } = bindActionCreators(actionCreators, dispatch)



    // useEffect(() => {
    //     whatsDrivingGrowthData("whatsDrivingGrowthImproving", {
            
    //     });
    // }, [
    //     Inputs.whatsDrivingGrowthE17,
    //     Inputs.whatsDrivingGrowthE18,
    //     Inputs.whatsDrivingGrowthE19,
    //     Inputs.whatsDrivingGrowthE20,
    // ]);

    // const { whatsDrivingGrowthD17, whatsDrivingGrowthF17, whatsDrivingGrowthD18, whatsDrivingGrowthF18, whatsDrivingGrowthD19, whatsDrivingGrowthF19, whatsDrivingGrowthD20, whatsDrivingGrowthF20, whatsDrivingGrowthD22, whatsDrivingGrowthF22, whatsDrivingGrowthD23, whatsDrivingGrowthF23, } = whatsDrivingGrowth
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">            		
                <h2>What's Driving Growth</h2>	
                <p>Your Growth Potential</p>				
            </div>
            <div className="row">
                <div className="col-xl-8">
                <div className="textdiv">
                    <div className="card">
                    <div className="card-body">
                        <div id="chartContainer" style={{height: 300, width: '100%'}} />
                    </div>
                    </div>
                </div>
                </div> 
                <div className="col-xl-4">
                <div className="card">
                    <div className="card-body">
                    <div className="textdiv">
                        <div id="simple-pie" className="ct-chart ct-golden-section simple-pie-chart-chartist chartlist-chart" style={{minHeight: 300}} />
                    </div>
                    </div>
                </div>
                </div>
            </div>	
            <div className="card">
                <div className="card-body pl-0">
                <div className="table-responsive">
                    <table className="table table-striped table-responsive-md mb-0">
                    <thead>
                        <tr className="thead-primary">
                        <th>What's Driving Sales &amp; Profit</th>
                        <th>Start</th>
                        <th>Year 1</th>
                        <th>Year 2</th>
                        <th>Year 3</th>
                        <th>Year 4</th>
                        <th>Year 5</th>
                        <th>Totals</th>
                        </tr>
                    </thead>
                    <tbody>            					
                        <tr>
                        <td>Leads Generation</td>
                        <td className="bluetab" />
                        <td>$ 72,000</td>
                        <td>$ 1,58,865</td>
                        <td>$ 2,66,301</td>
                        <td>$ 4,01,733</td>
                        <td>$ 5,74,876</td>
                        <td>$ 14,73,776</td>
                        </tr>
                        <tr>
                        <td>Conversion</td>
                        <td className="bluetab" />
                        <td>$ 3,92,000</td>
                        <td>$ 7,98,605</td>
                        <td>$ 12,24,182</td>
                        <td>$ 16,77,477</td>
                        <td>$ 21,69,746</td>
                        <td>$ 62,62,010</td>
                        </tr>
                        <tr>
                        <td>Referrals</td>
                        <td className="bluetab" />
                        <td>$ 40,000</td>
                        <td>$ 81,000</td>
                        <td>$ 1,24,864</td>
                        <td>$ 1,69,859</td>
                        <td>$ 2,16,653</td>
                        <td>$ 6,32,975</td>
                        </tr>
                        <tr>
                        <td>Purchase Frequency</td>
                        <td className="bluetab" />
                        <td>$ 4,00,000</td>
                        <td>$ 8,16,000</td>
                        <td>$ 12,48,640</td>
                        <td>$ 16,98,586</td>
                        <td>$ 21,66,529</td>
                        <td>$ 63,29,755</td>
                        </tr>
                        <tr>
                        <td>Buying Lifetime</td>
                        <td className="bluetab" />
                        <td>$ 3,84,315</td>
                        <td>$ 5,54,438</td>
                        <td>$ 11,10,036</td>
                        <td>$ 15,10,036</td>
                        <td>$ 18,51,958</td>
                        <td>$ 56,11,084</td>
                        </tr>
                        <tr>
                        <td>Reducing Attrition</td>
                        <td className="bluetab" />
                        <td>$ 1,00,000</td>
                        <td>$ 2,27,977</td>
                        <td>$ 4,18,033</td>
                        <td>$ 17,11,557</td>
                        <td>$ 11,62,524</td>
                        <td>$ 26,20,091</td>
                        </tr>
                        <tr>
                        <td>Customer Reactivation</td>
                        <td className="bluetab" />
                        <td>$ 2,40,000</td>
                        <td>$ 3,36,000</td>
                        <td>$ 4,43,196</td>
                        <td>$ 5,71,544</td>
                        <td>$ 7,32,007</td>
                        <td>$ 23,22,747</td>
                        </tr>
                        <tr>
                        <td>Average Transaction Value</td>
                        <td className="bluetab" />
                        <td>$ 4,00,000</td>
                        <td>$ 8,16,000</td>
                        <td>$ 12,48,640</td>
                        <td>$ 16,98,586</td>
                        <td>$ 21,66,529</td>
                        <td>$ 63,29,755</td>
                        </tr>
                        <tr className="thead-primary">
                        <th>Sales:
                        </th><th>$ 1,00,00,000</th>
                        <th>$ 20,28,615</th>
                        <th>$ 39,89,485</th>
                        <th>$ 60,83,891</th>
                        <th>$ 84,39,378</th>
                        <th>$ 1,10,40,822</th>
                        <th>$ 3,15,82,192</th>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className="table-sucess">
                        <td colSpan={6} />            						
                        <td className="table-active">Total Revenue</td>
                        <td className="table-active">$ 4,15,82,192</td>
                        </tr>
                    </tfoot>
                    </table>
                </div>
                </div>
            </div>
            </div>

    </div>
  )
}
