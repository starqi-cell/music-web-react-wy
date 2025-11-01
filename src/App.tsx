import React,{Suspense} from 'react'
import { useRoutes,Link  } from 'react-router-dom'
import { useAppSelector,useAppDispatch,appShallowEqual } from './store'
import routes from './router'

import { changeMessageAction } from './store/modules/counter'


function App() {
  const {count,message}=useAppSelector((state)=>({
    count:state.counter.count,
    message:state.counter.message
  }),appShallowEqual)

  const dispatch=useAppDispatch();
  function handleChangeMessage(){
    dispatch(changeMessageAction("改变了"));
  }

  return (
  <div className="App">
    <div className='nav'>
      <Link to="/discover">发现音乐</Link> 
      <Link to="/mine">我的音乐</Link>
      <Link to="/focus">关注</Link>
      <Link to="/download">下载客户端</Link>
    </div>
    <h2>当前消息：{message}</h2>
    <button onClick={handleChangeMessage}>修改消息</button>
    <Suspense fallback={<div>Loading...</div>}>
      <div className='main'>{useRoutes(routes)}</div>
    </Suspense>
  </div>
  )
}

export default App
