import gql from "graphql-tag";

export const GET_ALL_CLIENTS = gql`
      query GetAllServices {
        servicesCollection(order:  sys_publishedAt_ASC ) {
          items {
            title
            slug
            description
            points
            img {
              url
            }
          }
        }
      }
    `