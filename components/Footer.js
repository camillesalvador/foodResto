import Link from 'next/link'
import FontAwesome from 'react-fontawesome'

const Footer = () => (
  <footer>
      <div>
        <img src="../static/images/logo.gif" alt="Gratia Restaurant Logo" />
        <hr />
      </div>
      <div className="rights">
        <h4>Gratia Restaurant</h4>
        <p>Gratia Restaurant | 2017</p>
      </div>
      <div class="social">
        <Link href="#">
          <a><FontAwesome name="facebook fa-lg" /></a>
        </Link>
        <Link href="#">
          <a><FontAwesome name="twitter fa-lg" /></a>
        </Link>
        <Link href="#">
          <a><FontAwesome name="youtube fa-lg" /></a>
        </Link>
      </div>
  </footer>
)

export default Footer
