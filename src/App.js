import React, {useState} from "react";
import '../src/style/styles.css'
import TableItem from "./components/TableItem";
import TableHeader from "./components/TableHeader";
function App() {
    const [posts, setPosts] = useState([
        {id:1, title:"JavaScript", stack:"MERN Stack"},
        {id:2, title:"Python", stack:"Full Stack"},
        {id:3, title:"Java", stack:"Full Stack"},
        {id:4, title:"Go", stack:"Backend"},
    ])
    return (
        <div className="app w-50 mx-auto">
            <h5 className="text-center">Favourite Programming Language</h5>
            <table className="table table-striped">
                <TableHeader/>
                <tbody>
                    {
                        posts.map(
                            post => (
                                <TableItem post={post} key={post.id}/>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default App;
