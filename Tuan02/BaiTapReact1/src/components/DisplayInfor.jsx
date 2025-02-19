import React from "react";
import PropTypes from "prop-types";

class DisplayInfor extends React.Component{
    render(){
        let {listUser} = this.props;
        return(
            <div>
                {listUser.map((item) => (
                    <div key={item.id} className={item.age < 18 ? "red" : "blue"}>
                        <div>Name: {item.name}</div>
                        <div>Age: {item.age}</div>
                        <button onClick={() => {this.props.handleDeleteUser(item.id)}}>Delete</button>
                        <hr />
                    </div>
                ))}
            </div>
        );
    }
}

DisplayInfor.propTypes = {
    listUser : PropTypes.array.isRequired,
    handleDeleteUser: PropTypes.func.isRequired
}
export default DisplayInfor;
