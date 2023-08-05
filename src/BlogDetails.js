import { useHistory, useParams } from "react-router-dom";
import { db } from './firebase';
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";


const BlogDetails = () => {
    const { id } = useParams();
    const history = useHistory()
    const [blog, setBlog] = useState(null);    

    const fetchBlogDetails = async () => {
        try {
            const docRef = doc(db, "blogs", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setBlog(docSnap.data());
            } else {
                throw new Error("Blog not found!");
            }
        } catch (error) {
            throw new Error("Error fetching blog details: " + error.message);
        }
    };
    useEffect(()=>{
        fetchBlogDetails();
    }, [])

    const goBack = ()=>{
        history.push("/")
    }
    return (  
        <div className="blog-details">
            {/* { ispending && <div> Loading ... </div> }
            { error && <div> {error} </div> } */}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={goBack}>Back</button>
                </article>
                
            )}
        </div>
    );
}

export default BlogDetails;