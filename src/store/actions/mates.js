import * as actionTypes from './actionTypes'
import axios from '../../axios-flat';

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

export const initMatesList = (token) =>{
    return async dispatch =>{
        dispatch(fetchStart)
        try {
            const res = await axios.get(`/mates.json?auth=${token}`)
            const newList = Object.entries(res.data).map(item => Object.assign(item[1], { id: item[0] }));
            dispatch(fetchSuccess(newList))
        } catch (error) {
            dispatch(fetchFail(error))
        }
    }
}