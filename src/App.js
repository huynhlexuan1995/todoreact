import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import items from './mocks/tasks';
import _ from 'lodash';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state={
        items:items,
        isShowForm: false,
        strSearch : '',
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
    const search    = this.state.strSearch;

    /*
      Items:Abc,Def,Ghj
      strSearch:abc
      Output: Abc
     */

    // Sử dụng thư viện lodash
    items = _.filter(itemsOrigin,(item) => { 
        
        return _.includes(item.name, search);
    });


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
