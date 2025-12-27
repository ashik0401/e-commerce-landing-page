"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { LuUserRound } from "react-icons/lu";

const menu = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#" },
  {
    name: "Our Services",
    href: "#",
    dropdown: ["Service 1", "Service 2", "Service 3"],
  },
  {
    name: "Our Products",
    href: "#",
    dropdown: ["Product 1", "Product 2", "Product 3"],
  },
  { name: "Blogs", href: "#" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState({});

  const isActive = (href) => href === pathname;

  return (
    <header className="bg-white shadow border border-white/20 fixed w-full z-50 mt-13 px-4 md:px-5 lg:px-30 py-4 md:py-6 text-nowrap ">
      <div className="flex justify-between items-center ">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={45}
            className="object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center lg:gap-10 md:gap-2">
          {menu.map((item) => (
            <div key={item.name} className="relative lg:text-md md:text-sm ">
              <button
                onMouseEnter={() =>
                  item.dropdown && setDropdown({ [item.name]: true })
                }
                onMouseLeave={() =>
                  item.dropdown && setDropdown({ [item.name]: false })
                }
                className={`flex items-center gap-1 transition ${
                  isActive(item.href)
                    ? "text-primary font-semibold"
                    : "text-black hover:text-primary"
                }`}
              >
                {item.name}{" "}
                {item.dropdown && <FaChevronDown className="text-sm" />}
              </button>
              {item.dropdown && dropdown[item.name] && (
                <div className="absolute top-full left-0 bg-white shadow-md rounded mt-1 min-w-37.5">
                  {item.dropdown.map((d) => (
                    <Link
                      key={d}
                      href="#"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      {d}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center lg:text-md md:text-sm lg:gap-4 md:gap-2">
          <Link
            href="#"
            className="relative flex items-center lg:gap-2 md:gap-1 hover:text-primary"
          >
            <BsCart2 size={20} />
            <span>Cart</span>
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>

          <Link
            href="#"
            className="flex items-center lg:gap-2 md:gap-1hover:text-primary"
          >
            <LuUserRound size={20} />
            <span>Your Account</span>
          </Link>
          <Link
            href="#"
            className="bg-primary text-white lg:px-7 lg:py-4 md:px-2 md:py-2 hover:bg-primary/90 "
          >
            Contact Us
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black focus:outline-none"
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-2">
          {menu.map((item) => (
            <div key={item.name} className="space-y-1">
              <button
                onClick={() =>
                  item.dropdown &&
                  setDropdown({ [item.name]: !dropdown[item.name] })
                }
                className={`w-full flex justify-between items-center transition ${
                  isActive(item.href)
                    ? "text-primary font-semibold"
                    : "text-black hover:text-primary"
                }`}
              >
                {item.name} {item.dropdown && <FaChevronDown />}
              </button>
              {item.dropdown && dropdown[item.name] && (
                <div className="pl-4 space-y-1">
                  {item.dropdown.map((d) => (
                    <Link
                      key={d}
                      href="#"
                      className="block text-black hover:text-primary"
                    >
                      {d}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="#"
            className="relative flex items-center lg:gap-2 md:gap-1 hover:text-primary"
          >
            <BsCart2 size={20} />
            <span>Cart</span>
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>

          <Link
            href="#"
            className="block flex items-center gap-2 text-black hover:text-primary"
          >
            <LuUserRound /> Account
          </Link>
          <Link
            href="#"
            className="block bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 text-center"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
