import React from 'react'
import GroceriesItem from './GroceriesItem'

import {connect} from 'react-redux'

class GroceriesListBought extends React.Component{
    render(){
        return(
            <fieldset id="ma5" className="bn ">
            {this.props.list.map((product)=>{
                if(product.isBought){
                    return <GroceriesItem key= {product.id} item={product}/>
                }
                return null
            })}
            </fieldset>
        )
    }
}


const mapStateToProps = (state) =>{
    return{
        list:state.flat.groceriesList
    }
}
export default connect(mapStateToProps)(GroceriesListBought)

