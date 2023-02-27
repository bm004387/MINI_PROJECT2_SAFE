import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import movie1 from '../movie1.png'
import movie2 from '../movie2.png'

function Movie() {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie1} />
        <Card.Body>
          <Card.Title>지진이 발생했을때는 어떻게 해야할까?</Card.Title>
          <Button variant="primary" href='/movie1'>교육 영상 시청하기</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie2}/>
        <Card.Body>
          <Card.Title>지진대피법</Card.Title>
          <Button variant="primary" href='/movie2'>교육 영상 시청하기</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./need-persone01.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" href='/movie3'>교육 영상 시청하기</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./need-persone01.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" href='/movie4'>교육 영상 시청하기</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Movie;