import React from 'react';



class Like extends React.Component {
  constructor(){
    super();
    this.state={
      likes:0

    }

  }
  addLike(){
    this.setState({likes: this.state.likes+1})

  }
render(){
  return(
    <div>
  <button onClick={this.addLike.bind(this)}>{this.state.likes}</button>
  
  </div>
  );

}

}
export default Like;
