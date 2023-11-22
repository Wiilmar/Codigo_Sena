import { Navigate } from 'react-router-dom'
export const Landing = () => <h2> Landing Page (public) </h2>

export const HomeUser = () => {
    return <h2> Home Page(private) </h2>
}


export const Dashboard = () => <h2> Dashboard Page (private) </h2>

export const Analytics = () => <h2> Analytics Page (private, permission: 'analize')</h2>

export const Admin = () => <h2> Admin (private, permission: 'admin')</h2>