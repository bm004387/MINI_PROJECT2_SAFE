import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import movie1 from '../movie/movie1.png'
import movie2 from '../movie/movie2.png'
import movie3 from '../movie/movie3.png'
import movie4 from '../movie/movie4.png'
import fire1 from '../movie/fire1.png'
import fire2 from '../movie/fire2.png'
import fire3 from '../movie/fire3.png'
import fire4 from '../movie/fire4.png'
import './movie.css'

function Movie() {
  return (
    <>
      <div className='safedu'>
        <div className='quake'>
          <h2>지진 발생 시 안전교육</h2>
          <div className="d-flex justify-content-around movie_list">
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={movie1} />
              <Card.Body>
                <Card.Title>지진이 발생했을때는 어떻게 해야할까?</Card.Title>
                <Button variant="primary" href='/movie1'>교육 영상 시청하기</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={movie2}/>
              <Card.Body>
                <Card.Title>지진대피법</Card.Title>
                <Button variant="primary" href='/movie2'>교육 영상 시청하기</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={movie3}/>
              <Card.Body>
                <Card.Title>지진 국민행동요령</Card.Title>
                <Card.Text>
                  2TV 생생정보 - 생생정보통 지진 안전지대 아니다
                </Card.Text>
                <Button variant="primary" href='/movie3'>교육 영상 시청하기</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={movie4}/>
              <Card.Body>
                <Card.Title>지진 발생 시 어떡해야 할까?</Card.Title>
                <Button variant="primary" href='/movie4'>교육 영상 시청하기</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className='fire'>
          <h2>화재 발생 시 안전교육</h2>
          <div className="d-flex justify-content-around movie_list">
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={fire1} />
              <Card.Body>
                <Card.Title>나침반 5분 안전교육</Card.Title>
                <Button variant="primary" href='/fire1'>교육 영상 시청하기</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={fire2}/>
              <Card.Body>
                <Card.Title>겨울철 소방 안전교육</Card.Title>
                <Button variant="primary" href='/fire2'>교육 영상 시청하기</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={fire3}/>
              <Card.Body>
                <Card.Title>온라인 소방 안전교육</Card.Title>
                <Card.Text>
                  화재 발생 시 장비 사용 훈련, 대피 동선 등 안전교육
                </Card.Text>
                <Button variant="primary" href='/fire3'>교육 영상 시청하기</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={fire4}/>
              <Card.Body>
                <Card.Title>소방교육 및 훈련방법</Card.Title>
                <Button variant="primary" href='/fire4'>교육 영상 시청하기</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;