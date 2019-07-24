import * as ActionTypes from './actionTypes'
import axios from 'axios'

const authStart = () =>{
    return{
        type:ActionTypes.AUTH_START
    }
}
const authSuccess = (authData) =>{
    return{
        type:ActionTypes.AUTH_SUCCESS,
        tokenId:authData.data.idToken,
        userId:authData.data.localId
    }
}
const authFail = (error) =>{
    console.log(error)
    
    return{
        type:ActionTypes.AUTH_FAIL,
        error
    }
}

export const auth =(dispatch) => async (email, password, isRegistered) =>{
        dispatch(authStart)
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDx_awrzAaDLUc3FFF2rrJuQVK4yk2S2Oo'
        if(!isRegistered){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDx_awrzAaDLUc3FFF2rrJuQVK4yk2S2Oo'
        }
        try {
            const res = await axios.post(url,{email,password,returnSecureToken:true})
            console.log(res)
            authSuccess(res)
        } catch (error) {
            console.log(error)
            authFail(error)
        }
    

}