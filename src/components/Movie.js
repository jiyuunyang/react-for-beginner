import PropTypes from "prop-types";
import {Link} from "react-router-dom"
function Movie({ id, coverImg, title, genres, summary }) {
  // React 는 렌더링이 화면에 커밋된 후에야 모든 효과를 실행. 
  // 즉 React는 return에서 articles.map(...)을 반복 실행할 때 첫 턴에 데이터가 아직 안들어와도 
  // 렌더링이 실행되며 당연히 그 데이터는 undefined로 정의되어 오류가 나는 것이다.
  // 문제해결 : &&을 이용한다.
  // JavaScript에서 true && expression은 항상 expression으로 실행되고 
  // false && expression은 항상 false로 실행된다. 
  // 따라서 조건이 참이면 && 바로 뒤의 요소가 출력에 나타난다. 거짓이면 React는 무시하고 건너뛴다. 
  // 출처: https://devbirdfeet.tistory.com/47 [새발개발자]
      return (
          <div>
            <img src={coverImg} alt={title}/>
            <h2>
              <Link to={`/movie/${id}`}>{title}</Link>
              </h2>
            <ul>
                {/* movie.genre를 불러오지 못해서 map을 적용하지 못하는 에러가 발생 이때는 && 연산자를 쓴다 */}
                
                {genres && genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
            <p>{summary}</p>
          </div>
  
      )
  }

  Movie.propTypes = {
    id:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }
export default Movie;