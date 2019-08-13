import * as actionTypes from './actionTypes'
import axios from '../../axios-flat';
import { async } from 'q';

const fetchStart= () =>{
    return{
        type:actionTypes.FETCH_MATES_START
    }
}

const fetchFail = (error) =>{
    return{
        type:actionTypes.FETCH_MATES_FAIL
    }
}

const fetchSuccess = (data) =>{
    return{
        type:actionTypes.FETCH_MATES_SUCCESS,
        list: data
    }
}

export const initMatesList = (token, flatId) =>{
    return async dispatch =>{
        dispatch(fetchStart)
        try {
            const res = await axios.get(`${flatId}/mates.json?auth=${token}`)
            const newList = Object.entries(res.data).map(item => Object.assign(item[1], { id: item[0] }));
            dispatch(fetchSuccess(newList))
        } catch (error) {
            dispatch(fetchFail(error))
        }
    }
}

// const addMateStart = () =>{type:actionTypes.ADD_MATE_START}
// const addMateFail = () =>{type:actionTypes.ADD_MATE_FAIL}
// const addMateSuccess = () =>{type:actionTypes.ADD_MATE_START}

export const addMate = (email,name,token,flatId) => {
    return async dispatch =>{
        // dispatch(addMateStart())
        try {
            const res = await axios.get(`/users.json`)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
}