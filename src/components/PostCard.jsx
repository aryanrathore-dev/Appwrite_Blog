import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  const fallbackImage = "/no-image.png"; // Local fallback image

  return (
    <Link to={`/post/${$id}`}>
      <div className="mx-auto flex max-w-screen-sm items-center justify-center">
        <div className="h-full w-full rounded-md bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 p-1">
          <div className="w-full h-full bg-gray-700 rounded-xl p-4">
            <div className="w-full justify-center mb-4 text-gray-700">
              <img
                src={
                  featuredImage
                    ? appwriteService.getFileView(featuredImage)
                    : fallbackImage
                }
                alt={title || "No Image"}
                onError={(e) => {
                  e.target.src = fallbackImage;
                }}
                className="rounded-xl lg:h-[200px] w-full object-cover"
              />
            </div>
            <h2 className="text-xl text-white capitalize font-bold">{title}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
