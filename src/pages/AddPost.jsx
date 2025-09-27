import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="py-8 text-white">
      <Container>
        <h1 className="text-2xl lg:text-3xl mb-10 uppercase font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 inline-block text-transparent bg-clip-text hover:text-sky-500">
          Add Posts
        </h1>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;