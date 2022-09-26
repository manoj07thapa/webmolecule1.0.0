/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      phone_number
      courses {
        items {
          id
          userID
          courseID
          createdAt
          updatedAt
          username
          tutor
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        phone_number
        courses {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
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
      users {
        items {
          id
          userID
          courseID
          createdAt
          updatedAt
          username
          tutor
        }
        nextToken
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
        users {
          nextToken
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
      owner
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
        owner
      }
      nextToken
    }
  }
`;
export const getUserCourse = /* GraphQL */ `
  query GetUserCourse($id: ID!) {
    getUserCourse(id: $id) {
      id
      userID
      courseID
      user {
        id
        username
        email
        phone_number
        courses {
          nextToken
        }
        createdAt
        updatedAt
      }
      course {
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
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      username
      tutor
    }
  }
`;
export const listUserCourses = /* GraphQL */ `
  query ListUserCourses(
    $filter: ModelUserCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        courseID
        user {
          id
          username
          email
          phone_number
          createdAt
          updatedAt
        }
        course {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        username
        tutor
      }
      nextToken
    }
  }
`;
