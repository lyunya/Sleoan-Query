
export const getPosts = async () => {
  const res = await fetch("http://localhost:3100/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data;
}