import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService
      .getPosts([])
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .catch((eror) => {
        console.log(eror);
      });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <h1 className="text-2xl lg:text-3xl mb-10 uppercase font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 inline-block text-transparent bg-clip-text hover:text-sky-500">
          All Posts
        </h1>
        <div className="lg:flex lg:flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-4 lg:w-1/3">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;