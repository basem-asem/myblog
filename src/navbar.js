import { Link } from 'react-router-dom';
import { signOut, getAuth } from 'firebase/auth';

const Navbar = ({logedin, setLogedin}) => {
    const auth = getAuth(); // Initialize Firebase Authentication
    const handleSignOut = ()=>{
        signOut(auth)
        .then(() => {
            setLogedin(false);
            console.log('user signed out')
        })
      .catch((err) => { 
            console.log(err.message)
        })
    }
    return ( 
        <nav className="navbar">
            <h1>Your Blogs</h1>
            <div className="links">
                <Link to="/">Home</Link>
                {!logedin && 
                <Link to="/signup">Sign Up</Link>}
                {logedin && 
                <Link to="/create">New Blog</Link>}
                {logedin && 
                <button className='logout' onClick={handleSignOut}>Log Out</button>}
            </div>
        </nav>
    );
}

export default Navbar;