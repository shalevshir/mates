import React from 'react';
import PinsList from './PinsList';
import { connect } from 'react-redux'
import * as actionsCreators from '../../store/actions/actionCreators'


class PinBoard extends React.Component {
    state = {

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
