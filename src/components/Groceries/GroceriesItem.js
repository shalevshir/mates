import React from 'react'
import {connect} from 'react-redux'
import * as GroceriesActions from '../../store/actions/groceries'

const GroceriesItem = (props) =>{
    return(
        <div className="flex items-center ml6 pl5">
            <input className="mr3 mt1" type="checkbox" checked={props.item.isBought} id={props.item.id} value={props.item.product} onChange={()=>{props.onCheck(props.item.id,props.token, props.flatId)}}/>
            <label className={props.item.isBought?'strike ':null} onClick={()=>{props.onCheck(props.item.id,props.token, props.flatId)}}>{props.item.product}</label>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        token:state.auth.token,
        flatId:state.auth.flatId
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        onCheck: (id, token, flatId)=> dispatch(GroceriesActions.checkItem(id,token, flatId))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GroceriesItem)
