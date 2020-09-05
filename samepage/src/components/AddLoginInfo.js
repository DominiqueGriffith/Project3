import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";

class AddLogInInfo extends Component {

    constructor(props) {
        super(props)
        this.state= {

            username: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        // axios.post("https://samepage.com/bookclub/post", this.state)
        // .then (response => {
        //     console.log(response);
        // })
        // .catch (error => {
        //     console.log(error);
        // })
    }
    render() {
        const {username, password} = this.state
        return (
            <div>

                <form onSubmit={this.submitHandler}>
                    <div>
                  <h6>Please enter your Username and Password?</h6>  
                        <input type="text" 
                        name="username" 
                        value = {username}
                        onChange={this.changeHandler}/> 
                        <input type="password" 
                        name="password" 
                        value = {password}
                        onChange={this.changeHandler}/> 
                    </div>
<br>
</br>

<Button color="primary" className="btn btn-warning">Create</Button>
                </form>
            </div>
        )
    }
}



export default AddLogInInfo