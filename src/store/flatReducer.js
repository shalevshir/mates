import * as actionsTypes from './actions/actionsTypes'

const intialState ={
    name:'frenkel',
    mates:[
        {
            name:'Shalev',
            _id:'123',
        },
        {
            name:'Ofer',
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
    bills:[
        {
            billType:'electric',
            amount:200,
            paidBy:'123',
            _id:'bill1'
        },
        {
            billType:'groceries',
            amount:152,
            paidBy:'456',
            _id:'bill2'
        }
    ],

    _id:'qwe345dfn6yu8'
}
const checkItem = (state, action) =>{
    
    const newList = state.groceriesList.filter((product =>{
        if(product.id === action.id){
            product.isBought = !product.isBought
            return product
        }
        return product
    }))
    return {...state,groceriesList:newList}
}

const flatReducer = (state = intialState, action)=>{
    switch (action.type) {
        case actionsTypes.CHECK_ITEM:
            return checkItem(state, action)
        case actionsTypes.ADD_GROCERY:
                const isDuplicate = state.groceriesList.find(el=>el.product===action.input||false)
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