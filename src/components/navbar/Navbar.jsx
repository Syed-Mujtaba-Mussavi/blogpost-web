import Links from "./links/Links";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[80px]">
      <Link href="/">
        <div className="text-3xl font-bold">Logo</div>
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
