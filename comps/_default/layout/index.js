import Nav from '../nav'
import VacList from "../../vacatures/vacList"
import Footer from '../footer'
import styles from './Layout.module.css'

function Layout({children}) {
  return(
    <div>
      <Nav/>
        {children}
      <VacList/>
      <Footer/>
    </div>
  )
}

export default Layout
