import {CLIENT_BY_SLUG} from "../../graphql/CLIENT_QUERIES";
import {useQuery} from "@apollo/client";
import { useRouter } from 'next/router'

function KlantDetails({}) {
  const router = useRouter()
  const { slug } = router.query

  const { loading, data } = useQuery(CLIENT_BY_SLUG, {
    variables: { slug: slug },
  });

  if (loading) {
    return(
        <main>
            <p>Loading</p>
        </main>
    )
 }

  let item = data.clientsCollection.items[0]

  return(
   <h1>{item.title}</h1>
  )
}

export default KlantDetails