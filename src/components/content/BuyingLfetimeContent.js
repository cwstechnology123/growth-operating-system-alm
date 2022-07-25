import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import { BuyingLifetimeGraph } from "../graph/BuyingLifetimeGraph";

export default function BuyingLfetimeContent() {
  const clientInputs = useSelector(state => state.clientInputs)
  const leadGeneration = useSelector(state => state.leadGeneration)
  const dispatch = useDispatch();
  const { buyingLifeTimeData, CustomerFinancialValuesData } = bindActionCreators(actionCreators, dispatch)
  CustomerFinancialValuesData("INITIAL_STATE");
  const CustomerFinancialValues = useSelector(state => state.CustomerFinancialValues)
  const buyingLifeTime = useSelector(state => state.buyingLifeTime)

  const [Inputs, setInputs] = useState({
    buyingLifeTimeD13: buyingLifeTime.buyingLifeTimeD13,
  });
  const { clientInputsH30, clientInputsH16, clientInputsH19, clientInputsH41 } = clientInputs
  let buyingLifeTimeD12 =(parseFloat(clientInputsH19)) ? parseFloat(clientInputsH19) : 0

  useEffect(() => {
    buyingLifeTimeData("buyingLifeTimeD12",buyingLifeTimeD12);
    buyingLifeTimeData("buyingLifeTimeD13",buyingLifeTime.buyingLifeTimeD13);
}, [])

  useEffect(() => {
    buyingLifeTimeData("buyingLifeTimeImprovements", {
      buyingLifeTimeD12,
      CustomerFinancialValues,
      clientInputsH41,
    });
  }, [Inputs.buyingLifeTimeD13]);


  const { buyingLifeTimeD17, buyingLifeTimeE17, buyingLifeTimeD18, buyingLifeTimeE18, buyingLifeTimeF18, buyingLifeTimeG18, buyingLifeTimeF17, buyingLifeTimeG17, buyingLifeTimeH18, buyingLifeTimeI18, buyingLifeTimeH17, buyingLifeTimeI17,buyingLifeTimeD19,buyingLifeTimeE19,buyingLifeTimeF19,buyingLifeTimeG19,buyingLifeTimeH19,buyingLifeTimeI19, buyingLifeTimeD23, buyingLifeTimeE23, buyingLifeTimeF23, buyingLifeTimeG23, buyingLifeTimeH23, buyingLifeTimeI23,  buyingLifeTimeD24, buyingLifeTimeE24, buyingLifeTimeF24, buyingLifeTimeG24, buyingLifeTimeH24, buyingLifeTimeI24, buyingLifeTimeD26, buyingLifeTimeE26, buyingLifeTimeF26, buyingLifeTimeG26, buyingLifeTimeH26, buyingLifeTimeI26 } = buyingLifeTime //object destructuring for buyingLifeTime




  return (
    <div className="content-body">
      {/* row */}
      <div className="container-fluid">
        <div className="head-title">
          <h2>Buying Lifetime</h2>
          <p>Buying Lifetime in how long on average a customer Continuse to do Business with you. The longer that time the more oportunity you have to sell to them. Buying Lifetime is often the limited scope of how people think about customer retention.</p>
        </div>
        <div className="row">
          <div className="col-xl-6 contentleft">
            <h4>Increasing Buying Lifetime </h4>
            <div className="card h-auto">
              <div className="card-body">
                <a href="javascript:void(0);" className="leftbox"><i className="fas fa-redo" /></a>
                <div className="d-flex justify-content-between">
                  <p>Customer <br />Purchase Frequency (Annually)</p>
                  <form>
                    <input type="text" name className="form-control" placeholder="0" value={(parseFloat(clientInputsH19)) ? parseFloat(clientInputsH19) : 0} />
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
                        name="Inputs.buyingLifeTimeD13"
                        className="form-control"
                        placeholder={0}
                        value={Inputs.buyingLifeTimeD13}
                        onChange={(event) => {
                          setInputs({ ...Inputs, buyingLifeTimeD13: event.target.value });
                          buyingLifeTimeData("buyingLifeTimeD13", event.target.value)
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
            <h4>Buying Lifetime: Impact on Financial Performence</h4>
            <div className="card">
              <div className="card-body">
                <div className="textdiv">
                  <BuyingLifetimeGraph style={{ minHeight: 270 }} />
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
                    <th>Buying Lifetime Improvements</th>
                    <th>Your Projection</th>
                    <th>1% Quarterly Improvement</th>
                    <th>2 Years of 1% Improvements</th>
                    <th>3 Years of 1% Improvements</th>
                    <th>4 Years of 1% Improvements</th>
                    <th>5 Years of 1% Improvements</th>
                  </tr>
                  <tr>
                    <td style={{ width: '40%' }}>Annual Improvement in Buying Lifetime </td>
                    <td> {buyingLifeTimeD17} </td>
                    <td> {buyingLifeTimeE17} </td>
                    <td> {buyingLifeTimeF17} </td>
                    <td> {buyingLifeTimeG17} </td>
                    <td> {buyingLifeTimeH17} </td>
                    <td> {buyingLifeTimeI17} </td>
                  </tr>
                  <tr>
                    <td style={{ width: '40%' }}>New Annual Buying Lifetime</td>
                    <td> {buyingLifeTimeD18} </td>
                    <td> {buyingLifeTimeE18} </td>
                    <td> {buyingLifeTimeF18} </td>
                    <td> {buyingLifeTimeG18} </td>
                    <td> {buyingLifeTimeH18} </td>
                    <td> {buyingLifeTimeI18} </td>
                  </tr>
                  <tr>
                    <td style={{ width: '40%' }}>Customers Retained by Extending Buying Lifetime</td>
                    <td> {buyingLifeTimeD19} </td>
                    <td> {buyingLifeTimeE19} </td>
                    <td> {buyingLifeTimeF19} </td>
                    <td> {buyingLifeTimeG19} </td>
                    <td> {buyingLifeTimeH19} </td>
                    <td> {buyingLifeTimeI19} </td>
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
                    <th style={{ width: '40%' }}><h3>Financial Improvements</h3></th>
                    <th colSpan={2} style={{ textAlign: 'center' }} className="bgradius">Year 1 Gains</th>
                    <th colSpan={5} style={{ textAlign: 'center' }} className="bgradius">Long-Term Gains </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="thead-primary">
                    <th style={{ width: '40%' }}>Annual Impact of Increasing Buying Lifetime</th>
                    <th>Your Projection</th>
                    <th>1% Quarterly Improvement</th>
                    <th>2 Years of 1% Improvements</th>
                    <th>3 Years of 1% Improvements</th>
                    <th>4 Years of 1% Improvements</th>
                    <th>5 Years of 1% Improvements</th>
                  </tr>
                  <tr>
                    <td style={{ width: '40%' }}>Annual Sales</td>
                    <td> {Number(buyingLifeTimeD23).toLocaleString('en')} </td>
                    <td> {Number(buyingLifeTimeE23).toLocaleString('en')} </td>
                    <td> {Number(buyingLifeTimeF23).toLocaleString('en')} </td>
                    <td> {Number(buyingLifeTimeG23).toLocaleString('en')} </td>
                    <td> {Number(buyingLifeTimeH23).toLocaleString('en')} </td>
                    <td> {Number(buyingLifeTimeI23).toLocaleString('en')} </td>
                  </tr>
                  <tr>
                    <td style={{ width: '40%' }}>Annual Profit</td>
                    <td> {Number(buyingLifeTimeD24).toLocaleString('en')} </td>
                    <td> {Number(buyingLifeTimeE24).toLocaleString('en')} </td>
                    <td> {Number(buyingLifeTimeF24).toLocaleString('en')} </td>
                    <td> {Number(buyingLifeTimeG24).toLocaleString('en')} </td>
                    <td> {Number(buyingLifeTimeH24).toLocaleString('en')} </td>
                    <td> {Number(buyingLifeTimeI24).toLocaleString('en')} </td>
                  </tr>
                  <tr className="thead-primary">
                    <th style={{ width: '40%' }}>Valuation Impact of Increasing Buying Lifetime</th>
                    <th>Your Projection</th>
                    <th>1% Quarterly Improvement</th>
                    <th>2 Years of 1% Improvements</th>
                    <th>3 Years of 1% Improvements</th>
                    <th>4 Years of 1% Improvements</th>
                    <th>5 Years of 1% Improvements</th>
                  </tr>
                  <tr>
                    <td style={{ width: '40%' }}>Estimated Valuation Impact</td>
                    <td> {Number(buyingLifeTimeD26).toLocaleString('en')} </td>
                    <td> {Number(buyingLifeTimeE26).toLocaleString('en')} </td>
                    <td> {Number(buyingLifeTimeF26).toLocaleString('en')} </td>
                    <td> {Number(buyingLifeTimeG26).toLocaleString('en')} </td>
                    <td> {Number(buyingLifeTimeH26).toLocaleString('en')} </td>
                    <td> {Number(buyingLifeTimeI26).toLocaleString('en')} </td>
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
