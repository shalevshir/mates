import React from 'react';
import {connect} from 'react-redux'
import * as actionsTypes from '../../store/actions/actionTypes'

// "base" component.
import ReactTimeAgo from 'react-time-ago'

// "custom-tooltip" component.
// Requires React >= 16.
// import ReactTimeAgo from 'react-time-ago/tooltip'

const Pin = (props) =>  {

    const pinnedBefore = (date) => {
        
        const todayDate = <ReactTimeAgo date={date}/>
        const postedBefore = todayDate
        console.log('different is', (Date.now() - date))
        console.log('todayDate is:', todayDate)
        return (postedBefore)
    }

    return (
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <div>
            <img src="http://placekitten.com/g/600/300" className="db w-100 br2 br--top" alt="kitten looking menacing."/>
            <div className="pa2 ph3-ns pb3-ns">
                <div className="dt w-100 mt1">
                <div className="dtc">
                    <h1 className="f5 f4-ns mv0">{props.pin.title}</h1>
            </div>
            <div className="dtc tr">
                    <h2 className="f5 mv0">{`Written By ${props.pin.mate}`}</h2>
             </div>
             </div>
                <p className="f6 lh-copy measure mt2 mid-gray">{props.pin.body}</p>
            </div>
            <div>
                <div>Pinned {pinnedBefore(props.pin.date)}</div>
                <button className="b input-reset ba b--black bg-transparent grow pointer " onClick={() => props.onRemoveItem(props.pin.id)} >X</button>
            </div>
        </div>
        </article>
    )
}
const mapDispatchToProps = (dispatch) => {
    return{
        onRemoveItem: (pinId) => dispatch({type: actionsTypes.REMOVE_PIN, pinId})
    }
}

export default connect(null,mapDispatchToProps)(Pin);
