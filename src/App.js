import React from 'react';
import Nevigation from './components/Nevigtion'
import MainWindow from './components/MainWindow'
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      section: 'groceries'
    }
  }
  
  onSectionChange(section){
    this.setState({section: section})
  }

  render (){
    return(
    <div className="App">
      <Nevigation handleChange={this.onSectionChange.bind(this)}/>
      <MainWindow section={this.state.section}/>
    </div>
  );
  }
}

export default App;
