import React from 'React';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Like from '../components/like';

class Err extends React.Component{
  render(){
      return(
        <div className="container">
        <header className="header">
          picogram
          <Icon />
          <Logo />
        </header>
        <nav className="navigation">
          <Menu />


        </nav>
        <main className="content">
          <img className="picogram-image" src="https://source.unsplash.com/random" alt="unsplash" />




        </main>
        <footer className="footer">
          <p>&copy; 2017 Rihards</p>
          Page not found

        </footer>
        </div>

      );

  }


}
export default Err;
