import ChefifyLogo from '../3_Data-20250227T143936Z-001/3_Data/Lab01/Group 9.png'
import CheckLogo from '../3_Data-20250227T143936Z-001/3_Data/Lab02/check.png'
import Avatar from '../3_Data-20250227T143936Z-001/3_Data/Lab02/avatar.png'
import './Header.css'
const Header = () => {
    return(
        <div className='container'>
            <img src={ChefifyLogo} alt="" />
            <input type="text" />
            <menu>
                <li><a href="">What to cook</a></li>
                <li><a href="">Recipes</a></li>
                <li><a href="">Ingredients</a></li>
                <li><a href="">Occasions</a></li>
                <li><a href="">About Us</a></li>
            </menu>
            <button> <img src={CheckLogo} alt="" />Your Recipe Box</button>
            <img src={Avatar} alt="" />
        </div>
    )
}

export default Header;