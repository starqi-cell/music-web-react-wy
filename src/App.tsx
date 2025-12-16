// src/App.tsx
// 主应用组件

import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppPlayerBar from './views/player/app-player-bar'

function App() {
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
