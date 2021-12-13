import gql from "graphql-tag";

export const GET_ALL_CLIENTS = gql`
      query GetAllClients {
        clientsCollection(order:  sys_publishedAt_ASC ) {
          items {
            title
            logo {
              url
            }
            business
            slug
            context
            banner {
              url
            }
            case
            project
          }
        }
      }
    `

export const CLIENT_BY_SLUG = gql`
      query GetClientBySlug($slug: String!) {
        clientsCollection(where: { slug: $slug }) {
          items {
            title
            logo {
              url
            }
            business
            slug
            context
            banner {
              url
            }
            case
            project
          }
        }
      }`