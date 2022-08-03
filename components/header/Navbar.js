import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-slate-900">
      <nav className="px-6 py-6 max-w-7xl mx-auto flex items-center justify-between text-white">
        <div>
          <Link href="/">
            <a>WebMolecule</a>
          </Link>
        </div>
        <div className="space-x-12">
          <Link href="/solutions">
            <a>Solutions</a>
          </Link>
          <Link href="/courses">
            <a>courses</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
        <div className="space-x-6">
          <Link href="/auth/signIn">
            <a>SignIn</a>
          </Link>
          <Link href="/auth/signUp">
            <a>SignUp</a>
          </Link>
        </div>
      </nav>
    </div>
  );
}
