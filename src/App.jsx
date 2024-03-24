import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Home from './pages/Home'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Footer from './components/Footer'
import BookDetails from './pages/BookDetails'
import CollectionDetails from './pages/CollectionDetails'
import Login from './pages/Login'
const App = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const checkToken = async () => {
    const user = await CheckSession()
    if (user) {
      setUser(user)
    }
  }
  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }
  return (
    <div>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/collection/:id" element={<CollectionDetails />} />
        <Route path="/Login" element={<Login setUser={setUser} />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
