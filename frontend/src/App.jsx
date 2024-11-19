import { Route, Routes } from 'react-router-dom'
import './App.css'

// Home Page
import Home from './pages/Home'

// Contact Page
import Contact from './pages/Contact'

// About Page
import About from './pages/About'

// Navbar for the menu
import Navbar from './components/Navbar'
import Collection from './pages/Collection'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import Product from './pages/Product'

function App() {
  

  return (
    <div className='px-4 sm:px-[-5vw] md:px-[7vw] lg:px-[9vw]'>

      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/collection' element={<Collection />}>Collection</Route>
        <Route path='/about' element={<About />}>About</Route>
        <Route path='/contact' element={<Contact />}>Contact</Route>
        <Route path='/product/:productId' element={<Product />}>404</Route>
      </Routes>
      <Footer />

    </div>
  )
}

export default App
