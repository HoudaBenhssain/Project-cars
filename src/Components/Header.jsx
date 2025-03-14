import { useState } from "react";
import {
  BiPhone,
  BiUser,
  BiSearch,
  BiCar,
  BiTime,
  BiMapPin,
  BiMenu,
} from "react-icons/bi";
import React from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center gap-2">
            <span>Need Help?</span>
            <div className="flex items-center gap-1">
              <BiPhone className="text-lg" />
              <a
                href="tel:+321123345978"
                className="hover:text-blue-300 transition-colors"
              >
                Tél: +212 64455-3500
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/login"
              className="flex items-center gap-1 hover:text-blue-300 transition-colors"
            >
              <BiUser /> Login
            </a>
            <a
              href="/register"
              className="flex items-center gap-1 hover:text-blue-300 transition-colors"
            >
              <BiUser /> Register
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <BiCar className="text-4xl text-blue-900" />
            <h1 className="text-xl font-bold text-blue-900">
              Houda Cars
              <span className="block text-sm font-normal text-gray-600">
                Service
              </span>
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2 text-gray-600">
              <BiMapPin className="text-2xl text-blue-900" />
              <div>
                <div className="font-semibold">Marrakech</div>
                <div className="text-sm">Guéliz, Marrakech</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <BiTime className="text-2xl text-blue-900" />
              <div>
                <div className="font-semibold">Lundi à Samedi</div>
                <div className="text-sm">9am - 7pm</div>
              </div>
            </div>
          </div>

          <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors shadow-md">
            Request a call
          </button>
        </div>
      </div>

      <nav className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <BiMenu />
            </button>

            <ul className="hidden md:flex items-center gap-6 ml-35">
              {["Home", "About", "Cars", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-blue-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 rounded-full text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <BiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4">
              <ul className="flex flex-col gap-4">
                {["Home", "About", "Cars", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase()}`}
                      className="block hover:text-blue-300 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="relative mt-4">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-full text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <BiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
