import { useRouter } from "next/router";

export default function Solution() {
  const { query } = useRouter();
  return <div>{query.param}</div>;
}
