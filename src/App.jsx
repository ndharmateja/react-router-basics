import { Routes, Route, Link } from "react-router-dom";
import Books from "./pages/Books";
import Home from "./pages/Home";

const App = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/books">Books</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<Books />} />
            </Routes>
        </>
    );
};

export default App;
