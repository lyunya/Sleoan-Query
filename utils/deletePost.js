export const deletePost = async (id) => {
  const res = await fetch(`http://localhost:3100/posts/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
};
