import { useEffect, useState } from "react";
import { PostContainer } from "./styles";
import PostInfo from "./components/PostInfo";
import { PostType } from "../Blog";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import PostContent from "./components/PostContent";
import Loading from "../../components/Loading";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

const PostPage = () => {
  const [postData, setPostData] = useState({} as PostType);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  async function fetchPost() {
    try {
      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`,
      );
      setPostData(response.data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPost();
  }, []);

  if (loading) return <Loading />;
  return (
    <PostContainer className="container">
      <PostInfo {...postData} loading={loading} />
      <PostContent content={postData.body} />
    </PostContainer>
  );
};

export default PostPage;
