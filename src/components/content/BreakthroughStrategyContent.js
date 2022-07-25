import React from 'react'

export default function BreakthroughStrategyContent() {
  return (
   <div className="content-body">
    {/* row */}
    <div className="container-fluid">
        <div className="head-title">
            <h2>Breakthrough Strategy</h2>         					
        </div> 
        <div className="card">
            <div className="card-body pl-0">                                            
            <div className="table-responsive">
                <table className="table">
                <thead>
                    <tr className="thead-primary">
                    <th colSpan={8}>Creating Breakthrough Strategy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="bgradiusf" colSpan={4} style={{width: '50%'}}>Vision:  Goal</td>
                    <td className="bgradiusf" colSpan={4} style={{width: '50%'}}>Vision:  Result </td>
                    </tr>
                    <tr>
                    <td style={{height: 200}} colSpan={4} />
                    <td style={{height: 200}} colSpan={4} />
                    </tr>
                    <tr>
                    <td className="lightyello">Today's Date:</td>
                    <td className="lightyello"><input type="text" className="form-control" name /></td>
                    <td className="lightyello">Target Date:</td>
                    <td className="lightyello"><input type="text" className="form-control" name /></td>
                    <td className="lightyello">Name:</td>
                    <td className="lightyello"><input type="text" className="form-control" name /></td>
                    <td className="lightyello">Date:</td>
                    <td className="lightyello"><input type="text" className="form-control" name /></td>
                    </tr>
                    <tr>
                    <td colSpan={4} className="bluetab">Obstacles</td>
                    <td colSpan={4} className="bluetab">Transformation Strategies</td>
                    </tr>
                    <tr>
                    <td colSpan={4} style={{height: 80}} />
                    <td colSpan={4} style={{height: 80}} />
                    </tr>
                    <tr>
                    <td colSpan={4} style={{height: 80}} />
                    <td colSpan={4} style={{height: 80}} />
                    </tr>
                    <tr>
                    <td colSpan={4} style={{height: 80}} />
                    <td colSpan={4} style={{height: 80}} />
                    </tr>
                    <tr>
                    <td colSpan={4} style={{height: 80}} />
                    <td colSpan={4} style={{height: 80}} />
                    </tr>
                    <tr>
                    <td colSpan={4} style={{height: 80}} />
                    <td colSpan={4} style={{height: 80}} />
                    </tr>
                    <tr>
                    <td colSpan={8} className="bluetab text-center">Actions</td>
                    </tr>
                    <tr>
                    <td colSpan={4} style={{height: 80}} />
                    <td colSpan={4} style={{height: 80}} />
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
