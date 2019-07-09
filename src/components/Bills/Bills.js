import React from 'react'
import {connect} from 'react-redux'

const Bills = (props) =>{
    console.log(props)
    return(
        <div>
            <p>{props.test}{props.count>0?props.count:undefined}</p>
            <button onClick={props.onClick}>Click</button>
        </div>
        )
}

const mapStateToProps = (state) =>{
    return {
        test:state.test,
        count:state.count
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onClick: ()=> dispatch({type:'CLICK'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Bills)