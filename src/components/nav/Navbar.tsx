import Link from "next/link";

const Routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-8">
        {Routes.map((route) => (
          <li key={route.href}>
            <Link href={route.href}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
