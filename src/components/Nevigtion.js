import React from 'react';

const Nevigation = (props) => {

    return(
    <div>
        <nav className="bt bb tc mw7 center mt4">
        <a 
            className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" 
             onClick={()=>props.handleChange('flatmates')}>
            Flatmates
        </a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" 
            onClick={()=>props.handleChange('bills')}>
            bills
        </a>
        <a className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" 
            onClick={()=>{props.handleChange('groceries')}}>
            Groceries
        </a>
    </nav>
  </div>
  );
}

export default Nevigation;