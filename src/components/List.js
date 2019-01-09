import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
  constructor(props){
    super(props);
    
    this.state={

    }
  }


  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading"> List Task</div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{width: '10%'}} className="text-center">#</th>
              <th>Task</th>
              <th style={{width: '20%'}} className="text-center">Level</th>
              <th style={{width: '20%'}} className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <Item/>
            <Item/>
            <Item/>

            <tr>
              <td className="text-center">2</td>
              <td>I come from Thanh Hoa</td>
              <td className="text-center"><span className="label label-success">Medium</span></td>
              <td className="text-center">
                <button type="button" className="btn btn-warning">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="text-center">2</td>
              <td>I love U</td>
              <td className="text-center"><span className="label label-default">Small</span></td>
              <td className="text-center">
                <button type="button" className="btn btn-warning">Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
