export const addPost = async (post) => {
  const res = await fetch("http://localhost:3100/posts", {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
});
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
};
