import { useQuery } from '@tanstack/react-query';
import IKImageComponent from '../image/image'
import './boards.css'
import apiRequest from '../../utils/apiRequest';
import {format} from "timeago.js"
import { Link } from 'react-router-dom';
const Boards = ({ userId }) => {

   const { isPending, error, data } = useQuery({
        queryKey: ["boards", userId],
        queryFn: () => apiRequest.get(`/boards/${userId}`).then(res => res.data),
    });

    console.log(data)
    if (isPending) return "Loading...";
    if (error) return "An error occurred: " + error.message;

return (
  <div className="collections">
    {/* COLLECTION */}
    {data?.map((board) => (
      <Link to ={`/search?boardId=${board._id}`} className="collection" key={board._id}>
        <IKImageComponent src={board.firstPin.media} alt="" />
        <div className="collectionInfo">
          <h1>{board.title}</h1>
          <span>{board.pinCount} Pins . {format(board.createdAt)} </span>
        </div>
      </Link>
    ))}
  </div>
)};

export default Boards