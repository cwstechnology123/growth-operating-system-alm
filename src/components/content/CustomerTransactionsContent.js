import React from 'react'

export default function CustomerTransactionsContent() {
  return (
   <div className="content-body">
    {/* row */}
    <div className="container-fluid">
        <div className="head-title">
            <h2>Customer Transactions</h2>	            					
        </div>
        <div className="row">
            <div className="col-xl-12 contentleft">
            <div className="card">
                <div className="card-body pl-0">
                <h4 style={{padding: '10px 0 10px 10px'}}>Average Transactions Value</h4>
                <div className="questns table-responsive">
                    <table className="table">
                    <thead>
                        <tr className="thead-primary">
                        <th style={{width: 50}}>46</th>
                        <th colSpan={2}>What do you do to increase the average transaction value?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td />
                        <td>a.</td>
                        <td><input type="checkbox" name="checkbox" /> {"Don't"} know; does not apply.</td>
                        </tr>
                        <tr>
                        <td />
                        <td>b.</td>
                        <td><input type="checkbox" name="checkbox" /> Sales reps are supposed to know how to identify opportunities for cross-selling, upselling, and point-of-sale promotions.</td>
                        </tr>
                        <tr>
                        <td />
                        <td>c.</td>
                        <td><input type="checkbox" name="checkbox" /> Sales reps are regularly trained to identify cross-selling, upselling, and point-of-purchase opportunities.</td>
                        </tr>
                        <tr>
                        <td />
                        <td>d.</td>
                        <td><input type="checkbox" name="checkbox" /> Sales reps are trained regularly; with accountabilities.</td>
                        </tr>
                        <tr>
                        <td />
                        <td>e.</td>
                        <td><input type="checkbox" name="checkbox" /> Sales reps are trained regularly; with accountabilities; working well.</td>
                        </tr>
                    </tbody>
                    </table>
                </div>  
                <div className="questns table-responsive">
                    <table className="table">
                    <thead>
                        <tr className="thead-primary">
                        <th style={{width: 50}}>47</th>
                        <th colSpan={2}>How many customers take advantage or your cross-selling, bundling, and point-of-purchase promotions?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td colSpan={1} />
                        <td style={{width: 40}}>a.</td>
                        <td><input type="checkbox" name="checkbox" /> {"Don't"} know; does not apply</td>
                        </tr>
                        <tr>
                        <td />
                        <td style={{width: 40}}>b.</td>
                        <td><input type="checkbox" name="checkbox" /> We can estimate, but it may not be accurate.</td>
                        </tr>
                        <tr>
                        <td />
                        <td style={{width: 40}}>c.</td>
                        <td><input type="checkbox" name="checkbox" /> We can make a reliable estimation.</td>
                        </tr>
                        <tr>
                        <td />
                        <td style={{width: 40}}>d.</td>
                        <td><input type="checkbox" name="checkbox" /> We know exactly.</td>
                        </tr>
                    </tbody>
                    </table>
                </div> 
                <h4 style={{padding: '10px 0 10px 10px'}}>Profit Margin</h4>
                <div className="questns table-responsive">
                    <table className="table">
                    <thead>
                        <tr className="thead-primary">
                        <th style={{width: 50}}>48</th>
                        <th colSpan={2}>What do you regularly do to increase your profit margins?  (check all that apply)?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td colSpan={1} />
                        <td style={{width: 40}}>a.</td>
                        <td><input type="checkbox" name="checkbox" /> Sales - train sales reps {'in'} effective pricing, quoting, and negotiating strategies.</td>
                        </tr>
                        <tr>
                        <td />
                        <td style={{width: 40}}>b.</td>
                        <td><input type="checkbox" name="checkbox" /> Sales - give discounts and incentives only when deserved.</td>
                        </tr>
                        <tr>
                        <td />
                        <td style={{width: 40}}>c.</td>
                        <td><input type="checkbox" name="checkbox" /> Sales - sell added value.</td>
                        </tr>
                        <tr>
                        <td />
                        <td style={{width: 40}}>d.</td>
                        <td><input type="checkbox" name="checkbox" /> Marketing - systematically test pricing.</td>
                        </tr>
                        <tr>
                        <td />
                        <td style={{width: 40}}>e.</td>
                        <td><input type="checkbox" name="checkbox" /> Marketing - target only most profitable areas.</td>
                        </tr>
                        <tr>
                        <td />
                        <td style={{width: 40}}>f.</td>
                        <td><input type="checkbox" name="checkbox" /> Marketing - use only direct response marketing and hold it accountable for performance.</td>
                        </tr>
                        <tr>
                        <td />
                        <td style={{width: 40}}>g.</td>
                        <td><input type="checkbox" name="checkbox" /> Marketing - focus on improving customer retention and loyalty.</td>
                        </tr>
                        <tr>
                        <td />
                        <td style={{width: 40}}>h.</td>
                        <td><input type="checkbox" name="checkbox" /> Purchasing - train purchasing staff {'in'} effective negotiation; always negotiate.</td>
                        </tr>
                        <tr>
                        <td />
                        <td style={{width: 40}}>i.</td>
                        <td><input type="checkbox" name="checkbox" /> Operations - cut waste; reduce operating expenses; improve efficiencies.</td>
                        </tr>
                        <tr>
                        <td />
                        <td style={{width: 40}}>j.</td>
                        <td><input type="checkbox" name="checkbox" /> Cut low margin products and services.</td>
                        </tr>
                    </tbody>
                    </table>
                </div>                                 
                </div>
            </div>
            </div>
        </div>
        </div>


    </div>

  )
}
