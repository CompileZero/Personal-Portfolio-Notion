import Logo from "../../assets/svgs/logo.svg";
import Link from "next/link";

export const Nav: React.FC = () => (
  <div className="bg-gray-800">
    <nav className="flex justify-between items-center my-4 container">
      <Link href="/">
        <a>
          <Logo className="w-8" />
        </a>
      </Link>
      <ul className="flex">
        {/* <li>
        <Link href="/blog">
          <a className="text-blue-600 mr-2 px-2 py-1 rounded-md">Blog</a>
        </Link>
      </li> */}
        <li>
          <Link href="/work">
            <a className="text-red-200 text-sm font-medium mr-2 px-2 py-1 rounded-md bg-gray-700 hover:bg-gray-600 text-gray-100 py-1 px-6">
              Resume
            </a>
          </Link>
          <Link href="/work">
            <a className="text-teal-200 text-sm font-medium mr-2 px-2 py-1 rounded-md bg-gray-700 hover:bg-gray-600 text-gray-100 py-1 px-6">
              Work
            </a>
          </Link>
          <Link href="/work">
            <a className="text- text-sm font-medium mr-2 px-2 py-1 rounded-md bg-gray-700 hover:bg-gray-600 text-gray-100 py-1 px-6">
              Blog
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);
