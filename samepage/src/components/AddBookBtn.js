import React from "react";
import { Container, Col, Row, Button } from "reactstrap";

function AddBookBtn (props){
    return(
<button onClick={props.onClick}> Add Book{console.log(props + "Clicked!!")}</button>
    );
}

export default AddBookBtn;