import React, { Component } from "react";
import { Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import bookclubs from "../pages/bookclub";

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
        const createdBookclub = this.state
        // axios.post("https://samepage.com/bookclub/post", this.state)
        // .then (response => {
        //     console.log(response);
        // })
        // .catch (error => {
        //     console.log(error);
        // })
    }
    toggleModalFour() {
        this.setState({
          modalFourIsOpen: !this.state.ModalFourIsOpen
    
    
        });
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

<Button color="primary"   className="btn btn-warning">Create</Button>
            </form>

       
            </div>
         

            
        )
    }
}



export default AddBookClubPost