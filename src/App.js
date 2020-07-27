import React from 'react';
import Parents from './pages/parents'
import Brother from './pages/brother'


// 创建一个context
export const { Provider, Consumer } = React.createContext('我是context默认值defaultValue')
function App() {
  // let myName = ['程冰',
  // '26']
  let myName = {
    name:'cb',
    age:'26'
  }
  return (
    //Provider共享容器 接收一个name属性
    <Provider value={myName}>
      <div className="App">
        <p>你好呀,{myName.name}</p>
        <Parents />
        <Brother />
      </div>
    </Provider>
  );
}

export default App;
