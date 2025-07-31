import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Button, Container, PostCard } from "../components";
import { blog } from "../assets";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService
      .getPosts()
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-col lg:flex-row justify-center items-center py-10 gap-10">
            <div className="w-full">
              <h1 className="uppercase text-4xl my-8 lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 inline-block text-transparent bg-clip-text hover:text-sky-500">
                Mega Blog App
              </h1>
              <p className="text-gray-300">
                Mega Blog App is a cutting-edge blogging platform designed 
                for writers, creators, and developers who value performance, 
                aesthetics, and simplicity. Featuring a modern interface and 
                fully responsive layout, it offers seamless content creation 
                and management with advanced customization options. Whether 
                you're publishing personal insights, tech articles, or 
                lifestyle content, Mega Blog App supports a wide range of 
                categories to suit your needs. Enjoy powerful tools such as 
                rich text editing, integrated media support, and an intuitive 
                content management system—all in one place. Join a vibrant 
                community of content creators and elevate your digital presence 
                with Mega Blog App.
              </p>
            </div>
            <div className="w-full h-full rounded-xl p-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 shadow-xl">
              <div className="w-full h-full rounded-xl p-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 shadow-xl">
                <img src={blog} alt="Blog Image" className="rounded-xl" />
              </div>
            </div>
          </div>
          <div className="my-10">
            <h1 className="text-3xl uppercase font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 inline-block text-transparent bg-clip-text hover:text-sky-500">
              Create Account or Login to Read and Write Blog
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
            <div>
              <a
                href="/signup"
                className="w-full capitalize font-semibold p-4 text-white hover:text-amber-900 rounded-2xl bg-gradient-to-r from-blue-400 via-cyan-600 to-teal-400"
              >
                Create New Account
              </a>
            </div>
            <div>
              <a
                href="/login"
                className="w-full capitalize font-semibold p-4 text-white hover:text-amber-900 rounded-2xl bg-gradient-to-r from-blue-400 via-cyan-600 to-teal-400"
              >
                Login to existing account
              </a>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
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

export default Home;