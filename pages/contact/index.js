import Nav from "../../comps/_default/nav"
import Footer from "../../comps/_default/footer"
import styles from './Contact.module.css'

function Contact({}) {
  return(
    <div className={styles.container}>
      <Nav/>
      <h1>
        Contact
      </h1>
      <Footer/>
    </div>
  )
}

export default Contact
