import React, {Component} from 'react'
import * as authActions from '../../store/actions/auth'
import { connect } from 'react-redux'
import Spinner from '../spinner'


class Signin extends Component{
  state = {
    isRegistered:true
  }
  
  handleSubmit =  e =>{
    e.preventDefault()
    this.props.submit(this.refs.email.value,this.refs.password.value, this.state.isRegistered)
  }
  switchMethodHandle = ()=>{
    this.setState(prevState =>{
      return {isRegistered:!prevState.isRegistered}
    })
  }

  render(){
    const isRegisteredLabel = `Switch To ${this.state.isRegistered?'Register':'Signin'}`
    let errorMessage = null
    if(this.props.error){
      errorMessage = this.props.error.message
    }
    let form = (
    <div>
      <article className="pa4 black-80">
        <form onSubmit={this.handleSubmit} action="sign-up_submit" method="get" acceptCharset="utf-8">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Sign In</legend>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  ref="email"/>
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent" type="password" name="password"  ref="password"/>
            </div>
          </fieldset>
          <p>{errorMessage}</p>
          <div className="mt3"><input onClick={this.switchMethodHandle} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="button" value={isRegisteredLabel}/>
          <div className="mt3"><input onClick={this.handleSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value={this.state.isRegistered?"Signin":"Signup"}/></div>
          </div>
        </form>
      </article>
    </div>)
    if (this.props.loading){
      form=<Spinner/>
    }
    return form
  }
}
const mapStateToProps = state => {
  return{
    error:state.auth.error,
    loading:state.auth.loading
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    submit:(email, password, isRegistered)=>dispatch(authActions.auth(email, password, isRegistered))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signin);