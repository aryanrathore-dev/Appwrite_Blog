import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  // Updated content parser with code block detection
  const getSanitizedContent = (dirtyHTML) => {
    const cleanHTML = DOMPurify.sanitize(dirtyHTML);

    return parse(cleanHTML, {
      replace: (domNode) => {
        if (
          domNode.name === "pre" &&
          domNode.children &&
          domNode.children[0]?.name === "code"
        ) {
          const code = domNode.children[0].children[0].data;
          const languageClass = domNode.children[0].attribs.class || "";
          const language = languageClass.replace("language-", "");

          return (
            <SyntaxHighlighter
              language={language || "cpp"}
              style={oneDark}
              customStyle={{
                borderRadius: "10px",
                fontSize: "14px",
                padding: "20px",
              }}
            >
              {code}
            </SyntaxHighlighter>
          );
        }
      },
    });
  };

  return post ? (
    <div className="py-8">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row gap-16">
          {/* Text and code content */}
          <div className="w-full my-auto">
            <div className="w-full mb-6 text-white">
              <h1 className="text-2xl lg:text-3xl font-bold uppercase bg-gradient-to-r from-blue-400 via-cyan-600 to-teal-400 inline-block text-transparent bg-clip-text">
                {post.title}
              </h1>
            </div>

            <div className="browser-css prose prose-invert max-w-full">
              {getSanitizedContent(post.content)}
            </div>
          </div>

          {/* Image and author controls */}
          <div className="relative mx-auto flex w-full items-center justify-center">
            <div className="h-fit w-3/4 rounded-md bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 p-1">
              <div className="w-full h-fit bg-gray-700 rounded-xl p-4 text-gray-700">
                <img
                  src={appwriteService.getFileView(post.featuredImage)}
                  alt={post.title}
                  className="rounded-xl lg:h-[200px] w-full"
                />

                {isAuthor && (
                  <div className="relative right-2 top-2 flex justify-end">
                    <Link to={`/edit-post/${post.$id}`}>
                      <Button bgColor="bg-green-500" className="mr-3">
                        Edit
                      </Button>
                    </Link>
                    <Button bgColor="bg-red-500" onClick={deletePost}>
                      Delete
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}
