import React, {Component} from 'react'
import GroceriesList from './GroceriesList'

class Groceries extends Component {
    state={
        groceriesList:[
            {
                product:'milk',
                id:'123',
                isBought:true
            },
            {
                product:'coffee',
                id:'456',
                isBought:false
            }
        ]
    }
    handleBuying(id){
        const item = this.state.groceriesList.find((product =>{
            return product.id === id
        }))
        item.isBought=true
        this.setState({item})
    }

    render(){
        return(
            <div>
                <GroceriesList list={this.state.groceriesList} handleBuying={this.handleBuying.bind(this)}/>
            </div>
        )
    }
}
export default Groceries