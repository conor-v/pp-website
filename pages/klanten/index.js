import styles from './Klanten.module.css'
import Link from 'next/link';
import {GET_ALL_CLIENTS} from "../../graphql/CLIENT_QUERIES";
import {useQuery} from "@apollo/client";

function Klanten({}) {

  const {data, loading} = useQuery(GET_ALL_CLIENTS)

  if (loading) {
    return(
        <main className={styles.main}>
            <p>Loading</p>
        </main>
    )
 }


  return(
    <div className={styles.container}>
      {data.clientsCollection.items.map((item, idx) => (
          <Link key={idx} className="box" href={`/klanten/${item.slug}`}>
            <h2>{item.title}</h2>
          </Link>
      ))}
    </div>
  )
}

export default Klanten
