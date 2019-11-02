import React,{Component} from 'react';
import './App.css';
import {Button,FormInput}from "shards-react";
import EXForm from './app/components/EXForm';
import { searchCharacter } from './app/services/comics';


class App extends Component{
  state={
    data:{},
    isLogged:false,
    result:{}
  }
  //
  componentWillMount(){} //<== antes de montar un componente
  componentDidMount(){} //<==== despues de montaar un component
  componentWillReceiveProps(){} // <== al enviar props
  componentWillUnmount(){}//cuando se desmonta un component
  componentWillUpdate(){} // se actualiza



  handleChange= e =>{
    let {data} = this.state
    let {name,value} = e.target
    data[name]=value
    this.setState({data}) //<== 
    console.log('Se esta guardando',data)
  }

  onPress= (e,nameForm) =>{
    e.preventDefault()
    let {data} = this.state
    if(nameForm === 'search'){

      searchCharacter(data)
      .then(res=>{
        let result ={}
        console.log('la respuesta',res)
        result=res
        this.setState({result,data:{}})
      }).catch(err=>{
        alert('no Existe')
        this.setState({data:{}})
      })
      
    }else{
      delete data['search']
      if(Object.keys(data).length <= 1){
        alert('Que te pasa llena los campos')
      }else{
        this.setState({data:{},isLogged:true})
      }
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
    let {data,isLogged,result}=this.state
    
    return (
      <div className="App">
              <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
          
          <FormInput 
            style={{width:'60%'}}
            id="#Buscar"
            placeholder="Buscar"
            name='search'
            onChange={handleChange}
            value={data['search']? data['search']:''} 
            //value={search? search:''} 
        />
         <Button onClick={(e)=>onPress(e,'search')}>Cerrar</Button>
         </div>
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

        <div className="App-header">
            <span>name :{result['name']}</span>
            {result['sprites'] ? <img src={result.sprites.back_shiny} width='100' height='100'/>: ''}
        </div>
      </div>
    );
  }
}

export default App;
