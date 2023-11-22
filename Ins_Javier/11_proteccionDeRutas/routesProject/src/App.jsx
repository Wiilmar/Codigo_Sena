import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Admin, Analytics, Dashboard, HomeUser, Landing, Counter } from './pages'
import { useState } from 'react'
import { ProtectedRoute } from './components/protectedRoute'

export const App = () => {

  const [user, setUser] = useState(null)

  const login = () => {
    //Request done
    setUser({
      id: 1,
      name: "Wilman",
      permissions: ['adso'],
      roles: []
    })
  }

  const logout = () => setUser(null)

  return (
    <BrowserRouter>

      <Navigation />

      {
        user ? (
          <button onClick={logout}> Logout </button>
        ) : (
          <button onClick={login}> Login </button>
        )
      }

      <Routes>
        <Route index element={<Landing />} />
        <Route path='/landing' element={<Landing />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path='/home' element={<HomeUser />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/analytics' element={
          <ProtectedRoute isAllowed={!!user && user.permissions.includes('analize')} redirectTo='/home'>
            <Analytics />
          </ProtectedRoute>
        } />
        <Route path='/admin' element={
          <ProtectedRoute isAllowed={!!user && user.roles.includes('admin')}  redirectTo="/home">
            <Admin />
          </ProtectedRoute>
        } />
        <Route path='/useref' element={
          <ProtectedRoute isAllowed={!!user && user.permissions.includes('adso')} redirectTo='/home'>
            <Counter />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

function Navigation() {
  return <nav>
    <ul>
      <li>
        <Link to='/landing'> Landing </Link>
      </li>
      <li>
        <Link to="/home"> Home </Link>
      </li>
      <li>
        <Link to="/dashboard"> Dashboard </Link>
      </li>
      <li>
        <Link to="/analytics"> Analitycs </Link>
      </li>
      <li>
        <Link to="/admin"> Admin </Link>
      </li>
      <li>
        <Link to="/useref"> Contador </Link>
      </li>
    </ul>
  </nav>
}
