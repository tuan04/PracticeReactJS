import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";
import PropTypes from "prop-types"; 

class MyComponent extends React.Component{ 
    state = {
        listUser:[
            {id: 1, name: "Ha Thanh Tuan", age: 20},
            {id: 2, name: "Tien Linh", age: 26},
            {id: 3, name: "Van Anh", age: 20}
        ]
    }

    handleDeleteUser = (userID) => {
        let newListUser = this.state.listUser.filter(user => user.id !== userID);
        this.setState({listUser: newListUser})
    }

    handleAddNewUser = (userObject) => {
        this.setState({listUser : [userObject, ...this.state.listUser]})
    }

    render(){
        return(
            <>
                <AddUserInfor handleAddNewUser={this.handleAddNewUser}/>
                <hr />
                <DisplayInfor listUser={this.state.listUser} handleDeleteUser={this.handleDeleteUser}/>
            </>
        );
    }
}

MyComponent.propTypes = {
    newListUser: PropTypes.array.isRequired
}
export default MyComponent;