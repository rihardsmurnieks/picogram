import React from 'React';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Like from '../components/like';
import Check from '../components/checkbox'

class Main extends React.Component{
  render(){
      return(
        <div id="container">
          <nav>
          <Menu />
          </nav>
          <main className="main">

          
             <div id="form">
               <h2>Setup your needs</h2>
               <Check />
              </div>
          </main>

        </div>

      );

  }


}
export default Main;
