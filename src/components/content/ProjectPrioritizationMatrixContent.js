import React from 'react'

export default function CustomerTransformationModelContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <p>Opportunity Analysis </p>
                <h2 className="mb-5 mt-0">Project Prioritization Matrix </h2>
            </div>
            <div className="card">
                <div className="card-body pl-0">
                <div className="table-responsive table-dta">
                    <table className="table mb-0">
                    <tbody>
                        <tr>
                        <td colSpan={3} rowSpan={4} className="width-15 bg-color5">
                            <div className="imag-ppm-d">
                            <img src="images/ppm-icon1.png" className="img-fluid" alt="ppm-icon" />
                            </div>
                        </td>
                        <td colSpan={6} className="bg-color1 text-white text-center-c">Impact</td>
                        <td colSpan={6} className="bg-color1 text-white text-center-c">Urgency</td>
                        </tr>
                        <tr>
                        <td colSpan={2} className="bg-color3 text-white text-center-c">Business Need</td>
                        <td colSpan={2} className="bg-color3 text-white text-center-c">Strategic Fit</td>
                        <td colSpan={2} className="bg-color3 text-white text-center-c">Return on Investment</td>
                        <td colSpan={2} className="bg-color3 text-white text-center-c">Business Need</td>
                        <td colSpan={2} className="bg-color3 text-white text-center-c">Strategic Fit</td>
                        <td colSpan={2} className="bg-color3 text-white text-center-c">Return on Investment</td>
                        </tr>
                        <tr>
                        <td colSpan={2} className="bg-color6 text-font-size-12 padding-10">What is the level of business  need? </td>
                        <td colSpan={2} className="bg-color6 text-font-size-12 padding-10">What is the level of fit with  vision and  strategy?</td>
                        <td colSpan={2} className="bg-color6 text-font-size-12 padding-10">What is the potential revenue, cost savings or value? (1=Weak; 5=Large)</td>
                        <td colSpan={2} className="bg-color6 text-font-size-12 padding-10">What is the organizational readiness for this project?(1=Low; 5=High)</td>
                        <td colSpan={2} className="bg-color6 text-font-size-12 padding-10">What is the market demand that necessitates this project? (1=Weak; 5=Strong)</td>
                        <td colSpan={2} className="bg-color6 text-font-size-12 padding-10">If successful, how will it affect our competitiveness? </td>
                        </tr>
                        <tr>
                        <td className="bg-color6 text-font-size-15">Weight:</td>
                        <td className="padding-0 text-font-size-12">
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="30%" className="fucus-pla add-new-cla-ppm" />
                            </form>
                        </td>
                        <td className="padding-0 text-font-size-12">
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="30%" className="fucus-pla add-new-cla-ppm" />
                            </form>
                        </td>
                        <td className="padding-0 text-font-size-12">
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="30%" className="fucus-pla add-new-cla-ppm" />
                            </form>
                        </td>
                        <td className="bg-color6 text-font-size-15">Weight:</td>
                        <td className="padding-0 text-font-size-12">
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="40%" className="fucus-pla add-new-cla-ppm" />
                            </form>
                        </td>
                        <td className="bg-color6 text-font-size-15">Weight:</td>
                        <td className="padding-0 text-font-size-12">
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="30%" className="fucus-pla add-new-cla-ppm" />
                            </form>
                        </td>
                        <td className="bg-color6 text-font-size-15">Weight:</td>
                        <td className="padding-0 text-font-size-12">
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="30%" className="fucus-pla add-new-cla-ppm" />
                            </form>
                        </td>
                        <td className="bg-color6 text-font-size-15">Weight:</td>
                        <td className="padding-0 text-font-size-12">
                            <form className="Focused-planning-f" method>
                            <input type="text" name="Search" placeholder="40%" className="fucus-pla add-new-cla-ppm" />
                            </form>
                        </td>
                        </tr>
                        <tr>
                        <td className="bg-color1 text-white" colSpan={3}>Projects</td>
                        <td className="bg-color1 text-white text-center-c">Raw Score</td>
                        <td className="bg-color1 text-white text-center-c">Weighted Score </td>
                        <td className="bg-color1 text-white text-center-c">Raw Score</td>
                        <td className="bg-color1 text-white text-center-c">Weighted Score </td>
                        <td className="bg-color1 text-white text-center-c">Raw Score</td>
                        <td className="bg-color1 text-white text-center-c">Weighted Score </td>
                        <td className="bg-color1 text-white text-center-c">Raw Score</td>
                        <td className="bg-color1 text-white text-center-c">Weighted Score </td>
                        <td className="bg-color1 text-white text-center-c">Raw Score</td>
                        <td className="bg-color1 text-white text-center-c">Weighted Score </td>
                        <td className="bg-color1 text-white text-center-c">Raw Score</td>
                        <td className="bg-color1 text-white text-center-c">Weighted Score </td>
                        <td className="bg-color1 text-white text-font-size-15 d-hidden" />
                        <td className="bg-color1 text-white text-font-size-15">Impact</td>
                        <td className="bg-color1 text-white text-font-size-15">Urgency</td>
                        </tr>
                        <tr>
                        <td className colSpan={3}>Projects A</td>
                        <td className=" text-center-c">5</td>
                        <td className=" text-center-c">15</td>
                        <td className=" text-center-c">5</td>
                        <td className=" text-center-c">15</td>
                        <td className=" text-center-c">2</td>
                        <td className=" text-center-c">0.8</td>
                        <td className=" text-center-c">5</td>
                        <td className=" text-center-c">1.5</td>
                        <td className=" text-center-c">5</td>
                        <td className=" text-center-c">1.5</td>
                        <td className=" text-center-c">2</td>
                        <td className=" text-center-c">0.8</td>
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">3.8</td>
                        <td className=" text-center-c bg-color6">3.8</td>
                        </tr>
                        <tr>
                        <td className colSpan={3}>Projects B</td>
                        <td className=" text-center-c">4</td>
                        <td className=" text-center-c">12</td>
                        <td className=" text-center-c">4</td>
                        <td className=" text-center-c">12</td>
                        <td className=" text-center-c">3</td>
                        <td className=" text-center-c">12</td>
                        <td className=" text-center-c">2</td>
                        <td className=" text-center-c">0.9</td>
                        <td className=" text-center-c">4</td>
                        <td className=" text-center-c">12</td>
                        <td className=" text-center-c">3</td>
                        <td className=" text-center-c">12</td>
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">3.6</td>
                        <td className=" text-center-c bg-color6">3.3</td>
                        </tr>
                        <tr>
                        <td className colSpan={3}>Projects C</td>
                        <td className=" text-center-c">3</td>
                        <td className=" text-center-c">0.9</td>
                        <td className=" text-center-c">3</td>
                        <td className=" text-center-c">0.9</td>
                        <td className=" text-center-c">2</td>
                        <td className=" text-center-c">0.8</td>
                        <td className=" text-center-c">0.6</td>
                        <td className=" text-center-c">3</td>
                        <td className=" text-center-c">0.9</td>
                        <td className=" text-center-c">3</td>
                        <td className=" text-center-c">3</td>
                        <td className=" text-center-c">12</td>
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">2.6</td>
                        <td className=" text-center-c bg-color6">2.7</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
                        </tr>
                        <tr>
                        <td className colSpan={3} />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c" />
                        <td className=" text-center-c d-hidden">0.8</td>
                        <td className=" text-center-c ">0</td>
                        <td className=" text-center-c bg-color6">0</td>
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
