import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ema_jhon from '/favicon.ico'
import './App.css'
import Header from './components/header/Header';
import Shop from './components/shop/Shop';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  )
}

export default App
