import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
  constructor(props){
    super(props);
    
    this.state={

    };
    //props.onClickSearchGo
  }

  handleAdd=()=>{
    this.props.onClickAdd();
  }

  render() {
    let elmButton = <button type="button" className="btn btn-info btn-block" onClick={this.handleAdd}>Add Task</button>;
    if(this.props.isShowForm){
      elmButton = <button type="button" className="btn btn-success btn-block" onClick={this.handleAdd}>Close Form</button>
    }
    return (
      <div className="row">
          {/* SEARCH : START */}
          <Search onClickGo = {this.props.onClickSearchGo}/>

          {/* SEARCH:END*/}

          {/* SORT : START*/}
          <Sort/>
          {/* SORT : END */}

          {/* Add : start*/}
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            {elmButton}
          </div>
        {/* ADD : END*/}
        </div>
    );
  }
}

export default Control;
