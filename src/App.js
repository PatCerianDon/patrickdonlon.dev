import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./pages/main";
import Writeups from "./pages/writeups";
import Programming from "./pages/programming";
import Blog from "./pages/blog";
import About from "./pages/about";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element = { <Main />} />
                    <Route path="/writeups" element ={ <Writeups />} />
                    <Route path="/programming" element = {<Programming />} />
                    <Route path="/blog" element ={<Blog />} />
                    <Route path="/about" element = {<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;