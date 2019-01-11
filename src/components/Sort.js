import React, { Component } from 'react';

class Sort extends Component {
  constructor(props){
    super(props);
    
    this.state={
        showMenu:false,
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }
  handleSort = (orderBy,orderDir)=>{
    this.props.onClickSort(orderBy,orderDir);
  }
  render() {
    let {orderBy,orderDir} = this.props;
    let strSort = orderBy+ " - " +orderDir;
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <div className="dropdown">
              <button onClick={this.showMenu} className="btn btn-defautl">Sắp xếp<span className="caret"></span></button>
              {
                this.state.showMenu
                ?(
                  <div className="dropdown" aria-labelledby="dropdownMenu2">
                    <button onClick={()=>this.handleSort('name','asc')} className="btn btn-defautl dropdown-item" type="button">Name - ASC</button>
                    <button onClick={()=>this.handleSort('name','desc')} className="btn btn-defautl dropdown-item" type="button">Name - DESC</button>
                    <button onClick={()=>this.handleSort('level','asc')} className="btn btn-defautl dropdown-item" type="button">Level - ASC</button>
                    <button onClick={()=>this.handleSort('level','desc')} className="btn btn-defautl dropdown-item" type="button">Level - DESC</button>
                  </div>
                )
                : (
                    null
                  )
              }
              </div>          
          </div>           
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <div className="sort-name">
            <span className="label label-success">{ strSort }</span>
          </div> 
          </div>
      </div>
    );
  }
}

export default Sort;
