import React, {Component} from 'react'
import GroceriesList from './GroceriesList'
import AddGrocerie from './AddGrocerie'

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
        ],
        modalIsOpen:false
    }
    handleBuying(id){
        const item = this.state.groceriesList.find((product =>{
            return product.id === id
        }))
        item.isBought=true
        this.setState({item})
    }
    
  openModal() {
    this.setState({modalIsOpen: true});
  }
 

 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 

    render(){
        return(
            <div>
                <AddGrocerie modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal.bind(this)} />
                <GroceriesList list={this.state.groceriesList} handleBuying={this.handleBuying.bind(this)}/>
                <button onClick={this.openModal.bind(this)}>Add</button>
            </div>
        )
    }
}
export default Groceries