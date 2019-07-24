import * as actionTypes from './actions/actionTypes'
import axios from '../axios-flat'

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

const flatReducer = (state = intialState, action)=>{
    switch (action.type) {
        default:
            return state;
    }
}

export default flatReducer