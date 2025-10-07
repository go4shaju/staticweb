import './header.css';
import Logo from '../assets/logo1.jpeg';

export default function Header() {
  return (
    <header className="App-header"> 

      <div className="logo-title">
        <img src={Logo} className="logo" />
        <h1>Welcome to My Web App</h1>
      </div>


      <nav>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
      </nav>
    </header>
  )
}
