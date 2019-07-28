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
            const duplicate = getState().groceries.groceriesList.find(item=>item.product===input)
            console.log(duplicate)
            if(duplicate && duplicate.isBought){
                dispatch(checkItem(duplicate.id))
            }else if(duplicate && !duplicate.isBought){
                alert('Item is aleady on the list')
            }else{
                const newGrocery = {isBought:false,product:input}
                const res = await axios.post('/groceriesList.json', newGrocery)
                console.log(res)
                dispatch(addGrocerySuccess(res.data.name, input))
                
            }
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

const setGroceries = (newList) =>{
    return {type:actionTypes.SET_GROCERIES,  newList}
}

const fetchFail = () =>{
    return {type:actionTypes.FETCH_FAIL}
}

export const initGroceries = () =>{
    return async dispatch =>{
        dispatch(fetchStart())
        try {    
            const res = await axios('/groceriesList.json')
            const newList = Object.entries(res.data).map(item => Object.assign(item[1], { id: item[0] }));
            console.log(newList)
            dispatch(setGroceries(newList))
        } catch (error) {
            dispatch(fetchFail())
        }
    }
}

const checkItemAction =(id)=>{
    console.log('action')
    return{type:actionTypes.CHECK_ITEM, id}
}

export const checkItem = (id) =>{
    console.log('check')
    return async (dispatch, getState) =>{
        const updatedRegistry = getState().groceries.groceriesList.find(grocery=>grocery.id===id)

        axios.patch(`/groceriesList/${id}.json`,{isBought:!updatedRegistry.isBought}).then(()=>{
            dispatch(checkItemAction(id))
        }).catch(err=>{
            console.log(err)
        })
    }
    
}
