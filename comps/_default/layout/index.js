import Footer from '../footer'
import Nav from '../nav'
import styles from './Layout.module.css'

function Layout({children}) {
  return(
    <div>
      <Nav/>
        {children}
      <Footer/>
    </div>
  )
}

export default Layout
