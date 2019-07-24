import React from 'react';
import PinsList from './PinsList';

class PinBoard extends React.Component {
    state = {
        pinsList:[
                {   
                    title: 'party tonight',
                    body: 'screen shot from facebook',
                    id: '123',
                    date: new Date(),
                    mate: 'Shalev',
                    showPin: true
                },
                {
                    title: 'party tonight',
                    body: 'post',
                    id: '456',
                    date: new Date(),
                    mate: 'Ofer',
                    showPin: true
                },
                {
                    title: 'party tonight',
                    body: 'text',
                    id: '125',
                    date: new Date(),
                    mate: 'Ofer',
                    showPin: true
                }
        ]
    }

    onRemovePin = (id) => {
        const pin = this.state.pinsList.find(pin => id === pin.id)
        pin.showPin = !pin.showPin;
        console.log(pin)
        // const updatedList = [...]
        // this.setState({showPin: false})
    } 

    render(){
        return (
            <div>
                <PinsList list={this.state.pinsList} onRemovePin={(pinId) =>this.onRemovePin(pinId)}/>
            </div>
        )
    }
}

export default PinBoard;
