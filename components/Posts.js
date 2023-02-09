import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getPosts } from "@/utils/getPosts"
import { deletePost } from "@/utils/deletePost"
import Skeleton from "./Skeleton"

const Posts = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({ queryKey: ["posts"], queryFn: getPosts })
  const { mutate: handleDeletePost } = useMutation({ mutationFn: deletePost, onSuccess: () => queryClient.invalidateQueries(["posts"]) })
  
  const posts = data?.filter((post) => post.userId === 1).sort((a, b) => b.id - a.id);
  
  const handleDelete = (id) => { 
    handleDeletePost(id)
  }

  if (data)
    return (
      <div className="container text-white">
        <h1 className="text-5xl text-white text-left mb-2">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => {
            return (
              <div key={post.id} className="bg-gray-800 p-4 rounded">
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="text-gray-400">{post.body}</p>
                <button className="py-2 px-4 text-white bg-red-500 hover:bg-red-600 rounded w-20 align-middle items-center my-2 disabled:opacity-25"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  if (isLoading) return <Skeleton />

  if (isError) return <div>Something went wrong</div>
  
}

export default Posts