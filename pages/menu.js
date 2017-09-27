import Layout from '../components/Layout'
import Card from '../components/Card'
import stylesheet from '../static/css/styles.scss'


export default() => (
  <Layout>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

    <main className="menu-container">
      <div className="menu-title">
        <span>Gratia</span>
        <div className="top">
          <h2>Menu</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="card-container">
        <Card imgLink="url(./static/images/main-dishes.png)" title="Main Dishes" />
        <Card imgLink="url(./static/images/soups.png)" title="Soups" />
        <Card imgLink="url(./static/images/hamburgers.png)" title="Hamburgers" />
        <Card imgLink="url(./static/images/cupcakes.png)" title="desserts" />
        <Card imgLink="url(./static/images/barbecue.png)" title="barbecue" />
        <Card imgLink="url(../static/images/salads.png)" title="salad" />
      </div>
    </main>

    <style jsx global>{`
      nav {
        background-color: rgb(255, 255, 255);
      }
      nav h3, nav a {
        color: #000;
      }
    `}</style>
  </Layout>
)
