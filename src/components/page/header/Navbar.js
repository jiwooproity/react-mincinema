import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavbarItem from "./NavbarItem";

const NavbarContainer = styled.div`
  width: 100%;

  padding: 15px 20px;

  position: fixed;

  z-index: 1;

  background-color: ${({ scroll }) => (scroll ? "rgba(0, 0, 0, 0.9)" : "")};

  backdrop-filter: ${({ scroll }) => (scroll ? "blur(10px)" : null)};

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
  }

  transition: background-color 0.5s ease, backdrop-filter 0.5s ease;
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarMenu = styled.ul`
  display: flex;
`;

const NavbarList = styled.li`
  list-style: none;

  padding: 0px 0px 0px 5px;

  a {
    font-size: 15px;
    text-decoration: none;

    color: white;

    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }

  transition: font-size 0.2s ease;
`;

const NavbarLogo = styled.h1`
  font-size: 30px;
  font-weight: 700;

  margin-right: 10px;

  color: white;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  transition: font-size 0.2s ease;
`;

const MenuItem = [
  {
    title: "홈",
    link: "/home",
  },
  {
    title: "시리즈",
    link: "/series",
  },
  {
    title: "영화",
    link: "/movie",
  },
];

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0 ? true : false);
    });
  }, [scroll]);

  return (
    <NavbarContainer scroll={scroll}>
      <NavbarWrapper>
        <NavbarLogo>MIN CINEMA</NavbarLogo>
        <NavbarMenu>
          {MenuItem.map((item, index) => (
            <NavbarList key={index}>
              <NavbarItem title={item.title} link={item.link} />
            </NavbarList>
          ))}
        </NavbarMenu>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
