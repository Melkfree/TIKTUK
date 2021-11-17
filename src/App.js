import React, {useState, useEffect} from "react";
import PostList from "./Components/PostList";
import PostItem from "./Components/PostItem";
import axios from "axios";


function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('./user-feed.json')
    // .then(res=> res.json())
    .then(res => {
      // console.log(res.itemList.map(item=>{console.log(item)}));
      console.log(res.data.itemList);
      setPosts(res.data.itemList);
      console.log(posts);
    })
    .catch(err => {
      console.error(err);
    });
      }, [])



  return (
    <div className="App">
      <h1>TIKTUK</h1>
      <PostList  title="Post List"/>
      {/* {posts.length ?<PostList  title="Post List"/>: <h1 style={{textAlign: 'center', verticalAlign: 'end'}}>Posts not found!</h1> } */}
    </div>
  );
}

export default App;
