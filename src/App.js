import React, {useState, useRef} from "react";
import '../src/style/styles.css'
import TableList from "./components/TableList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id:1, title:"JavaScript", stack:"MERN Stack"},
        {id:2, title:"Python", stack:"Full Stack"},
        {id:3, title:"Java", stack:"Full Stack"},
        {id:4, title:"Go", stack:"Backend"},
    ])
    const createPost = (newPost) => {
        setPosts([...posts, {...newPost}])
    }
    const removePost = (post) => {
        setPosts(posts.filter(s => s.id !== post.id))
    }

    return (
        <div className="app w-50 mx-auto">
            <PostForm createPost={createPost} />
            <div className="d-flex flex-row-reverse my-2">
                <select className="form-select w-50">
                    <option value="val1">Sorted by Title</option>
                    <option value="val2">Sorted by Job</option>
                </select>
            </div>
            {
                posts.length
                ? <TableList removePost={removePost} posts={posts} title="Programming Language"/>
                : <h6 className="my-3 text-center text-danger">You should add some Post</h6>
            }

        </div>
    );
}

export default App;

export class NewPost {
}