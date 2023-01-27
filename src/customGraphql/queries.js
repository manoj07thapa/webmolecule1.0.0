//this file provides inadequate queries which are not generated by amplify

export const getUserWithEnrolledCourses = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      phone_number
      enrolledCourses {
        items {
          course {
            category
            id
            title
            tutor
          }
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

export const listCoursesWithEnrollees = /* GraphQL */ `
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
        enrollees {
          items {
            user {
              email
              id
              phone_number
              username
              updatedAt
              createdAt
            }
            courseID
            createdAt
            id
            tutor
            updatedAt
            userID
            username
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const getCourseWithEnrollees = /* GraphQL */ `
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
      enrollees {
        items {
          id
          userID
          courseID
          createdAt
          updatedAt
          username
          tutor
          user {
            email
            phone_number
            username
          }
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;