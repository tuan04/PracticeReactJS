import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({item}) =>{
    let {img, name, timeForCook} = item;
    return(
        <Card className='p-0 m-0'>
            <Card.Img src={img} className="img-fluid"/>
            <Card.Title>{name}</Card.Title>
            <Card.Text >Time for cook: {timeForCook}min</Card.Text>
        </Card>
    );
}

export default Item;