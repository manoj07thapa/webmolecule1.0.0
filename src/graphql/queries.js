/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      title
      subtitle
      category
      image
      price
      language
      courseContent {
        topic
        description
        duration
      }
      rating
      tutor
      duration
      frameworks
      reqKnowledge
      level
      time
      createdAt
      updatedAt
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
        category
        image
        price
        language
        courseContent {
          topic
          description
          duration
        }
        rating
        tutor
        duration
        frameworks
        reqKnowledge
        level
        time
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
