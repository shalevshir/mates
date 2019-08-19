import React from 'react';
import Pin from './Pin';
import { connect } from 'react-redux'



const PinsList = (props) =>  {
    return (
        <div className="flex flex-wrap">
            {props.list.map(pin => {
                return (<Pin pin={pin} key={pin.id}/>)
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.pins.pinsList
    }
}

export default connect(mapStateToProps)(PinsList);
