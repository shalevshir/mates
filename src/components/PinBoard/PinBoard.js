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
                    showPost: true
                },
                {
                    title: 'party tonight',
                    body: 'post',
                    id: '456',
                    date: new Date(),
                    mate: 'Ofer',
                    showPost: true
                },
                {
                    title: 'party tonight',
                    body: 'text',
                    id: '125',
                    date: new Date(),
                    mate: 'Ofer',
                    showPost: true
                }
        ]
    }

    onRemovePin = (pin) => {
        this.setState({showPost: false})
    } 

    render(){
        return (
            <div>
                <PinsList list={this.state.pinsList} onRemovePin={this.onRemovePin.bind(this)}/>
            </div>
        )
    }
}

export default PinBoard;
