import React from 'react'
import Modal from 'react-modal';
import Spinner from '../spinner'
import { addPin } from '../../store/actions/pinsBoard'
import {connect} from 'react-redux'

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
      loading:false
    }

    addPin(e){
      e.preventDefault()
      console.log(this.refs)
      const newPin= {
          title: this.refs.title.value,
          body: this.refs.title.value}      
        this.props.onAdd(newPin)
    }

    render(){

      const form =
       <form 
          onSubmit ={(e)=>{
            e.preventDefault()
            this.addPin()
            // this.props.onAdd(e.target.grocery.value,this.props.closeModal)
          }}>
          <h2 ref={subtitle => this.subtitle = subtitle}>Add a pin to the board</h2>
          <button onClick={this.props.closeModal}>close</button>
          <div>Title:</div>
            <input ref='title' type="text"/>
          <div>Pin Text(body):</div>
            <input ref='body' type="text"/>
            <button onClick={(e)=>this.addPin(e)}>Add</button>
        </form>

          return (
            <Modal 
            isOpen={this.props.modalIsOpen}
            onRequestClose={this.props.closeModal}
            style={customStyles}
            contentLabel="Add Pin to Board"
          >
            {this.state.loading?<Spinner/>:form}
          </Modal>
  
        )
    }
}



const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (newPin) => dispatch(addPin(newPin))
  }
}


export default connect(null, mapDispatchToProps)(AddPin)