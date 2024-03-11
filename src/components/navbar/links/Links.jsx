"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import menu from "../../../../public/menu.png";
import Image from "next/image";

const Links = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  const session = true;
  const isAdmin = true;

  return (
    <div>
      <div className="hidden lg:block">
        <div className="flex items-center gap-[10px]">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.title}
              className={`min-w-[100px] p-[10px] rounded-[20px] font-medium text-center
            ${pathname === link.path && "bg-[var(--text)] text-[var(--btn)]"}
            `}
            >
              {link.title}
            </Link>
          ))}
          {session ? (
            <>
              {isAdmin && (
                <Link
                  href="/admin"
                  className={`min-w-[100px] p-[10px] rounded-[20px] font-medium text-center
            ${pathname === "/admin" && "bg-[var(--text)] text-[var(--btn)]"}
            `}
                >
                  Admin
                </Link>
              )}
              <button className="p-[10px] cursor-pointer font-bold">
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className={`min-w-[100px] p-[10px] rounded-[20px] font-medium text-center
        ${pathname === "/login" && "bg-[var(--text)] text-[var(--btn)]"}
        `}
            >
              Login
            </Link>
          )}
        </div>
      </div>
      <button onClick={() => setOpen((prev) => !prev)} className="lg:hidden">
        {open ? "cancel" : <Image src={menu} alt="menu" className="w-8 h-8" />}
      </button>
      {open && (
        <div className="absolute top-[100px] right-0 w-1/2 h-[calc(100vh-100px)] bg-[var(--bg)] flex flex-col items-center justify-center gap-[10px] overflow-hidden transition-all ease-in-out lg:hidden z-20">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.title}
              onClick={() => {
                link.path && setOpen(false);
              }}
              className={`min-w-[100px] p-[10px] rounded-[20px] font-medium text-center
            ${pathname === link.path && "bg-[var(--text)] text-[var(--btn)]"}
            `}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
