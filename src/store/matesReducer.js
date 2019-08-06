import * as actionTypes from './actions/actionTypes'
import axios from '../axios-flat'

const intialState ={
    mates:[]
}

const matesReducer = (state = intialState, action)=>{
    switch (action.type) {
        case actionTypes.FETCH_MATES_START:{
            return{
                ...state,

            }
        }
        case actionTypes.FETCH_MATES_FAIL:{
            return{
                ...state
            }
        }
        case actionTypes.FETCH_MATES_SUCCESS:{
            return{
                ...state,
                mates:action.list
            }
        }
        default:
            return state;
    }
}

export default matesReducer