import Layout from "@/components/layout"
import Posts from "@/components/Posts";
import CreatePost from "@/components/CreatePost";

export default function Home() {
  return (
    <Layout>
      <main className="container text-white">
        <CreatePost />
        <Posts />
      </main>
    </Layout>
  );
}
