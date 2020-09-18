import gql from 'graphql-tag';

export const WINTER_STORAGE_APPLICATIONS_QUERY = gql`
  query WINTER_STORAGE_APPLICATIONS($first: Int!, $after: String, $orderBy: String) {
    winterStorageApplications(first: $first, after: $after, orderBy: $orderBy, areaTypes: [MARKED]) {
      count
      edges {
        node {
          areaType
          id
          status
          createdAt
          municipality
          customer {
            id
          }
          boatType
          boatRegistrationNumber
          boatWidth
          boatLength
          boatName
          boatModel
          winterStorageAreaChoices {
            priority
            winterStorageAreaName
            winterStorageArea
          }
        }
      }
    }
    boatTypes {
      id
      name
    }
  }
`;
