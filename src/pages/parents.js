import React from 'react'
import Children from './children'
import {Consumer} from '../App'
class Parents extends React.Component{
    render(){
        return (
            <>
                我是父组件
                <Consumer>
                    {
                        (myName)=>
                        <div>
                            我是父组件，我也能接受到Provider：{myName.name},
                            我的年龄是：{myName.age}
                        </div>
                    }
                </Consumer>
                <Children></Children>
               
            </>
        )
    }
}

export default Parents