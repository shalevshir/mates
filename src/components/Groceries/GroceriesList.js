import React from 'react'
import GroceriesItem from './GroceriesItem'

class GroceriesList extends React.Component{
    render(){
        return(
            this.props.list.map((product)=>{
                return <GroceriesItem key= {product.id} item={product} handleBuying={this.props.handleBuying}/>
            })
        )
    }
}
export default GroceriesList