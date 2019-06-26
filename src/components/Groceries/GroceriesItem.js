import React from 'react'

const styleBought={
        color:'red'
}
const GroceriesItem = (props) =>{
    return(
        <p style={props.item.isBought?styleBought:null}>{props.item.product}
        <button onClick={()=>props.handleBuying(props.item.id)}>קניתי</button></p>
    )
    
}
export default GroceriesItem