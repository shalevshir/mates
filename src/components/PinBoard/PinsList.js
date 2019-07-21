import React from 'react';
import Pin from './Pin';

const PinsList = (props) =>  {
    return (
        <div>
            {props.list.map(pin => {
                return <Pin pin={pin} key={pin.id}/>
            })}
        </div>
    )
}

export default PinsList;
