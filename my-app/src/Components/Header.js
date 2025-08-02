import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>My Blog</h1>
      <nav>
        <a className="hbutton" href="/">Home</a>
        <a className="hbutton" href="/about">About</a>
      </nav>
    </header>
  );
}

export default Header;