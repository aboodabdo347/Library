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
import Profile from './pages/Profile'
import DiscoverBooks from './pages/DiscoverBooks'
<<<<<<< HEAD
import AddBook from './pages/AddBook'
=======
import UserContext from './user-context'
>>>>>>> a9438b6134b380edf45a162e98eccf05af9c9f27

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
<<<<<<< HEAD
    <div>
      <header>
        <Nav user={user} handleLogOut={handleLogOut} />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discoverbooks" element={<DiscoverBooks />} />
        <Route path="/book/:id" element={<BookDetails user={user} />} />
        <Route path="/collection/:id" element={<CollectionDetails />} />
        <Route path="/Login" element={<Login setUser={setUser} />} />
        <Route path="/profile/:id" element={<Profile user={user} />} />
        <Route path="/addbook" element={<AddBook user={user} />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
=======
    <UserContext.Provider value={user}>
        <div>
        <header>
            <Nav  user={user} handleLogOut={handleLogOut}/>
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discoverbooks" element={<DiscoverBooks user={user}/>} />
            <Route path="/book/:user/:id" element={<BookDetails user={user}/>} />
            <Route path="/collection/:id" element={<CollectionDetails />} />
            <Route path="/Login" element={<Login setUser={setUser} />} />
            <Route path="/profile/:id" element={<Profile user={user}/>} />
        </Routes>
        <footer>
            <Footer />
        </footer>
        </div>
    </UserContext.Provider>
>>>>>>> a9438b6134b380edf45a162e98eccf05af9c9f27
  )
}

export default App
