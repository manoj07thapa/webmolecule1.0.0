/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      title
      subtitle
      image
      price
      courseContent {
        topic
        description
        duration
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subtitle
        image
        price
        courseContent {
          topic
          description
          duration
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
