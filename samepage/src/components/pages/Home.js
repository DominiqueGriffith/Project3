import React from "react";

const styles = {
  card: {
    border: "1px lightgray solid",
    borderRadius: "5px",
    maxWidth: "260px",
    boxSizing: "border-box",
    display: "block",
    textAlign: "center",
    
  },
  col: {
    paddingTop: ".5rem",
    paddingBottom: ".5rem"
  }
};



function Home() {
  return (
    <React.Fragment>
      {/* <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <a className="navbar-brand" id="page-title" href="#">Same Page</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item active">
              <a className="nav-link username" href="#">Log In<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <button className="btn btn-warning" type="button" id="sign-out">Sign Up</button>
            </li>

          </ul>

        </div>
      </nav> */}



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
              <h4>Top Rated Books</h4>
            </div>
          </div>


        </div>
        
        <div className="w-100"></div>
        <div className="row">
          <div className="col-md-3" style= {styles.col}>
            <div id="top-week-one"style = {styles.card}>
              <div>IMAGE:</div>
              {/* <img src="" alt="" class="img img-thumbnail"> </img> */}
              <h6 id="bookone-title">BOOK TITLE:</h6>
              <h6 id="bookone-author">BOOK AUTHOR:</h6>
              <h6 id="bookone-votes">CURRENT VOTES:</h6>




            </div>

          </div>

          <div className="col-md-3" style= {styles.col}>
            <div id="top-week-one"style = {styles.card}>
              <div>IMAGE:</div>
              <h6 id="bookone-title">BOOK TITLE:</h6>
              <h6 id="bookone-author">BOOK AUTHOR:</h6>
              <h6 id="bookone-votes">CURRENT VOTES:</h6>

            </div>

          </div>

          <div className="col-md-3"style= {styles.col} >
            <div id="top-week-one"style = {styles.card}>
              <div>IMAGE:</div>
              <h6 id="bookone-title">BOOK TITLE:</h6>
              <h6 id="bookone-author">BOOK AUTHOR:</h6>
              <h6 id="bookone-votes">CURRENT VOTES:</h6>

            </div>

          </div>
          <div className="col-md-3" style= {styles.col}>
            <div id="top-week-one" style = {styles.card}>
              <div>IMAGE:</div>
              <h6 id="bookone-title">BOOK TITLE:</h6>
              <h6 id="bookone-author">BOOK AUTHOR:</h6>
              <h6 id="bookone-votes">CURRENT VOTES:</h6>

            </div>

          </div>

        </div>






      </div>


    </React.Fragment>


  );
}

export default Home;
