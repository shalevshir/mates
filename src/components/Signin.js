import React from 'react'
const Signin = (props) =>{
    return(
        <div>
        <article className="pa4 black-80">
        <form onSubmit={(e)=>props.onSignIn(e)} action="sign-up_submit" method="get" acceptCharset="utf-8">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6 clip">Sign In</legend>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="mt3"><input onClick={(e)=> props.onSignIn(e)} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign In"/></div>
          <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="button" value="Register"/>
          </div>
        </form>
      </article>
      
        </div>
    )
}
export default Signin;