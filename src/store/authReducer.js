import * as ActionTypes from './actions/actionTypes'

const initialState= {
    token:null,
    userId:null,
    error:null,
    loading:false
}

const authReducer = (state = initialState, action) =>{
    switch(action.type){
        case ActionTypes.AUTH_START:
            return {...state, error:null, loading:true}
        case ActionTypes.AUTH_SUCCESS:
            console.log(action)
            return {...state, token:action.tokenId,userId:action.userId,error:null, loading:false}
        case ActionTypes.AUTH_FAIL:
            return {...state, error:action.error, loading:false}
        default:
            return state
    }
}

export default authReducer