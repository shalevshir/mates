import React from 'react'
import GroceriesItem from './GroceriesItem'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions/actionTypes'
import { initGroceries } from '../../store/actions/groceries'

class GroceriesList extends React.Component{
    componentDidMount(){
        this.props.initGroceriesList()
    }
    render(){
        return(
            !this.props.list?<p>loading</p>:(
            <fieldset id="ma5" className="bn ">
            {
                
                this.props.list.map((product)=>{
                if(!product.isBought){
                    return <GroceriesItem key= {product.id} item={product}/>
                }
                return null
                })
            }
            </fieldset>)
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        list:state.groceries.groceriesList,
        loading:state.groceries.loading
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        initGroceriesList: () =>dispatch(initGroceries())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GroceriesList)


