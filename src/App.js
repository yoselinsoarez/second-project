import './App.css'
import NavBar from './components/NavBar'
import Pets from './components/Pets'
import Home from './components/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs'

/**
 *
 * @returns
 */
function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="aboutus" element={<AboutUs />} />
                <Route path="pets" element={<Pets />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
