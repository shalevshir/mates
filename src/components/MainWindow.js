import React from 'react';
import Bills from './Bills/Bills'
import Flatmates from './Flatmates/Flatmates'
import Groceries from './Groceries/Groceries'


class MainWindow extends React.Component{

    render(){
        switch (this.props.section) {
            case 'flatmates':
                return <Flatmates/>
            case 'bills':
                return <Bills/>
            case 'groceries':
                return <Groceries/>
            
            default:
                return <Flatmates/>;
        }
    }
}


export default MainWindow;