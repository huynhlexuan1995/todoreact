import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import items from './mocks/tasks';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state={
        items       :items,
        isShowForm  : false,
        strSearch   : '',
        orderBy     : 'name',
        orderDir    : 'asc',
    }
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
    let {orderBy}     = this.state;
    let {orderDir}    = this.state;

    const search    = this.state.strSearch;

    console.log(orderBy + '-'+ "orderBy");


    /*
      Items:Abc,Def,Ghj
      strSearch:abc
      Output: Abc
     */

    if(search.length>0){
      itemsOrigin.forEach((item) => {
        if(item.name.toLowerCase().indexOf(search) !== -1){
          items.push(item);
        }
      });
    }else{
      items = itemsOrigin;
    }


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
          onClickAdd={this.handleToggleForm}
          isShowForm={isShowForm}
          onClickSearchGo={this.handleSearch}
        />

        {/* CONTROL (SEARCH + SORT + ADD) : END*/}

        {/*FORM : START*/}
        {elmForm}
        {/* FORM : END*/}

        {/* LIST : START*/}
        <List items = {items}/>
      </div>
    );
  }
}

export default App;
