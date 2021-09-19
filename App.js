import './App.css';
import Getuser from './getuser';
import React,{Component} from 'react';
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      Getuser:([]),
      loading: false
    }
    this.changeState=this.changeState.bind(this)
  }
  
  changeState(){
    this.setState({loading:true});
    setTimeout(async function(){
      const response=await fetch("https://reqres.in/api/users?page=1")
      const jsonresponse=await response.json();
      console.log(jsonresponse)
      this.setState({Getuser:jsonresponse["data"],loading:false});
    }.bind(this),1700);
  }


  render(){
    return(
  
  <div className="np">
    <h2 className="toll">CLICK TO GET USER DATA</h2>
    <button className="btn" onClick={ this.changeState}>Get Users</button>
    <div className="usercontainer">
      <Getuser loading={this.state.loading} Getuser={this.state.Getuser}/>
    </div>

  </div>
  );
}
}
export default App;
