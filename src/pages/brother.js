import React from 'react'
import { Consumer } from '../App'
class Brother extends React.Component {
    render() {
        return (
            <>
                <div>我是兄弟组件</div>

                {/* 接收Context中Provider的defaultValue */}
                {/* 如果App.js中没有写Provider，那么接受到的就是defaultValue */}
                <Consumer>
                    {
                        (val) => <div>
                            兄弟：{val.age}
                        </div>
                    }
                </Consumer>
            </>
        )
    }
}

export default Brother