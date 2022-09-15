/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      title
      subtitle
      category
      files
      price
      language
      tutor
      tutorWho
      relatedSkills
      youLearn
      duration
      framework
      reqKnowledge
      level
      time
      courseContent {
        topic
        description
        duration
      }
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
        files
        price
        language
        tutor
        tutorWho
        relatedSkills
        youLearn
        duration
        framework
        reqKnowledge
        level
        time
        courseContent {
          topic
          description
          duration
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getResource = /* GraphQL */ `
  query GetResource($id: ID!) {
    getResource(id: $id) {
      id
      title
      subtitle
      subtitle1
      subtitle2
      description
      page
      section
      files
      createdAt
      updatedAt
    }
  }
`;
export const listResources = /* GraphQL */ `
  query ListResources(
    $filter: ModelResourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        subtitle
        subtitle1
        subtitle2
        description
        page
        section
        files
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
