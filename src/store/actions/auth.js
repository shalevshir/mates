import * as ActionTypes from './actionTypes'
import axios from 'axios'

const authStart = () =>{
    return{
        type:ActionTypes.AUTH_START
    }
}
const authSuccess = (authData) =>{
    console.log(authData)
    return{
        type:ActionTypes.AUTH_SUCCESS,
        tokenId:authData.idToken,
        userId:authData.localId
    }
}
const authFail = (error) =>{    
    return{
        type:ActionTypes.AUTH_FAIL,
        error
    }
}

export const auth = (email, password, isRegistered) =>{
    return async (dispatch) =>{
        console.log(dispatch)
        dispatch(authStart())
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDx_awrzAaDLUc3FFF2rrJuQVK4yk2S2Oo'
        if(!isRegistered){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDx_awrzAaDLUc3FFF2rrJuQVK4yk2S2Oo'
        }
        try {
            const res = await axios.post(url,{email,password,returnSecureToken:true})
            console.log(res.data)
            dispatch(authSuccess(res.data))
        } catch (error) {
            dispatch(authFail(error))
        }
    

}
} 