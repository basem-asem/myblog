import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="Not-found">
        <h2>Page Not Found</h2>
        <Link to={"/"}>Go to HomePage</Link>
        </div>
    );
}

export default NotFound;