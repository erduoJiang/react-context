import React from 'react'
import { Consumer } from '../App'
class Children extends React.Component {
    render() {
        return (
            <>
                <div>我是子组件</div>

                {/* 接收Context中Provider的defaultValue */}
                {/* 如果App.js中没有写Provider，那么接受到的就是defaultValue */}
                <Consumer>
                    {
                        (val) => <div>
                            我是context传递过来的默认值：{val.name}
                        </div>
                    }
                </Consumer>
            </>
        )
    }
}

export default Children