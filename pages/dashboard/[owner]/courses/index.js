import { useState, useEffect, useContext, useCallback } from "react";
import { API, Auth } from "aws-amplify";
import SidebarLayout from "../../../../components/dashboard/SidebarLayout";
import { listCoursesWithEnrollees } from "../../../../src/customGraphql/queries";
import { deleteCourse } from "../../../../src/graphql/mutations";
import CourseTable from "../../../../components/dashboard/course/CourseTable";
import { UserContext } from "../../../../hooks/user/UserContext";
import { listUserCourses } from "../../../../src/graphql/queries";
import FramerMotion from "../../../../components/sharedLayouts/FramerMotion";
// import CourseTable1 from "../../../../../components/dashboard/course/CourseTable1";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const { user } = useContext(UserContext);
  const username = user?.username;

  const fetchCourses = useCallback(async () => {
    if (username) {
      try {
        const filter = {
          tutor: { eq: username },
        };
        const res = await API.graphql({
          query: listCoursesWithEnrollees,
          variables: { filter },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        console.log("RES", res);
        setCourses(res.data.listCourses.items);
      } catch (error) {
        console.log(error);
      }
    }
  }, [username]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  // useEffect(() => {
  //   fetchTeacherCourses();
  // }, [fetchTeacherCourses]);

  if (!user) {
    return "Loading...";
  }

  const removeCourse = async (id) => {
    try {
      await API.graphql({
        query: deleteCourse,
        variables: { input: { id } },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      fetchCourses();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FramerMotion className="">
      <h1>owners created courses only</h1>
      {/* <CourseTable1 courses={courses} removeCourse={removeCourse} /> */}
      <CourseTable
        courses={courses}
        removeCourse={removeCourse}
        username={username}
      />

      {/* 
      <pre>{JSON.stringify(teacherCourses, null, 4)}</pre> */}
    </FramerMotion>
  );
};
Courses.PageLayout = SidebarLayout;
export default Courses;
