import { useState } from "react";
import { useHistory } from "react-router-dom";
import { collection, addDoc } from "@firebase/firestore";
import { db } from './firebase';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [ispending, setIspending] = useState(false);
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIspending(true);
        try {
            const docRef = await addDoc(collection(db, "blogs"), {
              title: title,
              body: body,
              author: author,    
            });
            history.push('/');
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    return ( 
        <div className="create">
            <h2>add a New Blogs</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                required
                value={body}
                rows={6}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                />
                {!ispending && <button>Add Blog</button>}
                {ispending && <button>Adding Blog...</button>}
            </form>
        </div>
    );
}
export default Create;