import React from 'react'

export default function BrandScorecardContent() {
  return (
   <div className="content-body">
    {/* row */}
    <div className="container-fluid">
        <div className="head-title">
            <h2>Brand Scorecar</h2>	            					
        </div>
        <div className="card">
            <div className="card-body pl-0 barndpage">
            <table className="table">
                <thead>
                <tr className="thead-primary">
                    <th>Brand Attribute</th>
                    <th>Question</th>
                    <th>Score <br />(1=Low;5=high)</th>
                    <th>Your Priority <br />(1=Low;5=high)</th>
                    <th>Overall <br />Score</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="bgradiusf" rowSpan={2} style={{fontSize: 20}}>Customers</td>
                    <td>How well do you maximize your customers Experience?</td>
                    <td>2</td>
                    <td>4 </td>
                    <td>6</td>
                </tr>
                <tr>                                   
                    <td>How well do you maximize your customers Experience?</td>
                    <td>2</td>
                    <td>4 </td>
                    <td>6</td>
                </tr>
                <tr>
                    <td className="bgradiusf" rowSpan={3} style={{fontSize: 20}}>Value</td>
                    <td>How well do you maximize your customers Experience?</td>
                    <td>2</td>
                    <td>4 </td>
                    <td>6</td>
                </tr> 
                <tr>
                    <td>How well do you maximize your customers Experience maximize your customers Experience?</td>
                    <td>2</td>
                    <td>4 </td>
                    <td>6</td>
                </tr> 
                <tr>                                    
                    <td>How well do you maximize your customers Experience?</td>
                    <td>2</td>
                    <td>4 </td>
                    <td>6</td>
                </tr>   
                <tr>
                    <td className="bgradiusf" rowSpan={5} style={{fontSize: 20}}>Positioning</td>
                    <td>How well do you maximize your customers Experience?</td>
                    <td>2</td>
                    <td>4 </td>
                    <td>6</td>
                </tr> 
                <tr>
                    <td>How well do you maximize your customers Experience maximize your customers Experience?</td>
                    <td>2</td>
                    <td>4 </td>
                    <td>6</td>
                </tr> 
                <tr>                                    
                    <td>How well do you maximize your customers Experience?</td>
                    <td>2</td>
                    <td>4 </td>
                    <td>6</td>
                </tr>   
                <tr>
                    <td>How well do you maximize your customers Experience maximize your customers Experience?</td>
                    <td>2</td>
                    <td>4 </td>
                    <td>6</td>
                </tr> 
                <tr>                                    
                    <td>How well do you maximize your customers Experience?</td>
                    <td>2</td>
                    <td>4 </td>
                    <td>6</td>
                </tr>   
                <tr>
                    <td className="bgradiusf" rowSpan={2} style={{fontSize: 20}}>Impact</td>
                    <td>How well do you maximize your customers Experience?</td>
                    <td>2</td>
                    <td>4 </td>
                    <td>6</td>
                </tr>
                <tr>                                   
                    <td>How well do you maximize your customers Experience?</td>
                    <td>2</td>
                    <td>4 </td>
                    <td>6</td>
                </tr>
                <tr>
                    <td className="bgradiusf" rowSpan={3} style={{fontSize: 20}}>Support</td>
                    <td>How well do you maximize your customers Experience?</td>
                    <td>2</td>
                    <td>4 </td>
                    <td>6</td>
                </tr> 
                <tr>
                    <td>How well do you maximize your customers Experience maximize your customers Experience?</td>
                    <td>2</td>
                    <td>4 </td>
                    <td>6</td>
                </tr> 
                <tr>                                    
                    <td>How well do you maximize your customers Experience?</td>
                    <td>2</td>
                    <td>4 </td>
                    <td>6</td>
                </tr>                       
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan={2} />
                    <td colSpan={2} style={{textAlign: 'center'}} className="bluetab">Total Score</td>
                    <td style={{textAlign: 'center'}} className="bgradiusf">80</td>
                </tr>
                </tfoot>
            </table>
            </div>
        </div>
        </div>

    </div>

  )
}
