import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfilePage from './pages/profile/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ProfilePage />
  )
}

export default App
