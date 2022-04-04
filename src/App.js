import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>

            <Routes>

                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/review" element={<Reviews></Reviews>}></Route>
                <Route path="/dashboard" element={<Dashboard></Dashboard>}> </Route>
                <Route path="/blog" element={<Blogs></Blogs>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>

            </Routes>
            
            
            <Footer></Footer>

        </div>
    );
}

export default App;
