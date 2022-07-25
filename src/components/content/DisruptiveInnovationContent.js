import React from 'react'

export default function InsightsToActionToImpactWorksheetContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <p className="mb-0">Innovation</p>
                <h2 className="mb-0 mt-0">Disruptive Innovation</h2>
                <p className="mb-5">A disruptive innovation is one using new technologies or business models to make existing products and services accessible to the market. To be considered disruptive, the product or service should be Desirable, Viable and Feasible.  Disruptive innovations tend to be created more in start-up companies than larger organizations. Established businesses are more interested in creating innovations that can sustain their companies versus cannibalize their existing products and services. </p>
            </div>
            <div className="card">
                <div className="card-body pl-0">
                <div className="table-responsive table-dta">
                    {/* table 2 */}
                    <table className="table mb-0">
                    <tbody>
                        <tr>
                        <td colSpan={4} className="width-20 text-white bg-color1 padding-10 d-hidden">
                            <div className="disruptive-d">
                            <div className="White-Hat-title-agile">Jobs To Be Done</div>
                            <img src="images/disruptive-innovation/jobs.png" className="img-fluid" alt="jobs" />
                            </div>
                        </td>
                        <td className="width-2 bg-color1 text-white padding-10">
                            <div className="disruptive-d">
                            <div className="White-Hat-title-agile">Desirability</div>
                            <img src="images/disruptive-innovation/desirability.png" className="img-fluid" alt="desirability" />
                            </div>
                        </td>
                        <td colSpan={4} className="width-20 text-white bg-color1 padding-10">
                            <div className="disruptive-d">
                            <div className="White-Hat-title-agile">10X Better</div>
                            <img src="images/disruptive-innovation/better.png" className="img-fluid" alt="better" />
                            </div>
                        </td>
                        <td className="width-2 bg-color1 text-white padding-10">
                            <div className="disruptive-d">
                            <div className="White-Hat-title-agile">10X Cost Improvement</div>
                            <img src="images/disruptive-innovation/cost.png" className="img-fluid" alt="cost" />
                            </div>
                        </td>
                        <td className="width-2 bg-color1 text-white padding-10">
                            <div className="disruptive-d">
                            <div className="White-Hat-title-agile">Disruptive Potential</div>
                            <img src="images/disruptive-innovation/disruptive-potential.png" className="img-fluid" alt="disruptive-potential" />
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td colSpan={4} className="width-20 text-white bg-color1 padding-15">
                            Ideas
                        </td>
                        <td className="width-2 text-white bg-color3">
                            Addresses significant and growing customer problem (1=Low; 10=High)
                        </td>
                        <td colSpan={4} className="width-20 text-white bg-color3">
                            Unique solution that's 10X simpler or better than existing options (1=Low; 10=High)
                        </td>
                        <td className="width-2 text-white bg-color3">
                            Provides a solution that's 10X cheaper; enabling new business models (1=Low; 10=High)
                        </td>
                        <td className="width-2 text-white bg-color3">
                            Score Total from Desirability + Feasability + Viability
                        </td>
                        </tr>
                        <tr>
                        <td colSpan={4} className="width-20 padding-15">
                            Idea 1
                        </td>
                        <td className="width-2">
                            1
                        </td>
                        <td colSpan={4} className="width-20">
                            2
                        </td>
                        <td className="width-2 text-center-c">
                            3
                        </td>
                        <td className="width-2 color-r text-center-c">
                            6
                        </td>
                        </tr>
                        <tr>
                        <td colSpan={4} className="width-20 padding-15">
                            Idea 2
                        </td>
                        <td className="width-2">
                            3
                        </td>
                        <td colSpan={4} className="width-20">
                            2
                        </td>
                        <td className="width-2 text-center-c">
                            4
                        </td>
                        <td className="width-2 color-y text-center-c">
                            9
                        </td>
                        </tr>
                        <tr>
                        <td colSpan={4} className="width-20 padding-15">
                            Idea 3
                        </td>
                        <td className="width-2">
                            5
                        </td>
                        <td colSpan={4} className="width-20">
                            6
                        </td>
                        <td className="width-2 text-center-c">
                            6
                        </td>
                        <td className="width-2 color-g text-center-c">
                            17
                        </td>
                        </tr>
                        <tr>
                        <td colSpan={4} className="width-20 padding-15">
                            Idea 4
                        </td>
                        <td className="width-2">
                            6
                        </td>
                        <td colSpan={4} className="width-20">
                            7
                        </td>
                        <td className="width-2 text-center-c">
                            5
                        </td>
                        <td className="width-2 color-g text-center-c">
                            18
                        </td>
                        </tr>
                        <tr>
                        <td colSpan={4} className="width-20 padding-15">
                            Idea 5
                        </td>
                        <td className="width-2">
                            1
                        </td>
                        <td colSpan={4} className="width-20">
                            2
                        </td>
                        <td className="width-2 text-center-c">
                            2
                        </td>
                        <td className="width-2 color-r text-center-c">
                            5
                        </td>
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
