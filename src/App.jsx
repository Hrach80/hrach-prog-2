import { useState } from 'react'
import AppRouters from './Routes/AppRouters'
import Layout from './Layout/Layout'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout/>
    <AppRouters/>
    </>
  )
}

export default App
