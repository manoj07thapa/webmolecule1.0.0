/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createResource = /* GraphQL */ `
  mutation CreateResource(
    $input: CreateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    createResource(input: $input, condition: $condition) {
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
export const updateResource = /* GraphQL */ `
  mutation UpdateResource(
    $input: UpdateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    updateResource(input: $input, condition: $condition) {
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
export const deleteResource = /* GraphQL */ `
  mutation DeleteResource(
    $input: DeleteResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    deleteResource(input: $input, condition: $condition) {
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
export const createUserCourse = /* GraphQL */ `
  mutation CreateUserCourse(
    $input: CreateUserCourseInput!
    $condition: ModelUserCourseConditionInput
  ) {
    createUserCourse(input: $input, condition: $condition) {
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
export const updateUserCourse = /* GraphQL */ `
  mutation UpdateUserCourse(
    $input: UpdateUserCourseInput!
    $condition: ModelUserCourseConditionInput
  ) {
    updateUserCourse(input: $input, condition: $condition) {
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
export const deleteUserCourse = /* GraphQL */ `
  mutation DeleteUserCourse(
    $input: DeleteUserCourseInput!
    $condition: ModelUserCourseConditionInput
  ) {
    deleteUserCourse(input: $input, condition: $condition) {
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
