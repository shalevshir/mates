import React from 'react'


const GroceriesItem = (props) =>{
    return(
        <div className="flex items-center ml6 pl5">
            <input className="mr3 mt1" type="checkbox" checked={props.item.isBought} id={props.item.id} value={props.item.product} onChange={()=>{props.handleBuying(props.item.id)}}/>
            <label className={props.item.isBought?'strike ':null}>{props.item.product}</label>
        </div>

    )
    
}
export default GroceriesItem
