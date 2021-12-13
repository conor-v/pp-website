import gql from "graphql-tag";

export const GET_ALL_JOBS = gql`
      query GetAllJobs {
        jobsCollection(order:  sys_publishedAt_ASC ) {
          items {
            title
            slug
            profile
            task
            abilities
          }
        }
      }
    `

export const JOB_BY_SLUG = gql`
      query GetJobBySlug($slug: String!) {
        jobsCollection(where: { slug: $slug }) {
          items {
            title
            slug
            profile
            task
            abilities
          }
        }
      }`