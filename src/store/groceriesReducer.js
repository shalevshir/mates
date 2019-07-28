import * as actionTypes from './actions/actionTypes'
import axios from '../axios-flat'

const initState = {
    groceriesList:[],
    loading:false,
    error:false
}

export default (state = initState, action) =>{
    switch(action.type){
        case actionTypes.ADD_GROCERY_START:
            return {
                ...state,
                loading:true,
                error:false
            }
        case actionTypes.ADD_GROCERY_FAIL:
            return{
                ...state, 
                loading:false,
                error:true
            }
        case actionTypes.ADD_GROCERY_SUCCESS:
            return{
                ...state,
                loading:false,
                groceriesList:state.groceriesList.concat(action.grocery)
            }
        case actionTypes.SET_GROCERIES:
            return {
                ...state,
                groceriesList:action.newList,
                loading:false
            }
        case actionTypes.FETCH_START :
            return{
                ...state,
                loading:true,
                error:false
            }
        case actionTypes.CHECK_START:
            return{
                ...state
            }
        case actionTypes.CHECK_SUCCESS :
            const updatedList = state.groceriesList.filter(item => {
                if(item.id === action.id)
                    item.isBought=!item.isBought
                return item
            })
            return{
                ...state,
                groceriesList:updatedList,
                loading:false
            }
        default:
            return state
    }
}