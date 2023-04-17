import { BlogPageContainer } from "./styles";
import Profile from "./components/Profile";
import Input from "./components/Input";
import { PostsContainer } from "./components/PostCard/styles";
import PostCard from "./components/PostCard/";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import Loading from "../../components/Loading";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface PostType {
  title: string;
  number: number;
  created_at: string;
  html_url: string;
  body: string;
  comments: number;
  user: {
    login: string;
  };
}

const BlogPage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);

  async function getPosts(query: string = "") {
    try {
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repoName}`,
      );
      setPosts(response.data.items);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  if (loading) return <Loading />;
  return (
    <BlogPageContainer className="container">
      <Profile loading={loading} />
      <Input publications={posts} getPosts={getPosts} />
      <PostsContainer>
        {posts.map((post) => {
          return (
            <PostCard
              key={post.number}
              createdAt={post.created_at}
              title={post.title}
              body={post.body}
              id={post.number}
            />
          );
        })}
      </PostsContainer>
    </BlogPageContainer>
  );
};

export default BlogPage;
