import { useState } from 'react'
// import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import {Link} from 'react-router-dom'


function App() {
    // const [page, setPage] = useState(0)
    return (
        <>
            
            {/* <div>
                <BrowserRouter>
                    <Routes>
                        <Route index element = {<HomePage/>}/>
                        <Route path = '/home' element = {<HomePage/>} />
                    </Routes>
                </BrowserRouter>
            </div> */}

            {/* <nav>
                <ul>
                    <li>
                        <Link to= "/home">Home</Link>
                    </li>
                    <li>
                        <Link to= "/about">about</Link>

                    </li>
                </ul>
            </nav> */}

        </>
    )
}

export default App
