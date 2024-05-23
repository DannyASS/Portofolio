import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfilePage from './pages/profile/profile'
import { RouterProvider } from 'react-router-dom'
import { router } from './utils/router/objectRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider  router={router}/>
  )
}

export default App
