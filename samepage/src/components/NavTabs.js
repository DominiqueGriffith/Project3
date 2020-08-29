import React, {Component} from "react";
import { Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";

// const styles = {
//   pageTitle: {
//     fontFamily: 'Pacifico', 'cursive'
// }
// };

class App extends Component {
  state = {
    visible: true,
    modalIsOpen:false
 
  }
  toggleModal (){
this.setState({
  modalIsOpen: !this.state.modalIsOpen

  });
}
toggleModalTwo(){
  this.setState({
    modalTwoIsOpen: !this.state.modalTwoIsOpen
  
    });
  }
  render() {
    return (
      <React.Fragment>
           <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
    <a className="navbar-brand" id="pageTitle" href="#">Same Page</a>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">

        <li className="nav-item active">
        <a color= "primary" className="nav-link"  onClick={this.toggleModalTwo.bind(this)}>Login</a>
        </li>
        <li className="nav-item active">
        <Button color= "primary" className="btn btn-warning" onClick={this.toggleModal.bind(this)}>Sign Up</Button>
        </li>

      </ul>

    </div>
  </nav>


        <Modal isOpen={this.state.modalTwoIsOpen}>
          <ModalHeader toggle={this.toggleModalTwo.bind(this)}>Please enter your Username and Password</ModalHeader>
     
         <ModalBody> 
         <div className="form-group">
          <Label for="postUsername" className="col-form-label">Username: </Label>
          <Input type="text" id="postUsername"></Input>
          </div>
          <div className="form-group">
          <Label for="postPassword" className="col-form-label">Password: </Label>
          <Input type="password" id="postPassword"></Input>
          </div>
          </ModalBody> 
          <ModalFooter>

            <Button color="primary" className="btn btn-warning">Sign Up</Button>
            <Button color="secondary" className="btn btn-dark" onClick={this.toggleModalTwo.bind(this)}>Cancel</Button>
          </ModalFooter>


        </Modal>

    
        
        <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggleModal.bind(this)}>Please create a Username and Password</ModalHeader>
     
         <ModalBody> 
         <div className="form-group">
          <Label for="postUsername" className="col-form-label">Username: </Label>
          <Input type="text" id="postUsername"></Input>
          </div>
          <div className="form-group">
          <Label for="postPassword" className="col-form-label">Password: </Label>
          <Input type="password" id="postPassword"></Input>
          </div>
          </ModalBody> 
          <ModalFooter>

            <Button color="primary" className="btn btn-warning">Sign Up</Button>
            <Button color="secondary" className="btn btn-dark" onClick={this.toggleModal.bind(this)}>Cancel</Button>
          </ModalFooter>


        </Modal>
        </React.Fragment>
    )
  }
}

export default App;
