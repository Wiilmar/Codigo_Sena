import { Navigate } from 'react-router-dom'
import { useRef } from 'react';

export const Landing = () => <h2> Landing Page (public) </h2>

export const HomeUser = () => {
    return <h2> Home Page(private) </h2>
}


export const Dashboard = () => <h2> Dashboard Page (private) </h2>

export const Analytics = () => <h2> Analytics Page (private, permission: 'analize')</h2>

export const Admin = () => <h2> Admin (private, permission: 'admin') </h2>

export const Counter = () => {
    let refCounter = useRef(0)
    let inputRef = useRef(null)

    const handleClickOne = () => {
        refCounter.current = refCounter.current + 1;
        if (refCounter.current === 1) {
            alert(`Hiciste click ${refCounter.current} vez`)
        } else {
            alert(`Hiciste click ${refCounter.current} veces`)
        }
    }

    const handleClickTwo = () => {
        inputRef.current.focus()
    }

    return (
        <>
            <div className='designContainer'>
                <div className='designConter'>
                    <h3> Contador de clicks usando el ref </h3>
                    <button onClick={handleClickOne}>
                        Presioname
                    </button>
                </div>

                <div className='designInput'>
                    <h3> Enfocador de inputs </h3>
                    <input ref={inputRef} placeholder='Escribe algo...'/>
                    <button onClick={handleClickTwo}>
                        Enfoca el input
                    </button>
                </div>
            </div>
        </>
    )
}