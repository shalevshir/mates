import React from 'react'
import GroceriesItem from './GroceriesItem'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions/actionsTypes'

const GroceriesList = props =>{
    return(
        <fieldset id="ma5" className="bn ">
        {
            props.list.map((product)=>{
            if(!product.isBought){
                return <GroceriesItem key= {product.id} item={product}/>
            }
            return null
            })
        }
        </fieldset>
    )
}

const mapStateToProps = (state) =>{
    return{
        list:state.flat.groceriesList
    }
}
export default connect(mapStateToProps)(GroceriesList)


