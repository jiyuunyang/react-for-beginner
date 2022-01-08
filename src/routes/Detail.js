import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";


function Detail() {
  const { id } = useParams()
  const getMovie = async() => {
    const json = await(
    await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
  }

  useEffect(()=>{
    getMovie();
  },[]);
    
  const [detail, setDetail] = useState({});

  return (
    <div>
       <img src={detail.medium_cover_image}/>
       <h1>{detail.title}</h1>
       <ul>
         {detail.genres && detail.genres.map((genre, index) => <li key={index}>{genre}</li>)}
        </ul>
       <p>{detail.description_full}</p>
       <span>
        <Link to='/'>Go Back</Link>
       </span>
    </div>
  )
}
export default Detail;