import styles from './Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Nav({}) {
  return(
   <nav>
     <Link href="/">
        <div>
          <Image src="/logo-light.png" width={255} height={32}/>
        </div>
      </Link>

      <div>
        <Link href="/vacatures">
          <a>Vacatures <span>(4)</span></a>
        </Link>

        <Link href="/diensten">
          <a>Diensten</a>
        </Link>

        <Link href="/klanten">
          <a>Klanten</a>
        </Link>

        <Link href="/overons">
          <a>Over ons</a>
        </Link>

        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>

      <div>
        <p>facebook</p>
        <p>instagram</p>
      </div>
   </nav>
  )
}

export default Nav