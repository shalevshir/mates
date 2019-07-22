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
                    mate: 'Shalev'
                },
                {
                    title: 'party tonight',
                    body: 'post',
                    id: '456',
                    date: new Date(),
                    mate: 'Ofer'
                },
                {
                    title: 'party tonight',
                    body: 'text',
                    id: '125',
                    date: new Date(),
                    mate: 'Ofer'
                }
        ]
    }

    render(){
        return (
            <div>
                <PinsList list={this.state.pinsList}/>
            </div>
        )
    }
}

export default PinBoard;
