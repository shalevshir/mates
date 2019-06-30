import React from 'react';
import Bills from './Bills'
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
        // if(this.props.section === 'flatmates'){
            
        // }else if(this.props.section === 'bills'){
        //     return(
        //         <Bills/>
        //     )
        // }
    }
}


export default MainWindow;