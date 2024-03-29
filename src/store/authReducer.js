import * as ActionTypes from './actions/actionTypes'

const initialState= {
    token:null,
    userId:null,
    flatId:null,
    error:null,
    loading:false
}

const authReducer = (state = initialState, action) =>{
    switch(action.type){
        case ActionTypes.AUTH_START:
            return {...state, error:null, loading:true}
        case ActionTypes.AUTH_SUCCESS:
            return {...state, token:action.tokenId,userId:action.userId,error:null, loading:false}
        case ActionTypes.AUTH_FAIL:
            return {...state, error:action.error, loading:false}
        case ActionTypes.AUTH_LOGOUT:
            return {...state, token:null, userId:null, flatId:null}
        case ActionTypes.FETCH_FLAT_START:
            return{...state, loading:true, error:null}
        case ActionTypes.FETCH_FLAT_SUCCESS:
            return{...state, flatId:action.flatId, loading:false, error:null}
        case ActionTypes.FETCH_FLAT_FAIL:
            return{...state, error:action.error, loading:false}
        default:
            return state
    }
}

export default authReducer