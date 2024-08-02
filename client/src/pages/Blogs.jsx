import { Link } from "react-router-dom";
//import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto h-screen">
        <h1 className="text-3xl font-bold lg:text-6xl">News and Articles</h1>
        <p className="text-xs sm:text-sm">
          Here you&apos;ll find a variety of articles detailing my story and
          learn the truth behind it all.
        </p>
        <div className="flex flex-wrap gap-4">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
      {/** <div className="p-3 bg-amber-100 dark:bg-slate-700"> 
        <CallToAction />
      </div> */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              view all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
