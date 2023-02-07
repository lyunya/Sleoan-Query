import { useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import {  addPost } from "@/utils/addPost";


const CreatePost = () => {
  const queryClient = useQueryClient();

  const [post, setPost] = useState({
    userId: 1,
    title: "",
    body: "",
  });
  const {
    data,
    isLoading,
    mutate: handleAddPost,
  } = useMutation({ mutationFn: addPost, onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] })});




  const handleFormSubmission = (e) => {
    e.preventDefault();
    handleAddPost(post);
    setPost({ userId: 1, title: "", body: "" });
  }

  return (
    <form
      className="text-black mb-8 flex flex-col w-fit bg-slate-600 py-4 px-20 gap-2 rounded"
      onSubmit={handleFormSubmission}
    >
      <h2 className="text-4xl font-bold text-blue-200">Add a new Post</h2>
      <label className="text-white" htmlFor="new-todo">
        Title
      </label>
      <input
        className="pl-1"
        type="text"
        name="title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <label className="text-white" htmlFor="new-todo">
        Description
      </label>
      <textarea
        className="pl-1 pt-2 h-32 max-h-52"
        type="text"
        name="description"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <button
        className="py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded w-1/2 align-middle items-center my-2 disabled:opacity-25"
        type="submit"
        disabled={isLoading}
      >
        Add Post
      </button>
    </form>
  );
}

export default CreatePost