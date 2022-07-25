import React from 'react'

export default function OptimizationAcceleratorContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <p className="mb-0">Innovation</p>
                <h2 className="mb-4 mt-0">Optimization Accelerator</h2>
            </div>
            <div className="card">
                <div className="card-body pl-0">
                <div className="table-responsive table-dta">
                    {/* table 1 */}
                    <table className="table mb-5">
                    <tbody>
                        <tr>
                        <td colSpan={4} className="width-20 text-white bg-color1 padding-10">
                            <div className="optimization-div">
                            <div className="White-Hat-title-agile">Activity</div>
                            </div>
                        </td>
                        <td className="width-2 bg-color2 text-white">
                            <div className="optimization-div">
                            <div className="White-Hat-title-agile" />
                            </div>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    {/* table 2 */}
                    <table className="table mb-0">
                    <tbody>
                        <tr>
                        <td colSpan={4} className="width-20 text-white bg-color1 padding-10">
                            <div className="optimization-div">
                            <div className="White-Hat-title-agile">What Worked</div>
                            <img src="images/optimization/worked.png" className="img-fluid" alt="worked" />
                            </div>
                        </td>
                        <td className="width-2 bg-color1 text-white">
                            <div className="optimization-div">
                            <div className="White-Hat-title-agile">What Didn't Work</div>
                            <img src="images/optimization/what-did.png" className="img-fluid" alt="what-did" />
                            </div>
                        </td>
                        <td colSpan={4} className="width-20 text-white bg-color1">
                            <div className="optimization-div">
                            <div className="White-Hat-title-agile">Ideas for Improvement</div>
                            <img src="images/optimization/ideas.png" className="img-fluid" alt="ideas" />
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td colSpan={4} className="width-20 height80"> </td>
                        <td className="width-2 "> </td>
                        <td colSpan={4} className="width-20"> </td>
                        </tr>
                        <tr>
                        <td colSpan={4} className="width-20 height80"> </td>
                        <td className="width-2"> </td>
                        <td colSpan={4} className="width-20"> </td>
                        </tr>
                        <tr>
                        <td colSpan={4} className="width-20 height80"> </td>
                        <td className="width-2"> </td>
                        <td colSpan={4} className="width-20"> </td>
                        </tr>
                        <tr>
                        <td colSpan={4} className="width-20 height80"> </td>
                        <td className="width-2"> </td>
                        <td colSpan={4} className="width-20"> </td>
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
