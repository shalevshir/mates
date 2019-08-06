import React from 'react';
import Bills from './Bills/Bills'
import Flatmates from './Flatmates/Flatmates'
import Groceries from './Groceries/Groceries'
import PinBoard from './PinBoard/PinBoard'
import {Route, Switch, Redirect} from 'react-router-dom'


class MainWindow extends React.Component{

    componentDidMount(){
        console.log('MainWindow did mount', this.props )
    }
    render(){
        return(
            <Switch>
                <Route path="/flatmates" exact component={Flatmates}/>
                <Route path='/groceries' component={Groceries}/>
                <Route path='/pinboard' component={PinBoard}/>
                <Redirect from='/' to='/flatmates'/>
            </Switch>
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