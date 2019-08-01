import * as actionTypes from './actionTypes'
import axios from '../../axios-flat'
const tokenn = localStorage.getItem('token')

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
                dispatch(addGroceryFail())
            }else{
                const res = await axios.post(`/groceriesList.json?auth=` + tokenn,{isBought:false,product:input})
                dispatch(addGrocerySuccess(res.data.name, input))
            }
        } catch (error) {
            console.log(error)
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

export const initGroceries = (token) =>{
    return async (dispatch, getState) =>{
        const flatId = localStorage.getItem('flatId')
        console.log(flatId, token)
            dispatch(fetchStart())
            try {
                const res = await axios(`/groceriesList.json?auth=` +token)
                const newList = Object.entries(res.data).map(item => Object.assign(item[1], { id: item[0] }));
                console.log('initial list:' , newList)
                dispatch(setGroceries(newList))
            } catch (error) {
                dispatch(fetchFail())
            }
        
    }
}

const checkItemSuccess = (id) =>({type:actionTypes.CHECK_SUCCESS, id})

const checkItemFail = (err) =>({type:actionTypes.CHECK_FAIL, err})

const checkItemStart = () =>( {type:actionTypes.CHECK_START})

export const checkItem = (id) =>{
    console.log('check')
    return async (dispatch, getState) =>{
        dispatch(checkItemStart())
        const updatedRegistry = getState().groceries.groceriesList.find(grocery=>grocery.id===id)

        axios.patch(`/groceriesList/${id}.json?auth=${tokenn}`,{isBought:!updatedRegistry.isBought}).then(()=>{
            dispatch(checkItemSuccess(id))
        }).catch(err=>{
            console.log(err)
            dispatch(checkItemFail(err))
        })
    }
    
}
