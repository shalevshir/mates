import React from 'react'
import GroceriesItem from './GroceriesItem'

class GroceriesList extends React.Component{
    render(){
        console.log('render list', this.props.list)
        return(
            this.props.list.every((product)=>{
                return <GroceriesItem item={product}/>
            })
        )
    }
}
export default GroceriesList