import { Route, Routes, } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import ReviewTab from './components/ReviewTab/ReviewTab';

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>

            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/review" element={<ReviewTab></ReviewTab>}></Route>
                <Route path="/dashboard" element={<Dashboard></Dashboard>}> </Route>
                <Route path="/blog" element={<Blogs></Blogs>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            
            
            <Footer></Footer>

        </div>
    );
}

export default App;
