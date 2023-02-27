import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import movie1 from '../movie1.png'
import movie2 from '../movie2.png'
import movie3 from '../movie3.png'
import movie4 from '../movie4.png'
import './movie.css'

function Movie() {
  return (
    <>
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
    </>
  );
}

export default Movie;