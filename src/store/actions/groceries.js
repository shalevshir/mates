import * as actionTypes from './actionTypes'
import axios from '../../axios-flat'

const addGroceryStart = () =>{
    return{
        type:actionTypes.ADD_GROCERY_START
    }
}

const addGrocerySuccess = (id, input) =>{
    const newGrocery ={
        id,
        product:input,
        isBought:false
    }
    console.log(newGrocery)
    return{
        type:actionTypes.ADD_GROCERY_SUCCESS,
        grocery:newGrocery
    }
}

const addGroceryFail = () =>{
    return{
        type:actionTypes.ADD_GROCERY_FAIL
    }
}

export const addGrocery =(input)=>{
    return async (dispatch, getState) =>{
        dispatch(addGroceryStart())
        try {
            const res = await axios.post('/groceriesList.json',{isBought:false,product:input})
            dispatch(addGrocerySuccess(res.data.name, input))
        } catch (error) {
            dispatch(addGroceryFail())
        }
        

    }
    
}

const fetchStart = () =>{
    return{
        type:actionTypes.FETCH_START
    }
}

const setGroceries = (groceriesList) =>{
    return {type:actionTypes.SET_GROCERIES, groceriesList}
}

const fetchFail = () =>{
    return {type:actionTypes.FETCH_FAIL}
}

export const initGroceries = () =>{
    return async dispatch =>{
        dispatch(fetchStart())
        try {    
            const res = await axios('/groceriesList.json')
            dispatch(setGroceries(res.data))
        } catch (error) {
            dispatch(fetchFail())
        }
    }
}

const checkItemAction =(id)=>{
    return{type:actionTypes.CHECK_ITEM, id}
}

export const checkItem = (id) =>{

    return async (dispatch, getState) =>{
        const updatedRegistry = getState().groceries.groceriesList.find(grocery=>grocery.id===id)

        axios.patch(`/groceriesList/${id}.json`,{isBought:!updatedRegistry.isBought}).then(()=>{
            dispatch(checkItemAction(id))
        }).catch(err=>{
            console.log(err)
        })
    }
    
}
