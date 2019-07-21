import React from 'react';
import Nevigation from './components/Nevigtion'
import MainWindow from './components/MainWindow'
import './App.css';
import Signin from './components/Signin'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      section: 'groceries',
      isSignedIn: true
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
    {this.state.isSignedIn?
      <div>
      <Nevigation handleChange={this.onSectionChange.bind(this)}/>
      <MainWindow section={this.state.section}/></div>
    :<Signin onSignIn={this.onSignIn.bind(this)}/>
    }

    </div>
  );
  }
}

export default App;
