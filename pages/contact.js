import Layout from '../components/Layout'
import stylesheet from '../static/css/styles.scss'

export default() => (
  <Layout>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

    <main className="contact-container">
      <div className="contact-title">
        <span>Gratia</span>
        <div className="top">
          <h2>Contact</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <form>
        <input type="text" value="First Name and Last Name" />
        <input type="text" value="E-mail" />
        <textarea value="Your message here.."></textarea>
        <button type="submit">Send</button>
      </form>

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
