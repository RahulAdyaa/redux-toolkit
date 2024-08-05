import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts(posts).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
  }, []);
 

  return (
    <div className="w-full py-8">
        <Container>
            <div className="flex flex-wrap mx-4"> 
                {
                    posts.map((post)=>(
                        <div key={$id} className="p-2 w-1/4">
                            <PostCard post={post} />
                        </div>
                    ))   
                } </div>
        </Container>
    </div>
  )
}

export default AllPosts;
