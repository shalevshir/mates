import React from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root') 

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class AddPin extends React.Component {
    state={

    }



    render(){
        return (
            <Modal
            isOpen={this.props.modalIsOpen}
            onRequestClose={this.props.closeModal}
            style={customStyles}
            contentLabel="Add Pin to Board"
          >
   
            <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
            <button onClick={this.props.closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
  
        )
    }

}


export default AddPin