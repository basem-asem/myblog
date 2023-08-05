import BlogList from "./blogList";
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "@firebase/firestore";
import { db } from './firebase';

const Home = () => {

    const [blogs, setBlogs] = useState([]);    
    const [ispanding, setIspanding] = useState(true);
    const [error, setError] = useState(null);

    const fetchPost = async () => {
    
    await getDocs(collection(db, "blogs"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
                setBlogs(newData);      
                setIspanding(false);
        })
        .catch(err => {
            if (err.name === "AbortError") {
                console.log('fetch aborted')
            } else {                   
                setIspanding(false);
                setError(err.message);
            }
        })
    }
useEffect(()=>{
    fetchPost();
}, [])

    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs !" />}
            { ispanding && <div>Loading ... </div>}
        </div>
    );
}

export default Home;