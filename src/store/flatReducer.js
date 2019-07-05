import * as actionsTypes from './actions'

const intialState ={
    name:'frenkel',
    mates:[
        {
            _id:'123',
        },
        {
            _id:'456'
        }
    ],
    groceriesList:[
        {
            product:'milk',
            id:'123',
            isBought:true
        },
        {
            product:'coffee',
            id:'456',
            isBought:false
        }
    ],
    _id:'qwe'
}

const flatReducer = (state = intialState, action)=>{
    switch (action.type) {
        case actionsTypes.CHECK_ITEM:
            const newList = state.groceriesList.filter((product =>{
                if(product.id === action.id){
                    product.isBought = !product.isBought
                    return product
                }
                return product
            }))
            return {...state,groceriesList:newList}
        case actionsTypes.ADD_GROCERY:
                
                const isDuplicate = state.groceriesList.find(el=>el.product===action.input)
                if(isDuplicate){
                    const newList = state.groceriesList.filter(product=>{
                        if(product.product === action.input){
                            product.isBought = false
                            return product
                        }
                        return product
                        
                    })
                    alert(`${action.input} alredy on list`)
                    return {...state,groceriesList:newList}
                    
                    
                }else{
                    const newGrocery ={
                        product:action.input,
                        id: new Date(),
                        isBought:false
                    }
                    return{
                        ...state,groceriesList:[...state.groceriesList, newGrocery]
                    }
                }
    
        default:
            return state;
    }
}

export default flatReducer