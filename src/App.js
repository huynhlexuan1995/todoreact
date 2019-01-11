import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import items from './mocks/tasks';
import {filter,includes,orderBy as funOrderBy,remove} from 'lodash';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state={
        items       :items,
        isShowForm  : false,
        strSearch   : '',
        orderBy     : 'name', //name or level
        orderDir    : 'asc',
    }
  }

  handleDelete=(id)=>{
    remove(this.state.items,(item)=>{
      return item.id ===id;
    });
    this.setState({
      items:this.state.items
    })
  }

  handleSort=(orderBy,orderDir)=>{
    this.setState({
      orderBy:orderBy,
      orderDir:orderDir,
    });
  }

  handleToggleForm=()=>{
    this.setState({
      isShowForm:!this.state.isShowForm
    });
  }
  handleSearch=(value)=>{
    this.setState({
      strSearch:value
    });
    console.log(value);
  }
  closeForm=()=>{
    this.setState({
      isShowForm:false
    });
  }
  render() {

    let itemsOrigin = this.state.items;
    let items       = [];
    let isShowForm  = this.state.isShowForm;
    let elmForm     = null;
    let {orderBy,orderDir}     = this.state;

    const strSearch    = this.state.strSearch;

    /*
      Items:Abc,Def,Ghj
      strSearch:abc
      Output: Abc
     */


    // Sử dụng thư viện lodash search
    items = filter(itemsOrigin,(item) => { 
        
        return includes(item.name.toLowerCase(), strSearch);
    });

    //lodash for sort
    items = funOrderBy(items,[orderBy],[orderDir]);



    if(isShowForm){
      elmForm = <Form onClickClose={this.closeForm}/>
    }
    return (
      <div>
        {/*TITLE : START*/}
        <Title/>
        {/*TITLE : END*/}

        {/* CONTROL(SEARCH + SORT + ADD)  : START*/}
        <Control 
          orderBy={orderBy}
          orderDir={orderDir}
          onClickSort={this.handleSort}
          onClickAdd={this.handleToggleForm}
          isShowForm={isShowForm}
          onClickSearchGo={this.handleSearch}
        />

        {/* CONTROL (SEARCH + SORT + ADD) : END*/}

        {/*FORM : START*/}
        {elmForm}
        {/* FORM : END*/}

        {/* LIST : START*/}
        <List 
          items = {items}
          onClickDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
