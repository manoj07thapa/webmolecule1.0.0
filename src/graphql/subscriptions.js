/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserCourses = /* GraphQL */ `
  subscription OnCreateUserCourses(
    $filter: ModelSubscriptionUserCoursesFilterInput
    $username: String
    $tutor: String
  ) {
    onCreateUserCourses(filter: $filter, username: $username, tutor: $tutor) {
      id
      userID
      courseID
      user {
        id
        username
        email
        phone_number
        enrolledCourses {
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
        enrollees {
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
export const onUpdateUserCourses = /* GraphQL */ `
  subscription OnUpdateUserCourses(
    $filter: ModelSubscriptionUserCoursesFilterInput
    $username: String
    $tutor: String
  ) {
    onUpdateUserCourses(filter: $filter, username: $username, tutor: $tutor) {
      id
      userID
      courseID
      user {
        id
        username
        email
        phone_number
        enrolledCourses {
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
        enrollees {
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
export const onDeleteUserCourses = /* GraphQL */ `
  subscription OnDeleteUserCourses(
    $filter: ModelSubscriptionUserCoursesFilterInput
    $username: String
    $tutor: String
  ) {
    onDeleteUserCourses(filter: $filter, username: $username, tutor: $tutor) {
      id
      userID
      courseID
      user {
        id
        username
        email
        phone_number
        enrolledCourses {
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
        enrollees {
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
