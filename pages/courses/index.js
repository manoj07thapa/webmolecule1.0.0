import Link from "next/link";

const Index = () => {
  const courses = ["frontend", "backend", "database", "design"];

  return (
    <div>
      <div className="flex flex-col space-y-4 text-gray-900">
        {courses.map((s) => (
          <Link href={`/courses/${s}`}>
            <a key={s}>{s}</a>
          </Link>
        ))}
      </div>
      <main></main>
    </div>
  );
};
export default Index;
