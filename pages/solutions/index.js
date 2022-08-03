import Link from "next/link";

const Index = () => {
  const solutions = ["all", "ecom", "sms", "hrms"];

  return (
    <div>
      <div className="flex flex-col space-y-4 text-gray-900">
        {solutions.map((s) => (
          <Link href={`/solutions/${s}`}>
            <a key={s}>{s}</a>
          </Link>
        ))}
      </div>
      <main></main>
    </div>
  );
};
export default Index;
