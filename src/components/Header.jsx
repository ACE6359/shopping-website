import { Link } from 'react-router-dom';

function Header({ cartCount, onLogout }) {
  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
        <button onClick={onLogout}>Logout</button>
      </nav>
    </header>
  );
}

export default Header;