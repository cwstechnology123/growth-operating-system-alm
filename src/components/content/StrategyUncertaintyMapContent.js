import React from 'react'

export default function StrategyUncertaintyMapContent() {
  return (
    <div className="content-body">
        {/* row */}
        <div className="container-fluid">
            <div className="head-title">
                <h2>Strategy Uncertainty Map</h2>	 
                <p>A <b>Strategy Uncertainty Map</b> is used to navigate uncertain situations encountered during the strategy or innovation process. The uncertainty map explains why uncertainty occurs, how it will change throughout the strategy or innovation process, and how project leaders can harness uncertainty to make informed decisions. An uncertainty map lays out what skills will be needed to handle different degrees of uncertainty throughout the process by categorizing uncertainty along two dimensions: uncertainty about means and uncertainty about ends.</p>           					
            </div> 
            <div className="card">
                <div className="card-body pl-0 fivestep table-responsive">                                            
                <table className="table">
                    <tbody>
                    <tr>
                        <th rowSpan={4} colSpan={1} className="bluetab" style={{width: '30%'}}><img src="images/chart.png" /></th>
                        <th colSpan={6} style={{textAlign: 'center'}} className="bgradius">External Environment</th>
                        <th colSpan={6} style={{textAlign: 'center'}} className="bgradius">Internal Capabilities</th>
                    </tr>
                    <tr>                                                         
                        <th className="bluetab" colSpan={2}>Customers</th>
                        <th className="bluetab" colSpan={2}>Competitors</th>
                        <th className="bluetab" colSpan={2}>Industry Trends</th>
                        <th className="bluetab" colSpan={2}>People</th>
                        <th className="bluetab" colSpan={2}>Technology</th>
                        <th className="bluetab" colSpan={2}>Business Model</th>
                    </tr>
                    <tr>                                   
                        <td>Weight:</td>
                        <td><input type="text" name placeholder="30%" className="form-control" /></td>
                        <td>Weight:</td>
                        <td><input type="text" name placeholder="30%" className="form-control" /></td>
                        <td>Weight:</td>
                        <td><input type="text" name placeholder="30%" className="form-control" /></td>
                        <td>Weight:</td>
                        <td><input type="text" name placeholder="30%" className="form-control" /></td>
                        <td>Weight:</td>
                        <td><input type="text" name placeholder="30%" className="form-control" /></td>
                        <td>Weight:</td>
                        <td><input type="text" name placeholder="30%" className="form-control" /></td>
                    </tr>
                    <tr>                                    
                        <td className="bgradiusf" colSpan={2}>"Level of Uncertainty (1=Low; 5=High)"</td>
                        <td className="bgradiusf" colSpan={2}>"Level of Uncertainty (1=Low; 5=High)"</td>
                        <td className="bgradiusf" colSpan={2}>"Level of Uncertainty (1=Low; 5=High)"</td>
                        <td className="bgradiusf" colSpan={2}>"Level of Uncertainty (1=Low; 5=High)"</td>
                        <td className="bgradiusf" colSpan={2}>"Level of Uncertainty (1=Low; 5=High)"</td>
                        <td className="bgradiusf" colSpan={2}>"Level of Uncertainty (1=Low; 5=High)"</td>
                    </tr>
                    <tr className="thead-primary">
                        <th style={{width: '30%'}}>"Products, Services or Business Strategies"</th>
                        <th>"Raw Score"</th>
                        <th>Weighted Score</th>
                        <th>"Raw Score"</th>
                        <th>Weighted Score</th>
                        <th>"Raw Score</th>
                        <th>Weighted Score</th>
                        <th>"Raw Score</th>
                        <th>Weighted Score</th>
                        <th>"Raw Score</th>
                        <th>Weighted Score</th>
                        <th>"Raw Score</th>
                        <th>Weighted Score</th>
                    </tr>
                    <tr>
                        <td>Product</td>
                        <td>2</td>
                        <td>0.6</td>
                        <td>4</td>
                        <td>1.2</td>
                        <td>3</td>
                        <td>1.2</td>
                        <td>3</td>
                        <td>0.9</td>
                        <td>2</td>
                        <td>0.6</td>
                        <td>2</td>
                        <td>0.8</td>
                    </tr>
                    <tr>
                        <td>Service</td>
                        <td>3</td>
                        <td>0.9</td>
                        <td>4</td>
                        <td>1.2</td>
                        <td>4</td>
                        <td>1.6</td>
                        <td>4</td>
                        <td>1.2</td>
                        <td>4</td>
                        <td>1.2</td>
                        <td>3</td>
                        <td>1.2</td>
                    </tr>
                    <tr>
                        <td>Tactic A</td>
                        <td>5</td>
                        <td>1.5</td>
                        <td>3</td>
                        <td>0.9</td>
                        <td>3</td>
                        <td>1.2</td>
                        <td>3</td>
                        <td>0.9</td>
                        <td>5</td>
                        <td>1.5</td>
                        <td>4</td>
                        <td>1.6</td>
                    </tr>
                    <tr>
                        <td>Tactic B</td>
                        <td>4</td>
                        <td>1.2</td>
                        <td>3</td>
                        <td>0.9</td>
                        <td>2</td>
                        <td>0.8</td>
                        <td>5</td>
                        <td>1.5</td>
                        <td>4</td>
                        <td>1.2</td>
                        <td>2</td>
                        <td>0.8</td>
                    </tr>
                    <tr>
                        <td>Tactic C</td>
                        <td>3</td>
                        <td>0.9</td>
                        <td>3</td>
                        <td>0.9</td>
                        <td>3</td>
                        <td>1.2</td>
                        <td>4</td>
                        <td>1.2</td>
                        <td>3</td>
                        <td>0.9</td>
                        <td>1</td>
                        <td>0.4</td>
                    </tr>
                    <tr>
                        <td>Activity A</td>
                        <td>2</td>
                        <td>0.6</td>
                        <td>3</td>
                        <td>0.9</td>
                        <td>4</td>
                        <td>1.6</td>
                        <td>2</td>
                        <td>0.6</td>
                        <td>2</td>
                        <td>0.6</td>
                        <td>3</td>
                        <td>1.2</td>
                    </tr>
                    <tr>
                        <td>Activity B</td>
                        <td>4</td>
                        <td>1.2</td>
                        <td>3</td>
                        <td>0.9</td>
                        <td>2</td>
                        <td>0.8</td>
                        <td>1</td>
                        <td>0.3</td>
                        <td>3</td>
                        <td>0.9</td>
                        <td>4</td>
                        <td>1.6</td>
                    </tr>
                    <tr>
                        <td>Activity C</td>
                        <td>4</td>
                        <td>1.2</td>
                        <td>3</td>
                        <td>0.9</td>
                        <td>3</td>
                        <td>1.2</td>
                        <td>3</td>
                        <td>0.9</td>
                        <td>1</td>
                        <td>0.3</td>
                        <td>3</td>
                        <td>1.2</td>
                    </tr>
                    <tr>
                        <td>Strategy A</td>
                        <td>2</td>
                        <td>0.6</td>
                        <td>3</td>
                        <td>0.9</td>
                        <td>4</td>
                        <td>1.6</td>
                        <td>5</td>
                        <td>1.5</td>
                        <td>3</td>
                        <td>0.9</td>
                        <td>2</td>
                        <td>0.8</td>
                    </tr>
                    <tr>
                        <td>Strategy B</td>
                        <td>5</td>
                        <td>1.5</td>
                        <td>3</td>
                        <td>0.9</td>
                        <td>3</td>
                        <td>1.2</td>
                        <td>4</td>
                        <td>1.2</td>
                        <td>4</td>
                        <td>1.2</td>
                        <td>2</td>
                        <td>0.8</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>

    </div>
  )
}
