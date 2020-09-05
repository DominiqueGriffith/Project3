import React, { Component } from "react";
import { Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from "axios";

class AddBookClubPost extends Component {

    state =
    {
        visible: true,
        modalIsOpen: false    
    }
    constructor(props) {
        super(props)
        this.state= {

            title: '',
            body: '',
          
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
    toggleModalThree() {
        this.setState({
          modalThreeIsOpen: !this.state.modalThreeIsOpen
    
    
        });
      }
    render() {
        const {title, body} = this.state
        return (
            <div>

                <form onSubmit={this.submitHandler}>
                    <div>
                  <h6>What's your book club's name?</h6>  
                        <input type="text" 
                        name="title" 
                        value = {title}
                        onChange={this.changeHandler}/> 
                    </div>
                    <div>
                   <h6>Describe your book club. What are you all about?</h6> 
                        <textarea type="text" 
                        name="body" 
                        value = {body}
                        onChange={this.changeHandler}/> 
                    </div>
<br>
</br>

<Button color="primary" onClick={this.toggleModalThree.bind(this)} className="btn btn-warning">Create</Button>
                </form>
                <Modal isOpen={this.state.modalThreeIsOpen}>
          <ModalHeader toggle={this.toggleModalThree.bind(this)}>Logged In Successful</ModalHeader>

          <ModalBody>
            WELCOME BACK!
          </ModalBody>
          <ModalFooter>
            <Link to="/loggedIn" className={window.location.pathname === "/loggedIn" ? "nav-link active" : "nav-link"}>
              <Button color="primary" onClick={this.toggleModalThree.bind(this)} className="btn btn-warning">Okay</Button>
            </Link>

          </ModalFooter>


        </Modal>
            </div>

            
        )
    }
}



export default AddBookClubPost