
import { useState,useEffect } from 'react';

import './App.css'
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Form from './components/Form.jsx';




function App()  {

  const data = {
  name : 'Ujjwal',
  age : '21',
  work: 'student'
  }
  
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [show, setShow] = useState(true)
  

  useEffect(() => {
    console.log("useEffect calling")
  }, [count])

  function array(){
    const arr = ["hello","ujjwal",{name:"ujjwal", age:21, work:"student"}]
    return arr
  }

  function bttnclick() {
    console.log('button clicked')
    alert("button clicked")
    console.log(array())
  }

  return (
    <>


      <Header name={data.name} ></Header>
      <Content age = {data.age} passArray = {array}/>
      
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <h1>{count}</h1>
      <button onClick={bttnclick} className='btn btn-outline-secondary'>CLICK</button>
      
      <Footer click = {bttnclick}/>

      <input type="text" placeholder='Enter your name ' onChange={(e) => setName(e.target.value)}/>
      <h1>Hello <span style={{ color: 'black' }}>{name}</span></h1>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <h1>Welcome</h1> }

      <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>

      </BrowserRouter>

      <Form />
      
    </>
  )
}

export default App
