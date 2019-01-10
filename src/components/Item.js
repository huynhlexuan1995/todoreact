import React, { Component } from 'react';

class Item extends Component {
  constructor(props){
    super(props);
    
    this.state={

    }
  }

  showElmLevel(level){
    let elmLevel = <span className="label label-info">Medium</span>;
    if(level === 0){
      elmLevel = <span className="label label-default">Small</span>
    }
    else if(level ===2){
      elmLevel = <span className="label label-danger">High</span>
    }
    return elmLevel;
  }

  render() {
    const item = this.props.item; //hoac const {item} = this.props;
    const index = this.props.index;
    return (
      <tr>
        <td className="text-center">{index+1}</td>
        <td>{item.name}</td>
        <td className="text-center">{this.showElmLevel(item.level)}</td>
        <td className="text-center">
          <button type="button" className="btn btn-warning">Edit</button>
          <button type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default Item;
