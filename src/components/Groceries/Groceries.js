import React, {Component} from 'react'
import GroceriesList from './GroceriesList'
import GroceriesListBought from './GroceriesListBought'
import AddGrocerie from './AddGrocerie'
import * as actionsCreators from '../../store/actions/actionCreators'
import {connect} from 'react-redux'

class Groceries extends Component {
    state={
        modalIsOpen:false
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
                <AddGrocerie modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal.bind(this)}  />
                <GroceriesList/>
                <hr className='ma0 pa0-ns'></hr>
                <GroceriesListBought list={this.state.groceriesList}/>
                <button onClick={this.openModal.bind(this)}>Add</button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        flatName:state.flat.name,
        mates:state.flat.mates,
        groceriesList:state.flat.groceriesList,
        _id:state.flat._id
    }
}


const mapDispatchToProps = dispatch =>{
    return{
        onCheck: (id)=> dispatch(actionsCreators.checkItem(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Groceries)