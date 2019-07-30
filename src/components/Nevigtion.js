import React from 'react';
import {NavLink} from 'react-router-dom'

const Nevigation = (props) => {
    console.log('nav')

    return(
    <div>
        <nav className="bt bb tc mw7 center mt4">
        <NavLink to="/" exact
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
            activeClassName="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l">
            Pin Board
        </NavLink >
    </nav>
  </div>
  );
}

export default Nevigation;