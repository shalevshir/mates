import React from 'react';
import PinsList from './PinsList';
import AddPin from './AddPin'

class PinBoard extends React.Component {
    state = {
        modalIsOpen: false

    }

    onRemovePin = (id) => {
        const pin = this.state.pinsList.find(pin => id === pin.id)
        pin.showPin = !pin.showPin;
        console.log(pin)
        // const updatedList = [...]
        // this.setState({showPin: false})
    } 

    
    openModal() {
        this.setState({modalIsOpen: true});
      }
     
     
      closeModal() {
          console.log("close modal")
        this.setState({modalIsOpen: false});
      }

    render(){
        const openAddPinModal = (
            <div className="flex items-center justify-center pa4" onClick={this.openModal.bind(this)}>
            <a href="#0" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
                <span className="pl1">Add Pin</span>
            </a>
            </div>
        )
        return (
            <div>
                {openAddPinModal}
                <AddPin modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal.bind(this)} />
                <PinsList list={this.state.pinsList} onRemovePin={(pinId) =>this.onRemovePin(pinId)}/>
                
            </div>
        )
    }
}
 



export default PinBoard;
