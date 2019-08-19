import * as actionTypes from './../actions/actionTypes'
import axios from '../../axios-flat'

export const addPin = (newPin)=>{
    return (dispatch)=> {
        dispatch({type: actionTypes.ADD_PIN, pin: newPin})
    }
}

const initPinsStart = () => {
    return ({type: actionTypes.FETCH_PINS_START})
}

const initPinsSuccess = (pinsList) => {
    return {type: actionTypes.FETCH_PINS_SUCCESS, list:pinsList}
}

export const initPins = (token, flat) => {
    return async (dispatch)=> {
        dispatch(initPinsStart())
        const res = await axios.get(`/${flat}/pinsBoard.json?auth=${token}`)
        const newList = Object.entries(res.data).map(item => Object.assign(item[1], { id: item[0] }));
        dispatch(initPinsSuccess(newList))
        console.log(res)
    }
}
