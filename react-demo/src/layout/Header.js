import { Link } from 'react-router-dom';

function Header() {
    return (
    <div className="navigation-container">
        <h3>My Invoicing</h3>
        <Link to="/about">About</Link>
        <Link to="/invoice">Invoice</Link>
        <Link to="/">Home</Link>
    </div>
    );
  }
  
  export default Header;