import React,{Suspense, useEffect} from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppPlayerBar from './views/player/app-player-bar'
import { useAppDispatch } from './store'
import { fetchCurrentSongDataAction } from './views/player/store/player'


function App() {

  const dispatch=useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongDataAction(1478968140))
  }, [])

  return (
  <div className="App">
    <AppHeader />
    <Suspense fallback={<div>Loading...</div>}>
      <div className='main'>{useRoutes(routes)}</div>
    </Suspense>
    <AppFooter />
    <AppPlayerBar />
  </div>
  )
}

export default App
