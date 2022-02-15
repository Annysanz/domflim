import React from "react";
import Base from "../components/login/Base";
import { Link } from "react-router-dom";

const Logged = () => {
  return (
    <>
      <Link to="/Logged">
        <Base />
      </Link>
    </>
  );
};

export default Logged;
