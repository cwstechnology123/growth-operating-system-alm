import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';

export default function CreatingGrowthMomentumContent() {
    const dispatch = useDispatch();
    const clientInputs = useSelector(state => state.clientInputs)
    const impactof120GrowthOS = useSelector(state => state.impactof120GrowthOS)
    const creatingGrowthMomentum = useSelector(state => state.creatingGrowthMomentum)
    const { creatingGrowthMomentumData } = bindActionCreators(actionCreators, dispatch)


    const [Inputs, setInputs] = useState({
        creatingGrowthMomentumM12: creatingGrowthMomentum.creatingGrowthMomentumM12,
    });

    const { clientInputsH41, clientInputsH27 } = clientInputs

    useEffect(() => {
        creatingGrowthMomentumData("creatingGrowthMomentumM12", creatingGrowthMomentum.creatingGrowthMomentumM12);
    }, [])

    useEffect(() => {
        creatingGrowthMomentumData("creatingGrowthMomentumQuarterlyImprovement", {
            creatingGrowthMomentumM12: Inputs.creatingGrowthMomentumM12,
            clientInputs,
            impactof120GrowthOS,
        });
    }, [Inputs.creatingGrowthMomentumM12]);

    const {creatingGrowthMomentumK10, creatingGrowthMomentumI12, creatingGrowthMomentumJ12, creatingGrowthMomentumK12, creatingGrowthMomentumL12, creatingGrowthMomentumI13, creatingGrowthMomentumJ13, creatingGrowthMomentumK13, creatingGrowthMomentumL13, creatingGrowthMomentumM13, creatingGrowthMomentumI14, creatingGrowthMomentumJ14, creatingGrowthMomentumK14, creatingGrowthMomentumL14, creatingGrowthMomentumM14, creatingGrowthMomentumI15, creatingGrowthMomentumJ15, creatingGrowthMomentumK15, creatingGrowthMomentumL15, creatingGrowthMomentumM15, creatingGrowthMomentumI16, creatingGrowthMomentumJ16, creatingGrowthMomentumK16, creatingGrowthMomentumL16, creatingGrowthMomentumM16, creatingGrowthMomentumI17, creatingGrowthMomentumJ17, creatingGrowthMomentumK17, creatingGrowthMomentumL17, creatingGrowthMomentumM17, creatingGrowthMomentumI18, creatingGrowthMomentumJ18, creatingGrowthMomentumK18, creatingGrowthMomentumL18, creatingGrowthMomentumM18, creatingGrowthMomentumI19, creatingGrowthMomentumJ19, creatingGrowthMomentumK19, creatingGrowthMomentumL19, creatingGrowthMomentumM19, creatingGrowthMomentumI20, creatingGrowthMomentumJ20, creatingGrowthMomentumK20, creatingGrowthMomentumL20, creatingGrowthMomentumM20, creatingGrowthMomentumI21, creatingGrowthMomentumJ21, creatingGrowthMomentumK21, creatingGrowthMomentumL21, creatingGrowthMomentumM21, creatingGrowthMomentumI22, creatingGrowthMomentumJ22, creatingGrowthMomentumK22, creatingGrowthMomentumL22, creatingGrowthMomentumM22} = creatingGrowthMomentum

    return (
        <div className="content-body">
            {/* row */}
            <div className="container-fluid">
                <div className="head-title">
                    <h2>Creating Growth Momentum</h2>
                </div>
                <div className="card">
                    <div className="card-body contentleft pl-0">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="columnchart_values" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body pl-0">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th colSpan={3} style={{ textAlign: 'center' }} className="bgradiusf">CAGR at 1% Quarterly Improvement</th>
                                        <th style={{ textAlign: 'center' }} className="bgradiusf">{creatingGrowthMomentumK10}%</th>
                                        <th colSpan={2} />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="thead-primary">
                                        <th>Yr</th>
                                        <th>Starting Revanue</th>
                                        <th>Year-end Revanue</th>
                                        <th>Annual Growth $</th>
                                        <th>CAGR</th>
                                        <th>Camulative Growth</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>${creatingGrowthMomentumI12}</td>
                                        <td>${creatingGrowthMomentumJ12}</td>
                                        <td>${creatingGrowthMomentumK12}</td>
                                        <td>{creatingGrowthMomentumL12}</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>${creatingGrowthMomentumI13}</td>
                                        <td>${creatingGrowthMomentumJ13}</td>
                                        <td>${creatingGrowthMomentumK13}</td>
                                        <td>{creatingGrowthMomentumL13}</td>
                                        <td>{creatingGrowthMomentumL13}</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>${creatingGrowthMomentumI14}</td>
                                        <td>${creatingGrowthMomentumJ14}</td>
                                        <td>${creatingGrowthMomentumK14}</td>
                                        <td>{creatingGrowthMomentumL14}</td>
                                        <td>{creatingGrowthMomentumL14}</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>${creatingGrowthMomentumI15}</td>
                                        <td>${creatingGrowthMomentumJ15}</td>
                                        <td>${creatingGrowthMomentumK15}</td>
                                        <td>{creatingGrowthMomentumL15}</td>
                                        <td>{creatingGrowthMomentumL15}</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>${creatingGrowthMomentumI16}</td>
                                        <td>${creatingGrowthMomentumJ16}</td>
                                        <td>${creatingGrowthMomentumK16}</td>
                                        <td>{creatingGrowthMomentumL16}</td>
                                        <td>{creatingGrowthMomentumL16}</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>${creatingGrowthMomentumI17}</td>
                                        <td>${creatingGrowthMomentumJ17}</td>
                                        <td>${creatingGrowthMomentumK17}</td>
                                        <td>{creatingGrowthMomentumL17}</td>
                                        <td>{creatingGrowthMomentumL17}</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>${creatingGrowthMomentumI18}</td>
                                        <td>${creatingGrowthMomentumJ18}</td>
                                        <td>${creatingGrowthMomentumK18}</td>
                                        <td>{creatingGrowthMomentumL18}</td>
                                        <td>{creatingGrowthMomentumL18}</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>${creatingGrowthMomentumI19}</td>
                                        <td>${creatingGrowthMomentumJ19}</td>
                                        <td>${creatingGrowthMomentumK19}</td>
                                        <td>{creatingGrowthMomentumL19}</td>
                                        <td>{creatingGrowthMomentumL19}</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>${creatingGrowthMomentumI20}</td>
                                        <td>${creatingGrowthMomentumJ20}</td>
                                        <td>${creatingGrowthMomentumK20}</td>
                                        <td>{creatingGrowthMomentumL20}</td>
                                        <td>{creatingGrowthMomentumL20}</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>${creatingGrowthMomentumI21}</td>
                                        <td>${creatingGrowthMomentumJ21}</td>
                                        <td>${creatingGrowthMomentumK21}</td>
                                        <td>{creatingGrowthMomentumL21}</td>
                                        <td>{creatingGrowthMomentumL21}</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>${creatingGrowthMomentumI22}</td>
                                        <td>${creatingGrowthMomentumJ22}</td>
                                        <td>${creatingGrowthMomentumK22}</td>
                                        <td>{creatingGrowthMomentumL22}</td>
                                        <td>{creatingGrowthMomentumL22}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="linkbtn">
                    <a href="javascript:void(0);"><i className="fa fa-arrow-left" /> Proceed to Equity Evolution</a>
                </div>
            </div>

        </div>

    )
}
