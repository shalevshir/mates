import * as actionsTypes from './actions/actionTypes'


const initialState = {
    pinsList:[],
    loading:false,
    error:false
}

const removePin = (state, action) => {
    let newList = []
    console.log(action)
    // newList = state.pinsList.filter(pin => {
    //     if(pin.id === action.pinId){
    //         pin.showPin = false
    //         return pin
    //     }
    //     return pin
    // })
    return {...state, pinsList:newList}
}

const addPin = (state, action) => {
    const newPin ={
        id: new Date(), /*action.pin.id,*/
        date: new Date(),
        location: "tel aviv",
        mate: 'ofer',
        body: action.pin.body,
        attachments: "picture or file of something"
    }
    return {...state, pinsList: state.pinsList.concat(newPin)} 
}

const fetchPinsStart = (state, action) => {
    return {...state, loading:true} 
}

const fetchPinsSuccess = (state, action) => {
    return {...state, pinsList:action.list, loading: false}
}

const pinsBoardReducer = (state=initialState, action)=> {
    switch (action.type){
        case actionsTypes.REMOVE_PIN:
            return removePin(state, action);
        case actionsTypes.ADD_PIN_START:
            return {
                ...state,
                loading:true,
                error:false
            }
        case actionsTypes.ADD_PIN_SUCCESS:
            return addPin(state, action);
        case actionsTypes.FETCH_PINS_START:
            return fetchPinsStart(state, action);
        case actionsTypes.FETCH_PINS_SUCCESS:
            return fetchPinsSuccess(state, action)
        default :
         return state
    }
}

export default pinsBoardReducer