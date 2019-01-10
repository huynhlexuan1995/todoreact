import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props);
    
    this.state={
      strSearch:''
    };

    //props.onClickGo
  }

  handleSearch=()=>{
    // console.log(this.refs.search.value); dung refs
    // console.log(this.state.strSearch); : dung onChange=>HandleChange ( event.target.value) lay ra value
    this.props.onClickGo(this.state.strSearch)
  }
  handleClear=()=>{
    this.setState({strSearch:''});
    this.props.onClickGo('');
  }
  handleChange=(event)=>{
    this.setState({strSearch:event.target.value})
  }

  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input value={this.state.strSearch} onChange={this.handleChange} type="text" className="form-control" ref="search" placeholder="Search for..."/>
          <span className="input-group-btn">
          <button onClick={this.handleClear} type="button" className="btn btn-warning">Clear</button>
            <button onClick={this.handleSearch} type="button" className="btn btn-info">Go!</button>
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
