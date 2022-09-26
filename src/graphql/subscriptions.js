/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onCreateUser(filter: $filter, username: $username) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onUpdateUser(filter: $filter, username: $username) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onDeleteUser(filter: $filter, username: $username) {
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
export const onCreateUserCourse = /* GraphQL */ `
  subscription OnCreateUserCourse(
    $filter: ModelSubscriptionUserCourseFilterInput
    $username: String
    $tutor: String
  ) {
    onCreateUserCourse(filter: $filter, username: $username, tutor: $tutor) {
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
export const onUpdateUserCourse = /* GraphQL */ `
  subscription OnUpdateUserCourse(
    $filter: ModelSubscriptionUserCourseFilterInput
    $username: String
    $tutor: String
  ) {
    onUpdateUserCourse(filter: $filter, username: $username, tutor: $tutor) {
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
export const onDeleteUserCourse = /* GraphQL */ `
  subscription OnDeleteUserCourse(
    $filter: ModelSubscriptionUserCourseFilterInput
    $username: String
    $tutor: String
  ) {
    onDeleteUserCourse(filter: $filter, username: $username, tutor: $tutor) {
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
