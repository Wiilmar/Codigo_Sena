import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ isAllowed, children, redirectTo = '/landing' }) => {
    if (!isAllowed) {
        return <Navigate to={redirectTo} />
    }
    return children ? children : <Outlet />
}

//Outlet: Sirve para retornar dos o mas rutas que tienen el mismo nivel de acceso por el usuario