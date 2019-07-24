import React from 'react';
import Pin from './Pin';

const PinsList = (props) =>  {
    return (
        <div className="flex flex-wrap">
            {props.list.map(pin => {
                return <Pin pin={pin} key={pin.id} onRemoveItem={()=>props.onRemovePin(pin.id)}/>
            })}
        </div>
    )
}



export default PinsList;
