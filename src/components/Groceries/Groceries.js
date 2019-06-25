import React, {Component} from 'react'
import GroceriesList from './GroceriesList'

class Groceries extends Component {
    state={
        groceriesList:[
            {
                product:'milk',
                id:'123',
                isBought:false
            },
            {
                product:'cofee',
                id:'456',
                isBought:false
            }
        ]
    }
    render(){
        return(
            <div>
                <GroceriesList list={this.state.groceriesList}/>
            </div>
        )
    }
}
export default Groceries