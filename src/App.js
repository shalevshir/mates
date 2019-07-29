import React from 'react';
import Nevigation from './components/Nevigtion'
import MainWindow from './components/MainWindow'
import './App.css';
import Signin from './components/Auth/Signin'
import {connect} from 'react-redux'
  import { checkAuthStatus } from './store/actions/auth'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      section: 'groceries',
      isSignedIn: true
    }
  }
  componentDidMount(){
    this.props.checkAuth()
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
    {/* {this.props.isSignedIn? */}
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
    isSignedIn: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    checkAuth: () => dispatch(checkAuthStatus())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
