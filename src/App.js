import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state={

    }
  }


  render() {
    return (
      <div>
        {/*TITLE : START*/}
        <Title/>
        {/*TITLE : END*/}

        {/* CONTROL(SEARCH + SORT + ADD)  : START*/}
        <Control/>

        {/* CONTROL (SEARCH + SORT + ADD) : END*/}

        {/*FORM : START*/}
        <Form/>
        {/* FORM : END*/}

        {/* LIST : START*/}
        <List/>
      </div>
    );
  }
}

export default App;
