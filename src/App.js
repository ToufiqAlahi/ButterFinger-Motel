import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>

            <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            </Routes>

            <Footer></Footer>
            
        </div>
    );
}

export default App;
