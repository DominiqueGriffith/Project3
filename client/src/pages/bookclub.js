import React from "react";
import axios from 'axios';
import API from "../utils/API";
import { Container, Col, Row, Button, Alert,Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from "reactstrap";
import ReactDom from "react-dom";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import AddBookBtn from '../components/AddBookBtn.js'
import { Component } from "react";
import LoggedIn from "./loggedIn.js";
import AddBookClubPost from "../components/AddBookClubPost.js";




const styles = {
    card: {
      border: "1px lightgray solid",
      borderRadius: "5px",
      maxWidth: "500px",
      minHeight: "111.600px",
  
  
    },
  
    a: {
      fontFamily: "Pacifico"
  
    },
    img: {
      maxheight: "40px",
      maxWidth: "40px",
      border: "1px lightgray solid",
    },
  
  
    formation: {
      textAlign: "center",
    }
  
  
  };




class bookclubs extends Component {

    state = {
        visible: true,
        modalIsOpen:false
     
      }
      toggleModal (){
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
      
      });
    }
    // componentDidMount() {
  
    //   this.setState({ data: this.savedBooks(this.state.data) });
    //   // API.savedBooks()
    //   //     .then(savedBooks => this.setState({ savedBooks: savedBooks }))
    //   //     .catch(err => console.error(err));
    // }
  
  
  


render () {
    return (
  
        <React.Fragment>



        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
          <a className="navbar-brand" id="page-title" href="#" style={styles.a}>Same Page</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link username" href="#">Welcome NAME<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <button className="btn btn-warning" type="button" id="sign-out">Sign Out</button>
              </li>
              <li className="nav-item active">
            
                 <button className="btn btn-danger"onClick= "" type="button" id="sign-out">Bookclubs</button>
                 
               
                
              </li>
            </ul>
            <ul className="nav navbar-right">
            {/* <form id="searchbar" onSubmit={handleSubmit}> */}
              <form id="searchbar" >
              {/* <input id="booksearch" className="form-control mr-sm-2" type="search" onChange={handleChange} */}
                <input id="booksearch" className="form-control mr-sm-2" type="search" 
                  placeholder="Search by Author or Title" aria-label="Search"></input>
                <button id="book-submit" className="btn btn-warning"
                  type="submit">Search</button>
              </form>
  
            </ul>
          </div>
        </nav>

        <div className="container">
        <div className="w-100"></div>
        <div className="row">
          <div className="col-md-6">
            <div id="user-Search"></div>
          </div>
          <br>
          </br>
          <div className="w-100"></div>
          <div className="row">
            <div id="book-info">
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
            
              {/* <h4>Existing book clubs</h4>  */}
            </div>
          </div>


        </div>
        
        <div className="w-100"></div>
        <div className="row">
        <div className="col-md-12">
        {/* <AddBookClubPost> */}
        {/* {createdBookclub.map( (bookclub) =>{
        return(
<h4 >{bookclub.title}</h4>
)

        })} */}
          {/* </AddBookClubPost> */}

    

        </div>

          </div>

        <div className="w-100"></div>
        <div className="row">
          <div className="col-md-4" style= {styles.col}>
            <div id="top-week-one"style = {styles.card}>
            
              <img src="" style = {styles.img}></img>
              {/* <img src="" alt="" class="img img-thumbnail"> </img> */}
              <h6 id="bookone-title">User bookclub:</h6>
              <h6 id="bookone-author">3 memeber</h6>
              <h6 id="bookone-votes">We are all about the classics</h6>
              <Button>Open</Button>




            </div>
            </div>
            <div className="col-md-4" style= {styles.col}>
            <div id="top-week-one"style = {styles.card}>
            
              <img src="" style = {styles.img}></img>
              {/* <img src="" alt="" class="img img-thumbnail"> </img> */}
              <h6 id="bookone-title">User bookclub:</h6>
              <h6 id="bookone-author">3 memeber</h6>
              <h6 id="bookone-votes">We are all about the classics</h6>




            </div>
            </div>
            <div className="col-md-4" style= {styles.col}>
            <div id="top-week-one"style = {styles.card}>
            
              <img src="" style = {styles.img}></img>
              {/* <img src="" alt="" class="img img-thumbnail"> </img> */}
              <h6 id="bookone-title">User bookclub:</h6>
              <h6 id="bookone-author">3 memeber</h6>
              <h6 id="bookone-votes">We are all about the classics</h6>




            </div>
            </div>
            </div>
           
            <Button className="btn btn-warning" onClick={this.toggleModal.bind(this)}>Create  book club</Button>
             
            </div>

            <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggleModal.bind(this)}>Create a book club</ModalHeader>
     
         <ModalBody> 
         <AddBookClubPost />
          </ModalBody> 
          <ModalFooter>

            
            
       
            <Button color="secondary" className="btn btn-dark" onClick={this.toggleModal.bind(this)}>Cancel</Button>
          </ModalFooter>


        </Modal>

</React.Fragment>


    )
  

}
}

export default bookclubs;