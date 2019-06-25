import React from 'react';

const Nevigation = (props) => {

    return(
    <div>
        <nav className="bt bb tc mw7 center mt4">
        <p 
            className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" 
             onClick={()=>props.handleChange('flatmates')}>
            Flatmates
        </p>
        <p className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" 
            onClick={()=>props.handleChange('bills')}>
            Bills
        </p>
        <p className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" 
            onClick={()=>{props.handleChange('groceries')}}>
            Groceries
        </p>
    </nav>
  </div>
  );
}

export default Nevigation;