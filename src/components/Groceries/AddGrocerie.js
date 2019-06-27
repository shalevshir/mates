import React from 'react';
import Modal from 'react-modal';
 
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
    render() {
        return (
            <Modal
            isOpen={this.props.modalIsOpen}
            onRequestClose={this.props.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
            <article className="pa4 black-80">
            <button className="b input-reset ba b--black bg-transparent grow pointer " onClick={this.props.closeModal} >X</button>
            <form onSubmit ={(e)=>{e.preventDefault()
                this.props.addGrocerySubmit(e.target.grocery.value)}}>
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

            </Modal>
        )
        }
}

export default AddGroceries