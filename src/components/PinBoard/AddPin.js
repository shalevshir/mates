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
      const newPin= {
        id: new Date(),
        date: new Date(),
        location: "tel aviv",
        mate: this.auth.userId,
        body: this.refs.body.value,
        attachments: "picture or file of something"
      }      
        this.props.onAdd(newPin,this.props.closeModal)
    }

    render(){

      const form =
       <form 
          onSubmit ={(e)=>{
            e.preventDefault()
            this.addPin()
            // this.props.onAdd(e.target.grocery.value,this.props.closeModal)
          }}>
          <h2 ref={subtitle => this.subtitle = subtitle}>{`Hello ${this.props.mate}!`}</h2>
          <div> what's on your mind?:</div>
            <input ref='body' type="text"/>
            <button onClick={(e)=>this.addPin(e)}>Add</button>
            <button onClick={this.props.closeModal}>close</button>
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
    onAdd: (newPin, close) => {
      close()
      dispatch(addPin(newPin))
    } 
  }
}

const mapStateToProps = (state) => {
  return {
    mate: state.auth.userId
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPin)