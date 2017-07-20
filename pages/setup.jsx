import React from 'React';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Like from '../components/like';

class Main extends React.Component{
  render(){
      return(
        <div id="container">
          <nav>
          <Menu />
          </nav>
          <main className="main">

            <h1>Setup</h1>


          <button>See more</button>

          </main>

        </div>

      );

  }


}
export default Main;
