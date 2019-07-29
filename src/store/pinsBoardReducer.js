import * as actionsTypes from './actions/actionTypes'

const initialState = {
    pinsList:[
        {   
            title: 'party tonight',
            body: 'screen shot from facebook',
            id: '123',
            date: new Date(),
            mate: 'Shalev',
            showPin: true
        },
        {
            title: 'party tonight',
            body: 'post',
            id: '456',
            date: new Date(),
            mate: 'Ofer',
            showPin: true
        },
        {
            title: 'party tonight',
            body: 'text',
            id: '125',
            date: new Date(),
            mate: 'Ofer',
            showPin: true
        }
    ]
}

const removePin = (state, action) => {
    let newList = []
    console.log(action)
    newList = state.pinsList.filter(pin => {
        if(pin.id === action.pinId){
            pin.showPin = false
            return pin
        }
        return pin
    })
    return {...state, pinsList:newList}
}

const addPin = (state, action) => {
    const newPin ={
        title: action.pin.title,
        body: action.pin.body,
        id: new Date(), /*action.pin.id,*/
        date: new Date(),
        mate: 'ofer',
        showPin: true
    }
    return {...state, pinsList: state.pinsList.concat(newPin)} 
}

const pinsBoardReducer = (state=initialState, action)=> {
    switch (action.type){
        case actionsTypes.REMOVE_PIN:
            return removePin(state, action);
        case actionsTypes.ADD_PIN:
            return addPin(state, action);
        default :
         return state
    }
}

export default pinsBoardReducer