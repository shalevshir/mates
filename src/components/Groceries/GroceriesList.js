import React from 'react'
import GroceriesItem from './GroceriesItem'

class GroceriesList extends React.Component{
    render(){
        return(
            <fieldset id="ma5" className="bn ">
            {this.props.list.map((product)=>{
                return <GroceriesItem key= {product.id} item={product} handleBuying={this.props.handleBuying}/>
            })}
            </fieldset>
        )
    }
}
export default GroceriesList


