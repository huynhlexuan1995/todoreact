import React, { Component } from 'react';

class Item extends Component {
  constructor(props){
    super(props);
    
    this.state={

    }
  }

  render() {
    return (
      <tr>
        <td className="text-center">1</td>
        <td>I am Le Xuan Huynh</td>
        <td className="text-center"><span className="label label-danger">Hight</span></td>
        <td className="text-center">
          <button type="button" className="btn btn-warning">Edit</button>
          <button type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default Item;
