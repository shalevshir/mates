import React from 'react';
import Nevigation from './components/Nevigtion'
import MainWindow from './components/MainWindow'
import './App.css';
import Signin from './components/Auth/Signin'
import {connect} from 'react-redux'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      section: 'pinboard',
      isSignedIn: false
    }
  }
  
  onSectionChange(section){
    this.setState({section: section})
  }

  onSignIn (e) {
    e.preventDefault()
    this.setState({section: 'flatmates', isSignedIn: true})
  }

  render (){
    return(
    <div className="App">
    {this.props.isSignedIn?
      <div>
      <Nevigation handleChange={this.onSectionChange.bind(this)}/>
      <MainWindow section={this.state.section}/></div>
    :<Signin onSignIn={this.onSignIn.bind(this)}/>
    }

    </div>
  );
  }
}
const mapStateToProps = state =>{
  return{
    isSignedIn: state.auth.token?true:false
  }
}
export default connect(mapStateToProps)(App);
