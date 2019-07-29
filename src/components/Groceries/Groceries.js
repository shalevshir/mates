import React, {Component} from 'react'
import GroceriesList from './GroceriesList'
import GroceriesListBought from './GroceriesListBought'
import AddGrocerie from './AddGrocerie'
import * as actionsCreators from '../../store/actions/groceries'
import {connect} from 'react-redux'
import Spinner from '../spinner'
import { initGroceries } from '../../store/actions/groceries'

class Groceries extends Component {
    state={
        modalIsOpen:false
    }
    componentDidMount(){
        this.props.initGroceriesList()
    }
    
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  
 

    render(){
        let list = <Spinner/>
        if(!this.props.loading){
            list =(
                <div>
                    <AddGrocerie modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal.bind(this)}  />
                    <GroceriesList/>
                    <hr className='ma0 pa0-ns'></hr>
                    <GroceriesListBought list={this.state.groceriesList}/>
                    <button onClick={this.openModal.bind(this)}>Add</button>
                </div>
            )
        }
        return <div>{list}</div>
    }
}

const mapStateToProps = (state) =>{
    return {
        groceriesList:state.groceries.groceriesList,
        loading:state.groceries.loading
    }
}


const mapDispatchToProps = dispatch =>{
    return{
        onCheck: (id)=> dispatch(actionsCreators.checkItem(id)),
        initGroceriesList: () =>dispatch(initGroceries())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Groceries)