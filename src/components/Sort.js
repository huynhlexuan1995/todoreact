import React, { Component } from 'react';

class Sort extends Component {
  constructor(props){
    super(props);
    
    this.state={

    }
  }

  render() {
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Sắp xếp<span className="caret"></span></button>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a href="button">Name ASC</a></li>
            <li><a href="button">Name DESC</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="button">Level ASC</a></li>
            <li><a href="button">Level DESC</a></li>
          </ul>
          <span className="label label-success show-sort">NAME - ASC</span>
        </div>            
      </div>
    );
  }
}

export default Sort;
