import { useRouter } from "next/router";

const Solution = () => {
  const { query } = useRouter();
  return <div>{query.name}</div>;
};
export default Solution;
