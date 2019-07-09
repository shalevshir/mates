import * as actionsTypes from './actionsTypes'

const checkItemAction =(id)=>{

    return{type:actionsTypes.CHECK_ITEM, id}
}
export const checkItem = (id) =>{

    return (dispatch, getState) =>{
        console.log('reaching server', getState())
        setTimeout(()=>{
            dispatch(checkItemAction(id))
        },2000)
    }
    
}

export const addGrocery =(input)=>{
    return{type:actionsTypes.ADD_GROCERY, input}
}