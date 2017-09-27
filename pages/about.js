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
          <h2>Our Team</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="card-container">
        <Card imgLink="url(../static/images/employee.jpeg)" title="Bob Paul" />
        <Card imgLink="url(../static/images/employee.jpeg)" title="Emily White" />
        <Card imgLink="url(../static/images/employee.jpeg)" title="Carter Green" />
        <Card imgLink="url(../static/images/employee.jpeg)" title="Jim Port" />
        <Card imgLink="url(../static/images/employee.jpeg)" title="Lia Sy" />
        <Card imgLink="url(../static/images/employee.jpeg)" title="Ray Kim" />
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
