import React from 'react'

const GroceriesItem = (props) =>{
    return(
        <p key={props.item.id}>{props.item.product} <button>קניתי</button></p>
    )
    
}
export default GroceriesItem