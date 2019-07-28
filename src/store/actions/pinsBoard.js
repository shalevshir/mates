import * as actionTypes from './../actions/actionTypes'

export const addPin = (newPin)=>{
    return (dispatch)=> {
        dispatch({type: actionTypes.ADD_PIN, pin: newPin})
    }
}

