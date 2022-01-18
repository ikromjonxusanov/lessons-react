import React from 'react';
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";

const TableList = ({posts, title, removePost}) => {
    return (
        <>
            <h5 className="text-center">{title}</h5>
            <table className="table table-striped">
                <TableHeader/>
                <tbody>
                {
                    posts.map(
                        (post, index) => (
                            <TableItem removePost={removePost} number={index+1} post={post} key={post.id}/>
                        )
                    )
                }
                </tbody>
            </table>
        </>
    );
};

export default TableList;