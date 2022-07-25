import React from 'react'

export default function SalesCallObjectivesContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <p className="mb-0">Sales &amp; Sales Management </p>
                <h2 className="mb-2 mt-0">Target Account List Prioritization</h2>
                <ol className="list-unstyled mb-4 mt-0 list-decimal">
                <li className="lsit-one">In column B, enter at least 10 of your top targets for new clients.</li>
                <li className="lsit-one">Replace "Business Development Criteria" labels in Columns D through G with each of your top prioritized business development criteria. </li>
                <li className="lsit-one">For each criteria column, enter the weighting in Row 12.  The cumulative weighting should equal 100%. </li>
                <li className="lsit-one">Rate each target on your Target List by each of the criteria on a scale of 1 to 5 (1 = low, 5 = high). </li>
                <li className="lsit-one">The average weighted rank is calculated in Column H. </li>
                <li className="lsit-one">Identify your top five targets by the summed rankings to identify your prioritized Target List. </li>
                </ol>
            </div>
            <div className="card">
                <div className="card-body pl-0">
                <div className="table-responsive table-dta">
                    {/* table 1 */}
                    <table className="table mb-0">
                    <tbody>
                        <tr className="target-account-main-tr">
                        <td className="bg-color1 text-white" colSpan={3} style={{width: '28%'}}>
                            <div className="target-account comman-div-target">Top 10 Targeted Prospects</div>
                        </td>
                        <td className="bg-color1 text-white text-center-c" colSpan={1} style={{width: '16.75%'}}>
                            <div className="comman-div-target">Business Development <br /> Criteria #1</div>
                        </td>
                        <td className="bg-color1 text-white text-center-c" colSpan={1} style={{width: '16.75%'}}>
                            <div className="comman-div-target">Business Development <br /> Criteria #2</div>
                        </td>
                        <td className="bg-color1 text-white text-center-c" colSpan={1} style={{width: '16.75%'}}>
                            <div className="comman-div-target">Business Development <br /> Criteria #3</div>
                        </td>
                        <td className="bg-color1 text-white text-center-c" colSpan={1} style={{width: '16.75%'}}>
                            <div className="comman-div-target">Business Development <br /> Criteria #4</div>
                        </td>
                        <td className="bg-color1 text-white text-center-c" colSpan={1} style={{width: '5%'}}>
                            <div className="comman-div-target">Average <br /> Weighted Score</div>
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color3 text-white" colSpan={3}>
                            <div className="target-account comman-div-target">Weight (should total 100%)</div>
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target">40%</div>
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target">30%</div>
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target">20%</div>
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target">10%</div>
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target">100%</div>
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Prospect 1" className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target">0%</div>
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Prospect 2" className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target">0%</div>
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Prospect 3" className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target">0%</div>
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    {/* table 2 */}
                    <table className="table mb-0 mt-5">
                    <tbody>
                        <tr className="target-account-main-tr">
                        <td className="bg-color1 text-white" colSpan={3} style={{width: '28%'}}>
                            <div className="target-account comman-div-target">Top 10 Targeted Prospects</div>
                        </td>
                        <td className="bg-color1 text-white text-center-c" colSpan={1} style={{width: '16.75%'}}>
                            <div className="comman-div-target">Business Development <br /> Criteria #1</div>
                        </td>
                        <td className="bg-color1 text-white text-center-c" colSpan={1} style={{width: '16.75%'}}>
                            <div className="comman-div-target">Business Development <br /> Criteria #2</div>
                        </td>
                        <td className="bg-color1 text-white text-center-c" colSpan={1} style={{width: '16.75%'}}>
                            <div className="comman-div-target">Business Development <br /> Criteria #3</div>
                        </td>
                        <td className="bg-color1 text-white text-center-c" colSpan={1} style={{width: '16.75%'}}>
                            <div className="comman-div-target">Business Development <br /> Criteria #4</div>
                        </td>
                        <td className="bg-color1 text-white text-center-c" colSpan={1} style={{width: '5%'}}>
                            <div className="comman-div-target">Average <br /> Weighted Score</div>
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color3 text-white" colSpan={3}>
                            <div className="target-account comman-div-target">Weight (should total 100%)</div>
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target">40%</div>
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target">30%</div>
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target">20%</div>
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target">10%</div>
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target">100%</div>
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Prospect 1" className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target">0%</div>
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Prospect 2" className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target">0%</div>
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Prospect 3" className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target">0%</div>
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        </tr>
                        <tr className="target-account-main-tr">
                        <td className="bg-color2 padding-0" colSpan={3}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color2 text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
                        </td>
                        <td className="bg-color3 text-white text-center-c" colSpan={1}>
                            <div className="comman-div-target" />
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
