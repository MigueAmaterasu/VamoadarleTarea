import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


//Components
import Header from './componentes/header.js';
import Home from './componentes/Home/Home';
import AddFruit from './components/AddFruit/AddFruit';
import Menu from "./button";
//

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      titulo: "Mis frutitas"
    }
  }
  onSubmit=(fruit)=>{
    axios.post('http://localhost:8080/api/fruta',fruit)
      .then(res=> console.log(res.data))

  }
 
  render() {
    return (
      <div className="App">
        <Header/>
        <Menu/>
          <main>
          <Home
        />
          </main>

    
      </div>


            );
            }
          }
                          

export default App;
