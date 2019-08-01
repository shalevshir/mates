import * as ActionTypes from './actionTypes'
import axios from '../../axios-flat'
import axiosUsers from '../../axios-users'

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
        error:error.data.error
    }
}
const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('expiresIn')
    localStorage.removeItem('userId')
    localStorage.removeItem('flatId')

    
    return{
        type:ActionTypes.AUTH_LOGOUT
    }
}

const authTimeOut = (expirationTime) =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(logout())
        },expirationTime*1000)
    }
}

export const auth = (email, password, isRegistered) =>{
    return async (dispatch) =>{
        dispatch(authStart())
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDx_awrzAaDLUc3FFF2rrJuQVK4yk2S2Oo'
        if(!isRegistered){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDx_awrzAaDLUc3FFF2rrJuQVK4yk2S2Oo'
        }
        axios.post(url,{email,password,returnSecureToken:true})
        .then(res =>{
            console.log('successfull authentication' , res.data)
            const expirationTime = new Date(new Date().getTime() + res.data.expiresIn * 1000)
            localStorage.setItem('token', res.data.idToken)
            localStorage.setItem('expiresIn', expirationTime)
            localStorage.setItem('userId', res.data.localId)
            console.log('test', res.data.localId)
            dispatch(getUserFlat(res.data.localId,res.data.idToken))
            dispatch(authSuccess(res.data))
            dispatch(authTimeOut(res.data.expiresIn))
            if(!isRegistered){
                dispatch(addUserToDatabase(res.data.localId,res.data.idToken))
            }

        }).catch((error) => {
            console.log(error)
            dispatch(authFail(error.response))
        })
    

    }
} 

export const checkAuthStatus = () =>{
    return dispatch =>{
        const token = localStorage.getItem('token')
        if(!token){
            console.log('no available token')
            dispatch(logout())
            return
        }
        const expirationTime = new Date(localStorage.getItem('expiresIn'))
        const userId = localStorage.getItem('userId')
        if(expirationTime > new Date()){
            dispatch(authSuccess({idToken:token,localId:userId}))
            dispatch(getUserFlat(userId, token))
            dispatch(authTimeOut((expirationTime.getTime() - new Date().getTime())/1000))
        }else{
            dispatch(logout())
        }
    }
}
export const getUserFlat =  (userId, token) =>{
    return async dispatch => {
        const res = await axiosUsers.get(`/${userId}/flat.json?auth=${token}`)
        localStorage.setItem('flatId',res.data)
        dispatch({type:ActionTypes.FETCH_FLATID,flatId:res.data})

    }
    
}


const addUserToDatabase = (userId, token) => {
    return dispatch =>{
        axiosUsers.put(`/${userId}.json?auth=${token}`,{flat:'newflat', admin:true}).then(res =>{
            console.log('added to server' , res)
        }).catch(err => {
            console.log(err)
        })
    }
}