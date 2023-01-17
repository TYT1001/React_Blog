import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    console.log(history)

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, author, body};
        setIsPending(true)
        fetch("http://localhost:8000/blogs",{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog has been added');
            setIsPending(false);
            setTitle('');
            setBody('');
            setAuthor('mario')
            history.push('/')
        })
    }
    return (
        <div className="create">
            <h1>{title}</h1>
            <h1>{body}</h1>
            <h1>{author}</h1>
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input  
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending&&<button type="submit">Add Blog</button>}
                {isPending&&<button type="submit">Adding Blog..</button>}
            </form>
        </div>
    )
}

export default Create;