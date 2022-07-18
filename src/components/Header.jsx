import {Link} from 'react-router-dom'
function Header() {
  return (
    <div>
  <nav className="navbar navbar-expand-md " style={{backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
    <Link className="navbar-brand" to= '/'>Home</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/about">About </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default Header