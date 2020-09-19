import React from 'react';

class Likes extends React.Component {

    constructor(props){
  
      super(props);
      this.state = {
        likes: 0,
        updated: false
      };
  
    }

    updateLikes = () => {

        if(!this.state.updated) {
          this.setState((prevState, props) => {
            return {
              likes: prevState.likes + 1,
              updated: true
            };
          });
    
        } else {

            this.setState((prevState, props) => {
                return {
                  likes: prevState.likes + 1,
                  updated: false
                };
              });
        
            }
          }
        
          render(){
        
            return(
              <div>
                <button type = "button" onClick={this.updateLikes}><span role="img" aria-label="like">👍</span></button>
                <p>{this.state.likes}</p>
              </div>
            );
          }
        }
        
        export default Likes;