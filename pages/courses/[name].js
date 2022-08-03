import { useRouter } from "next/router";

const Course = () => {
  const { query } = useRouter();
  return <div>{query.name}</div>;
};

export default Course;
