import SidebarLayout from "../../components/dashboard/SidebarLayout";
import { useState, useEffect, useContext, useCallback } from "react";
import { API } from "aws-amplify";
import { listUserCourses } from "../../src/graphql/queries";
import { UserContext } from "../../hooks/user/UserContext";
import CourseTable from "../../components/dashboard/course/CourseTable";

const EnrolledCourses = () => {
  const { user } = useContext(UserContext);
  const [courses, setCourses] = useState([]);

  const fetchCourses = useCallback(async () => {
    // const { username } = await Auth.currentAuthenticatedUser();
    if (user) {
      const userID = user.attributes.sub;

      try {
        const filter = {
          userID: { eq: userID },
        };
        // setLoading(true);
        const res = await API.graphql({
          query: listUserCourses,
          variables: { filter },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        console.log("RES", res);
        setCourses(res.data.listUserCourses.items);
      } catch (error) {
        console.log(error);
      }
    }
  }, [user]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  if (!user) {
    return "Loading...";
  }

  return (
    <div>
      <pre>{JSON.stringify(courses, null, 4)}</pre>
    </div>
  );
};
EnrolledCourses.PageLayout = SidebarLayout;

export default EnrolledCourses;
