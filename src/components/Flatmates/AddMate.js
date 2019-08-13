import React from 'react'
import {connect} from 'react-redux'
import {addMate} from '../../store/actions/mates'
const AddMate = (props) =>{
    return(
        <div>
            <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div className="tc">
                    <div className="mt3 ">
                    <form onSubmit={(e)=>{props.onAdd(e, props.token, props.flatId)}}>
                        <label className="db fw4 lh-copy f6" htmlFor="email-address">Email Address</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email" />
                        <label className="db fw4 lh-copy f6" htmlFor="email-address">Name</label>
                        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name" />
                        <button  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 mt3" type="submit" >Add Mate</button>
                    </form>
                    </div>
                </div>
            </article>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        token:state.auth.token,
        flatId:state.auth.flatId
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAdd:(e, token, flatId)=>{
            e.preventDefault()
            const email = e.target.email.value
            const name = e.target.email.value
            dispatch(addMate(email,name,token,flatId))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddMate);