import React from 'react';
import Icon from './icon';


class Logo extends React.Component {
render(){
  return(
    <div>

    <h1 className="picogram-Logo">picogram {this.props.name}</h1>

    </div>
  );

}

}
export default Logo;
