import PropTypes from 'prop-types';
import './PrintListCss.css'
const PrintList = (props) => {
    let list = props.list;
    return(
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Money</th>
                    <th>Rate</th>
                    <th>End Year</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item) => (
                    <tr key={item.year}>
                        <td>{item.year}</td>
                        <td>{Math.round(item.money)}</td>
                        <td>{item.rate}</td>
                        <td>{Math.round(item.endYear)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

PrintList.propTypes = {
    list: PropTypes.array.isRequired
}

export default PrintList;