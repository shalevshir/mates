import React from 'react';
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import { logout } from '../store/actions/auth'

const Nevigation = (props) => {

    return(
    <div>
    <button  onClick = {props.onLogout} className="f6 f5-l link bg-animate black-80 hover-bg-light-red dib pa1 ph4-l">Logout</button>
    <nav className="bt bb tc mw7 center mt4">
        <NavLink to="/flatmates"
            className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
            activeClassName="f6 f5-l link bg-animate black-80 bg-lightest-blue dib pa3 ph4-l">
            Flatmates
        </NavLink >
        <NavLink to="/bills"
            className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
            activeClassName="f6 f5-l link bg-animate black-80 bg-light-green dib pa3 ph4-l">
            Bills
        </NavLink >
        <NavLink to="/groceries" className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l"
            activeClassName="f6 f5-l link bg-animate black-80 bg-light-blue dib pa3 ph4-l">
            Groceries
        </NavLink >
        <NavLink to="/pinboard" className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"
            activeClassName="f6 f5-l link bg-animate black-80 bg-light-green dib pa3 ph4-l">
            Pin Board
        </NavLink >
    </nav>
  </div>
  );
}

// const mapStateToProps = state =>{
//     return {
        
//     }
// }

const mapDispatchToProps = dispatch =>{
    return{
        onLogout: () => dispatch(logout())
    }
}

export default connect(null,mapDispatchToProps)(Nevigation);