import React from "react";
import PostItem from "./PostItem";

const PostsList = ({posts, title, remove}) => {  
    return(
        <div>
            <h1 style={{textAlign:'center'}} >{title}</h1>
            {/* {posts.map((post) =>
                <PostItem remove={remove}  post={post} key={post.createTime}/>
            )} */}
        </div>
    );
};

export default PostsList;