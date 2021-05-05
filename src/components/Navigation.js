import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="Navigation">
    <Link class="nav-link" to="/">
    HOME
    </Link>
    <Link class="nav-link" to="/about">
    ABOUT
    </Link>
    <Link class="nav-link" to="/skills">
    SKILLS
    </Link>
    <Link class="nav-link" to="/hire">
    HIRE
    </Link>
    </div>
  );
}
export default withRouter(Navigation);
