import React from 'react'
import MateCard from './MateCard'
import AddMate from './AddMate'
import {connect} from 'react-redux'
import {initMatesList} from '../../store/actions/mates'


class Flatmates extends React.Component{
    state={}

    componentDidMount(){
        this.props.initMate(this.props.token,this.props.flatId)
    }
    render(){
        return(
            <div>
                {this.props.list.map(mate => <MateCard mate={mate} key={mate.name} />)}
                <AddMate/>
            </div>
            )
    }
}

const mapStateToProps = state =>{
    return{
        list:state.mates.mates,
        token:state.auth.token,
        flatId:state.auth.flatId
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        initMate:(token,flatId)=>dispatch(initMatesList(token,flatId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flatmates);