import React, {useState} from 'react';
import Bills from './Bills'
import Flatmates from './Flatmates'
import Groceries from './Groceries'


class MainWindow extends React.Component{

    render(){
        if(this.props.section === 'flatmates'){
            return(
                <Flatmates/>
            )
        }else if(this.props.section === 'bills'){
            return(
                <Bills/>
            )
        }
    }
}


export default MainWindow;