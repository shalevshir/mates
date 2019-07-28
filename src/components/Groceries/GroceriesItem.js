import React from 'react'
import {connect} from 'react-redux'
import * as GroceriesActions from '../../store/actions/groceries'

const GroceriesItem = (props) =>{
    return(
        <div className="flex items-center ml6 pl5">
            <input className="mr3 mt1" type="checkbox" checked={props.item.isBought} id={props.item.id} value={props.item.product} onChange={()=>{props.onCheck(props.item.id)}}/>
            <label className={props.item.isBought?'strike ':null} onClick={()=>{props.onCheck(props.item.id)}}>{props.item.product}</label>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onCheck: (id)=> dispatch(GroceriesActions.checkItem(id))
    }
}
export default connect(null,mapDispatchToProps)(GroceriesItem)
