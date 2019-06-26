const initialState = {
    test:'Bills Page',
    count:0
}

const reducer = (state = initialState, action)=>{
    if(action.type==='CLICK'){
        return{test:'Clicked!!',count:state.count +1}
    }
    return state
}

export default reducer