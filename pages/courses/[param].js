import { useRouter } from "next/router";

const Course = () => {
  const { query } = useRouter();
  return <div>{query.param}</div>;
};
export default Course;
