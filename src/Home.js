import BlogList from "./blogList";
import useFetch from "./usefetch";

const Home = () => {

    const {data: blogs, ispanding, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            { ispanding && <div>Loading ... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs !" />}
        </div>
    );
}

export default Home;