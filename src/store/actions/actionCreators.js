import * as actionsTypes from './actionTypes'
import axios from '../../axios-flat'


// const setGroceries = (groceriesList) =>{
//     return {type:actionsTypes.SET_GROCERIES, groceriesList}
// }

// const fetchFail = () =>{
//     return {type:actionsTypes.FETCH_FAIL}
// }

// export const initGroceries = () =>{
//     return async dispatch =>{
//         try {    
//             const res = await axios('/groceriesList.json')
//             dispatch(setGroceries(res.data))
//         } catch (error) {
//             dispatch(fetchFail())
//         }
//     }
// }