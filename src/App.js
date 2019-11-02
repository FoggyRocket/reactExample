import React,{Component} from 'react';
import './App.css';
import {Button}from "shards-react";
import EXForm from './app/components/EXForm';


class App extends Component{
  state={
    data:{},
    isLogged:false
  }

  handleChange= e =>{
    let {data} = this.state
    let {name,value} = e.target
    data[name]=value
    this.setState({data}) //<== 
    console.log('Se esta guardando',data)
  }

  onPress= e =>{
    e.preventDefault()
    let {data} = this.state

    if(Object.keys(data).length <= 1){
      alert('Que te pasa llena los campos')
    }else{
      this.setState({data:{},isLogged:true})
    }
  }

  logout=()=>{
    this.setState({isLogged:false})
  }

  ahoraSwitch=(isLogged)=>{
    let {data}= this.state
    switch (isLogged) {
      case false:
        
        return <EXForm 
        handleChange={this.handleChange}
        onPress={this.onPress}
        {...data}
         />
    
      case true:
        return <div>
        <span>Ya estas loguiado</span>
        <Button onClick={this.logout}>Cerrar</Button>
      </div>
    }
  }

  render(){
    let {handleChange,onPress,logout,ahoraSwitch} = this
    let {data,isLogged}=this.state
    return (
      <div className="App">
        <main className="App-header">
          {!isLogged ?
          <EXForm 
            handleChange={handleChange}
            onPress={onPress}
            {...data}
             />
            :

            <div>
              <span>Ya estas loguiado</span>
              <Button onClick={logout}>Cerrar</Button>
            </div>}

            {/* {ahoraSwitch(isLogged)} */}
        </main>
      </div>
    );
  }
}

export default App;
