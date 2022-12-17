import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, login} from './action/index'
import { useState } from 'react';

function App() {
  const [input, setInput] = useState(0);
  //使用Redux的State (useSelector)
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  const textbox = (e) => {
    setInput(+e.target.value);
  }

  return (
    <div className="App">
      <h1>Hello Redux </h1>
      <h3>計算: {counter}</h3>
      <input type='text' placeholder='number' onChange={(e) => textbox(e)} />
      <button onClick={() => dispatch(increment(input))}>增加＋</button>
      <button onClick={() => dispatch(decrement(input))}>減少—</button>
      {isLogin ? <h3>登入了!</h3> : <h3>沒有登入</h3>}
      <button onClick={() => dispatch(login())}>登入登出狀態</button>
    </div>
  );
}

export default App;
