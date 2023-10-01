import React, { Component } from 'react';
import Counter from './component/counter';
import NavBar from './component/navbar';
import Login from './component/login';
import { Route, Routes } from 'react-router-dom';

class App  extends Component {
  state = {

    
    } 

    
  render() { 
    return (
      <>
      <NavBar/>
      <Routes>
        
        <Route path='/login' Component={Login}/>
        <Route path='/counter' Component={Counter}/>
        
      </Routes>
    

      
      
     
      
      </>
      
    );
  }
}
 
export {App} ;
