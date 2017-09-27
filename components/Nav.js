import Link from 'next/link'
import FontAwesome from 'react-fontawesome'

const Nav = () => (
  <nav>
    <div className="nav-logo">
      <img className="hero-logo" src="../static/images/logo.gif" alt="Gratia Restaurant Logo" />
      <h3>Gratia</h3>
    </div>

    <div className="nav-links">
      <Link href="/../">
        <a>Home</a>
      </Link>
      <Link href="/../about/">
        <a>About</a>
      </Link>
      <Link href="/../menu/">
        <a>Menu</a>
      </Link>
      <Link href="/../contact/">
        <a>Contact</a>
      </Link>
    </div>

    <FontAwesome name="bars fa-2x" />
  </nav>
)

export default Nav
