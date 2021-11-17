import React from "react";

const PostItem = function(props){

    return(
        <div className="post">
            <div className="post__content">
                {props.video}. 
                
                {props.post.desc}
                
            </div>
            <div className="post__btns">
                <button onClick={() => props.remove(props.post)} >Delete</button>
            </div>
        </div>
    )
}

export default PostItem;