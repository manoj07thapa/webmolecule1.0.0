import { useRouter } from "next/router";

export default function Course() {
  const { query } = useRouter();
  return <div>{query.param}</div>;
}
