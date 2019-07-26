import React from 'react';
import Pin from './Pin';
import { connect } from 'react-redux'



const PinsList = (props) =>  {
    return (
        <div className="flex flex-wrap">
            {props.list.map(pin => {
                // if(pin.showPin){
                //     return <Pin pin={pin} key={pin.id}/>
                // }
                return (pin.showPin?<Pin pin={pin} key={pin.id}/>:null)
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
