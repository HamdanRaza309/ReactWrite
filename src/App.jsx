import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth_service'
import { login, logout } from './store/authSlice'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.currentUser()
      .then((userData) => {

        if (userData) {
          dispatch(login(userData))
        } else {
          dispatch(logout())
        }

      })
      .finally(() => setLoading(false))
  }, [])

  return !loading && (
    <>
      <h1 className='text-6xl'>Hamdan Raza</h1>
      <Header />
      <main>
        {/* <Outlet /> */}
      </main>
      <Footer />
    </>
  )
}

export default App
