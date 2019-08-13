import React from 'react';
import Nevigation from './components/Nevigtion'
import MainWindow from './components/MainWindow'
import './App.css';
import Signin from './components/Auth/Signin'
import {connect} from 'react-redux'
import { checkAuthStatus } from './store/actions/auth'
import {BrowserRouter} from 'react-router-dom'

class App extends React.Component {

  componentDidMount(){
    this.props.checkAuth()
    console.log('App did mount')
  }

  
  render (){
    let layout = (
        <Signin/>
    )
    if(this.props.isSignedIn){
      
    }
    if(this.props.flatId){
      layout = (
        <BrowserRouter>
        <div className='App'>
          <Nevigation/>
          <MainWindow />
        </div>
        </BrowserRouter>
      )

    }
    return layout;
}}
const mapStateToProps = state =>{
  return{
    isSignedIn: state.auth.token !== null,
    flatId:state.auth.flatId
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    checkAuth: () => dispatch(checkAuthStatus())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
