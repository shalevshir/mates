import React from 'react';
import Modal from 'react-modal';
import * as actionsCreators from '../../store/actions/actionCreators'
import { connect } from 'react-redux'
import Spinner from '../spinner'
import { addGrocery } from '../../store/actions/groceries'

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
 
Modal.setAppElement('#root')



class AddGroceries extends React.Component {
    state={
      loading:false
    }
    render() {
      const form =<article className="pa4 black-80">
      <button className="b input-reset ba b--black bg-transparent grow pointer " onClick={this.props.closeModal} >X</button>
      <form onSubmit ={(e)=>{e.preventDefault()
          this.props.onAdd(e.target.grocery.value,this.props.closeModal)}}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="ph0 mh0 fw6 clip">Add Grocery</legend>
          <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="grocery">Grocery</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="input" name="grocery"  autoFocus={true}/>
          </div>
          </fieldset>
          <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Add"/></div>
          
      </form>
      </article>
        return (
            <Modal
            isOpen={this.props.modalIsOpen}
            onRequestClose={this.props.closeModal}
            style={customStyles}
            contentLabel="Add Grocery Modal"
            >
            {this.state.loading?<Spinner/>:form}
            
            </Modal>
        )
        }
}

const mapDispatchToProps = dispatch =>{
  return {
    onAdd: (input, close)=>{
      
      if(input === ''){
        alert('Please enter a grocery name') 
        return;
      }
      close()
      return dispatch(addGrocery(input))
    }
  }
}

export default connect(null,mapDispatchToProps)(AddGroceries)