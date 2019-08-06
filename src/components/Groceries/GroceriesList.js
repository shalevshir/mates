import React from 'react'
import GroceriesItem from './GroceriesItem'
import {connect} from 'react-redux'
import { initGroceries } from '../../store/actions/groceries'

class GroceriesList extends React.Component{
    componentDidMount(){
        console.log(this.props.list.length)
        if(this.props.list.length===0){
            this.props.initGroceriesList(this.props.token,this.props.flatId)
        }
    }


    render(){
        return(
            <fieldset id="ma5" className="bn ">
            {
                this.props.list.map((product)=> !product.isBought?<GroceriesItem key= {product.id} item={product}/>: null)
            }
            </fieldset>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        list:state.groceries.groceriesList,
        token:state.auth.token,
        flatId:state.auth.flatId
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        initGroceriesList: (token, flatId) =>dispatch(initGroceries(token, flatId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GroceriesList)


