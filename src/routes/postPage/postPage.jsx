import './postPage.css';
import IKImageComponent from "../../components/image/image";
import PostInteractions from "../../components/postInteractions/postInteractions";
import { Link, useParams } from "react-router";
import Comments from '../../components/comments/comments';
import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../utils/apiRequest';

const PostPage = () => {
  const { id } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["pin", id],
    queryFn: () => apiRequest.get(`/pins/${id}`).then(res => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "An error occurred: " + error.message;
  if (!data) return "Pin not found";
console.log("FULL pin data:", data);

  return (
    <div className="postpage">
      <div className="postContainer">
        <div className="postImg">
          <IKImageComponent src={data.media} alt="" w={736} />
        </div>
        <div className="postDetails">
          <PostInteractions />
          {data.user && (
            <Link to={`/${data.user.username}`} className="postUser">
              <IKImageComponent src={data.user.img || "/general/noAvatar.png"} />
              <span>{data.user.displayName}</span>
            </Link>
          )}
          <Comments id={data._id} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
