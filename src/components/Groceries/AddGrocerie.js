import React from 'react';
import Modal from 'react-modal';
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
      const form =<form onSubmit ={(e)=>{e.preventDefault()
        this.props.onAdd(e.target.grocery.value)
        e.target.grocery.value = ''}}>
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="ph0 mh0 fw6 clip">Add Grocery</legend>
        <div className="mt3">
            <input className="pa2 mr3 input-reset ba bg-transparent w-50 measure" type="input" name="grocery" placeholder="Add Item" autoFocus={true}/>
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5" type="submit" value="Add"/>
        </div>
        </fieldset>
        <div className="mt3"></div>
        
    </form>
        return this.state.loading?<Spinner/>:form
        }
}

const mapDispatchToProps = dispatch =>{
  return {
    onAdd: (input)=>{
      
      if(input === ''){
        alert('Please enter a grocery name') 
        return;
      }
      return dispatch(addGrocery(input))
    }
  }
}

export default connect(null,mapDispatchToProps)(AddGroceries)