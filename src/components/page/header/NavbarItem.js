import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({ title, link }) => {
  return <Link to={link}>{title}</Link>;
};

export default NavbarItem;
