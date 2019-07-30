import React from 'react';
import Bills from './Bills/Bills'
import Flatmates from './Flatmates/Flatmates'
import Groceries from './Groceries/Groceries'
import PinBoard from './PinBoard/PinBoard'
import {Route} from 'react-router-dom'


class MainWindow extends React.Component{

    componentDidMount(){
        console.log('MainWindow did mount')
    }
    render(){
        return(
            <div>
            <Route path="/" exact component={Flatmates}/>
            <Route path='/groceries' component={Groceries}/>
            <Route path='/pinboard' component={PinBoard}/>
            </div>
        )
        
    }
}


// switch (this.props.section) {
//     case 'flatmates':
//         return <Flatmates/>
//     case 'bills':
//         return <Bills/>
//     case 'groceries':
//         return <Groceries/>
//     case 'pinboard':
//         return <PinBoard/>
//     default:
//         return <Flatmates/>;
        
export default MainWindow;