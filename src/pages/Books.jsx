import { Link } from "react-router-dom";

const Books = () => {
    return (
        <>
            <h1>Books</h1>
            <ul>
                {[1, 2, 3, 4].map((i) => (
                    <li key={i}>
                        <Link to={`/books/${i}`}>{`Book ${i}`}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Books;
