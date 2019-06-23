import React from 'react';
import Nevigation from './components/Nevigtion'
import MainWindow from './components/MainWindow'
import './App.css';


class App extends React.Component {
  state= {
    section:'flatmates'
  }
  onSectionChange(section){
    this.setState({section})
  }

  render (){
    return(
    <div className="App">
      <Nevigation handleChange={this.onSectionChange}/>
      <MainWindow section={this.state.section}/>
    </div>
  );
  }
}

export default App;
