import React from 'react'

export default function SalesCallObjectivesContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <p> Sales &amp; Sales Management </p>
                <h2 className="mb-5 mt-0">Account Penetration Matrix</h2>
            </div>
            <div className="card">
                <div className="card-body pl-0">
                <div className="table-responsive table-dta">
                    <table className="table mb-0">
                    <tbody>
                        <tr>
                        <td className="bg-color1 text-white" colSpan={3} rowSpan={3}>
                            <div className="vendor-div-main" style={{width: 250}}>
                            <span className="text-center-c width-100 d-block font-size-20">Prospect or Client</span>
                            </div>
                        </td>
                        <td className="bg-color1 text-white text-center-c" colSpan={8}>Products &amp; Services</td>
                        <td className="bg-color1 text-white text-center-c" colSpan={9} rowSpan={2}>
                            <img src="images/optimization/worked.png" className="img-fluid" alt="worked" />
                        </td>
                        </tr>
                        <tr>
                        <td className="bg-color3 text-white padding-0" colSpan={2}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Product/Service A" className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color3 text-white padding-0" colSpan={2}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Product/Service B" className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color3 text-white padding-0" colSpan={2}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Product/Service C" className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color3 text-white padding-0" colSpan={2}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Product/Service D" className="fucus-pla" />
                            </form>
                        </td>
                        {/* <td class="bg-color1 text-white">Score</td> */}
                        </tr>
                        <tr>
                        <td className="bg-color2 text-center-c">Told</td>
                        <td className="bg-color3 text-center-c text-font-size-15">Sold</td>
                        <td className="bg-color2 text-center-c">Told</td>
                        <td className="bg-color3 text-center-c text-font-size-15">Sold</td>
                        <td className="bg-color2 text-center-c">Told</td>
                        <td className="bg-color3 text-center-c text-font-size-15">Sold</td>
                        <td className="bg-color2 text-center-c">Told</td>
                        <td className="bg-color3 text-center-c text-font-size-15">Sold</td>
                        <td className="bg-color1 text-white text-center-c">Score</td>
                        </tr>
                        <tr>
                        <td className="bg-color2 width-5 text-center-c">1</td>
                        <td className="bg-color1 text-white padding-0" colSpan={2}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Prospect A" className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c">4</td>
                        <td className="bg-color2 text-center-c">2</td>
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c">0</td>
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c">3</td>
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color1 text-white text-center-c">9</td>
                        </tr>
                        <tr>
                        <td className="bg-color2 width-5 text-center-c">2</td>
                        <td className="bg-color1 text-white padding-0" colSpan={2}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Prospect B" className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c">1</td>
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c">3</td>
                        <td className="bg-color2 text-center-c">0</td>
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c">2</td>
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color1 text-white text-center-c">6</td>
                        </tr>
                        <tr>
                        <td className="bg-color2 width-5 text-center-c">3</td>
                        <td className="bg-color1 text-white padding-0" colSpan={2}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Prospect C" className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color1 text-white text-center-c">0</td>
                        </tr>
                        <tr>
                        <td className="bg-color2 width-5 text-center-c">4</td>
                        <td className="bg-color1 text-white padding-0" colSpan={2}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Prospect D" className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color1 text-white text-center-c">0</td>
                        </tr>
                        <tr>
                        <td className="bg-color2 width-5 text-center-c">5</td>
                        <td className="bg-color1 text-white padding-0" colSpan={2}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Prospect E" className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color1 text-white text-center-c">0</td>
                        </tr>
                        <tr>
                        <td className="bg-color2 width-5 text-center-c">6</td>
                        <td className="bg-color1 text-white padding-0" colSpan={2}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Prospect F" className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color1 text-white text-center-c">0</td>
                        </tr>
                        <tr>
                        <td className="bg-color2 width-5 text-center-c">7</td>
                        <td className="bg-color1 text-white padding-0" colSpan={2}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Prospect G" className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color1 text-white text-center-c">0</td>
                        </tr>
                        <tr>
                        <td className="bg-color2 width-5 text-center-c">8</td>
                        <td className="bg-color1 text-white padding-0" colSpan={2}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Prospect H" className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color1 text-white text-center-c">0</td>
                        </tr>
                        <tr>
                        <td className="bg-color2 width-5 text-center-c">9</td>
                        <td className="bg-color1 text-white padding-0" colSpan={2}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Prospect I" className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color1 text-white text-center-c">0</td>
                        </tr>
                        <tr>
                        <td className="bg-color2 width-5 text-center-c">10</td>
                        <td className="bg-color1 text-white padding-0" colSpan={2}>
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="Prospect J" className="fucus-pla" />
                            </form>
                        </td>
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color2 text-center-c" />
                        <td className="bg-color3 text-font-size-15 text-center-c" />
                        <td className="bg-color1 text-white text-center-c">0</td>
                        </tr>
                    </tbody>
                    </table>
                    {/* table 2 */} 
                    <table className="table mb-0">
                    <tbody>
                        <tr>
                        <td className="bg-color1 width-50 text-white text-center-c" colSpan={2}>
                            <div className="Told-title">Told</div>
                        </td>
                        <td className="bg-color1 width-50 text-white text-center-c" colSpan={2}>
                            <div className="Told-title">Sold</div>
                        </td>
                        </tr>
                        <tr>
                        <td className="bg-color2 width-50 text-center-c text-font-size-15" colSpan={2}>
                            <div className="Told-title">0 - have not told</div>
                        </td>
                        <td className="bg-color3 width-50 text-font-size-15 text-center-c" colSpan={2}>
                            <div className="Told-title">3 - sold once</div>
                        </td>
                        </tr>
                        <tr>
                        <td className="bg-color2 width-50 text-center-c text-font-size-15" colSpan={2}>
                            <div className="Told-title">0 - have not told</div>
                        </td>
                        <td className="bg-color3 width-50 text-font-size-15 text-center-c" colSpan={2}>
                            <div className="Told-title">3 - sold once</div>
                        </td>
                        </tr>
                        <tr>
                        <td className="bg-color2 width-50 text-center-c text-font-size-15" colSpan={2}>
                            <div className="Told-title">0 - have not told</div>
                        </td>
                        <td className="bg-color3 width-50 text-font-size-15 text-center-c" colSpan={2}>
                            <div className="Told-title">3 - sold once</div>
                        </td>
                        </tr>
                        <tr>
                        <td className="bg-color2 width-5 text-center-c text-font-size-15" colSpan={2}>
                            <div className="Told-title">0 - have not told</div>
                        </td>
                        <td className="bg-color3 width-5 text-font-size-15 text-center-c" colSpan={2}>
                            <div className="Told-title">3 - sold once</div>
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
