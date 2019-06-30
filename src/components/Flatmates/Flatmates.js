import React from 'react'
import MateCard from './MateCard'


class Flatmates extends React.Component{
    state={
        Mates: [
            {
                name: 'Shalev',
                email: 'shalevshir@gmail.com',
                flat: 'flat1'
            },
            {
                name: 'Ofer',
                email: 'oferbrmn@gmail.com',
                flat: 'flat1'
            }
        ]
    }
    render(){
        return(
            <div>
                {this.state.Mates.map(mate => <MateCard mate={mate} key={mate.name} />)}
            </div>
            )
    }
}
export default Flatmates;