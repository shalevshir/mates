import React from 'react'
import GroceriesItem from './GroceriesItem'

class GroceriesList extends React.Component{
    render(){
        return(
            this.props.list.map((product)=>{
                return <GroceriesItem item={product}/>
            })
        )
    }
}
export default GroceriesList