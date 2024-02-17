import { useState } from 'react'
// import './App.css'
import HomePage from './pages/HomePage'

function App() {
    const [page, setPage] = useState(0)
    return (
        <>
            <HomePage/>
        </>
    )
}

export default App
