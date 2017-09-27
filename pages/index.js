import Layout from '../components/Layout'
import stylesheet from '../static/css/styles.scss'
import FontAwesome from 'react-fontawesome'

export default() => (
  <Layout>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

    <header>
      <div className="tagline-div">
        <p className="tagline">and perfection is not a detail</p>
        <a href="#"><FontAwesome name="long-arrow-down" /></a>
      </div>
      <a className="book-now" href="#">Book a table</a>
    </header>

    <section className="perfection">
      <span>Gratia</span>
      <div className="top">
        <h2>Perfection</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="food-card">
        <div className="desserts">
          <img alt="An image of a desserts" src="./static/images/desserts.png" />
        </div>
        <div className="smoothie">
          <img alt="An image of a smootie" src="./static/images/smoothie.png" />
        </div>
        <div className="breakfast">
          <img alt="An image of a breakfast" src="./static/images/breakfast.png" />
        </div>
      </div>
    </section>

    <section className="detail">
      <a href='#'>Check other offers</a>
      <div className="detail-box">
        <div className="wrap">
          <div className="box">
            <h3>Details</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href='#'>Preparation of out dishes</a>
          </div>
        </div>
      </div>
    </section>

    <section className="reach">
      <span>Gratia</span>
      <div className="top">
        <h2>How we reach this?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="info">
        <div className="location">
          <span>4</span>
          <div className="top">
            <h3>Different Locations</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="product">
          <span>532</span>
          <div className="top">
            <h3>Fresh Products</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="best">
          <span>16</span>
          <div className="top">
            <h3>The best from the beginning</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>

    <style jsx global>{`
      nav {
        background-color: rgb(21, 27, 40);
      }
      nav h3, nav a, .fa-bars {
        color: #fff;
      }
      header {
        background: url("./static/images/hero-img.png") no-repeat center bottom;
        background-size: cover;
      }
    `}</style>
  </Layout>
)
