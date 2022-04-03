import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>

            <Routes>
            <Route path="/" element={<h1>Home</h1>}></Route>
            </Routes>
            
        </div>
    );
}

export default App;
