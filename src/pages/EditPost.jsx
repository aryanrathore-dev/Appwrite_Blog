import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService
        .getPost(slug)
        .then((post) => {
          if (post) {
            setPost(post);
          } else {
            navigate("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8 text-white">
      <Container>
        <h1 className="text-2xl lg:text-3xl mb-10 uppercase font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text hover:text-sky-500">
          Edit Post
        </h1>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;