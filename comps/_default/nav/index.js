import styles from './Nav.module.css';
import Link from 'next/link';

function Nav({}) {
  return(
   <nav>
     {/* logo */}
      <Link href="/vacatures">
        <a>Vacatures <span>(4)</span></a>
      </Link>

      <Link href="diensten">
        <a>Diensten</a>
      </Link>

      <Link href="klanten">
        <a>Klanten</a>
      </Link>

      <Link href="overons">
        <a>Over ons</a>
      </Link>

      <Link href="/contact">
        <a>Contact</a>
      </Link>
   </nav>
  )
}

export default Nav