import React from 'react'
import MateCard from './MateCard'
import {connect} from 'react-redux'
import {initMatesList} from '../../store/actions/mates'


class Flatmates extends React.Component{
    state={}

    componentDidMount(){
        this.props.initMate(this.props.token)
    }
    render(){
        return(
            <div>
                {this.props.list.map(mate => <MateCard mate={mate} key={mate.name} />)}
            </div>
            )
    }
}

const mapStateToProps = state =>{
    return{
        list:state.mates.mates,
        token:state.auth.token
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        initMate:(token)=>dispatch(initMatesList(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flatmates);