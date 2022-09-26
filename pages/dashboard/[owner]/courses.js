import { useState, useEffect, useContext, useCallback } from "react";
import { API, Auth } from "aws-amplify";
import SidebarLayout from "../../../components/dashboard/SidebarLayout";
import {
  listCourses,
  listUserCourses,
  listUsers,
} from "../../../src/graphql/queries";
import { deleteCourse } from "../../../src/graphql/mutations";
import CourseTable from "../../../components/dashboard/course/CourseTable";
import { UserContext } from "../../../hooks/user/UserContext";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const { user } = useContext(UserContext);
  console.log("CONTEXTUSER", user);
  const username = user.username;

  const fetchCourses = useCallback(async () => {
    // const { username } = await Auth.currentAuthenticatedUser();
    if (username) {
      try {
        const filter = {
          tutor: { eq: username },
        };
        // setLoading(true);
        const res = await API.graphql({
          query: listCourses,
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
    <div>
      <h1>owners created courses only</h1>
      <CourseTable courses={courses} removeCourse={removeCourse} />
    </div>
  );
};
Courses.PageLayout = SidebarLayout;
export default Courses;
