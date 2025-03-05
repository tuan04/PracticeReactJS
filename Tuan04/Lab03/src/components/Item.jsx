
const Item = ({img, name, timeForCook}) =>{
    console.log({name})
    return(
        <div>
            <img src={img} alt="" />
            <div>{name}</div>
            <div>{timeForCook}</div>
        </div>
    );
}

export default Item;