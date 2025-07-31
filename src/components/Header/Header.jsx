
import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { close, menu } from "../../assets";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-5 shadow bg-gray-900">
      <Container>
        <nav className=" text-white">
          <div className="lg:flex">
            <div className="flex flex-row mr-2 mt-2">
              <Link to="/">
                <Logo className="w-[60px]" />
              </Link>
              <div className="lg:hidden flex flex-1 justify-end items-center">
                <img
                  src={mobileMenu ? close : menu}
                  alt="MenuBar"
                  className="w-[28px] h-[28px] object-contain"
                  onClick={() => setMobileMenu((prev) => !prev)}
                />
              </div>
            </div>
            {mobileMenu && (
              <ul className="flex ml-auto flex-col lg:flex-row">
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.name}>
                      <button
                        onClick={() => {
                          navigate(item.slug);
                          setMobileMenu(!mobileMenu);
                        }}
                        className="inline-block px-4 py-2 font-bold uppercase rounded-full transition duration-200 hover:bg-gradient-to-r from-blue-400 via-cyan-600 to-teal-400 hover:text-white"
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null
                )}
                {authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )}
              </ul>
            )}

            {/* Desktop Menu  */}

            <ul className="lg:flex mt-3 hidden ml-auto flex-row">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="inline-block px-4 py-2 font-bold uppercase rounded-full transition duration-200 hover:bg-gradient-to-r from-blue-400 via-cyan-600 to-teal-400 hover:text-white"
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
