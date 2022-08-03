import Link from "next/link";
const courses = ["react", "vue", "next"];
const Navbar = () => {
  return (
    <div className="bg-slate-900">
      <nav className="flex items-center justify-between px-6 py-6 text-white">
        <h1>Webmolecule</h1>
        <div className="flex space-x-7 justify-between items-center">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          {courses.map((c) => (
            <Link href={`/courses/${c}`}>
              <a>{c}</a>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
