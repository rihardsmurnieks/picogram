import React from 'React';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Like from '../components/like';

class Contacts extends React.Component{
  render(){
      return(
        <div className="container">

        <nav className="navigation">
          <Menu />


        </nav>
        <h1>Contacts</h1>
        </div>

      );

  }


}
export default Contacts;
