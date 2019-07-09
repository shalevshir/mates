const initialState = {
    bills:[
        {   
            expense:'elcricity',
            amount:200
        },
        {
            expense: 'water',
            amount:100
        }
    ]
}

const billsReducer = (state = initialState, action)=>{
    if(action.type==='CLICK'){
        return{test:'Clicked!!',count:state.count +1}
    }
    return state
}

export default billsReducer