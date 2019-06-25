import React, {Component} from 'react'
import GroceriesList from './GroceriesList'

class Groceries extends Component {
    state={
        groceriesList:['milk','coffe']
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