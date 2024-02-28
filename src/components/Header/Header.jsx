import React from "react";
import Container from "../Container/Container";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import { useNavigate } from "react-router-dom";
import { UseSelector } from "react-redux";

const Header = () => {
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
      name: "All posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add posts",
      slug: "/add-posts",
      active: authStatus,
    },
  ];

  return;
  <header className="py-3 shadow bg-gray-500">
    <Container>
      <nav className="flex">
        <div className="mr-4">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <ul className="flex ml-auto">
          {navItems.map((item) =>
            item.actve ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn/>
            </li>
          )}
        </ul>
      </nav>
    </Container>
  </header>;
};

export default Header;
