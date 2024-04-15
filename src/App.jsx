import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import List from './components/Lists'
import Product from './components/Products'
import UseState from './components/UseState'
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'
import ConditionalRendering from './components/ConditionalRendering'
import ClickEvents from './components/ClickEvents'
import Form from './components/Form'
import UseRef from './components/UseForm'
import Fetch from './components/Fetch'
import UseForm from './components/UseForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const [cart] = useState(["show", 'Book']);
  console.log("the length of the cart is " + cart.length);
  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/useref" element={<UseRef />} />
          <Route path="/ConditionalRendering" element={<ConditionalRendering />} />
          <Route path="/form" element={<Form />} />
          <Route path="/useform" element={<UseForm />} />
          <Route path="/list" element={<List />} />
          <Route path="/conditionalRendering" element={<ConditionalRendering />} />
          <Route path="/usestate" element={<UseState />} />
          <Route path="/product" element={<Product cartItem={cart} />} />
        </Routes>
        <Footer />
    
      </BrowserRouter>

    </>

  )
}
export default App