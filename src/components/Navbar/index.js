import React, { useState } from "react";
import "./index.css";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchData } from "../../features/searchSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const navigateToSearch = () => {
    dispatch(fetchData(input));
    navigate(`/search/${input}`, { replace: true });
  };

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg">
        <Link to="/" className="nav-link mx-3">
          <h3 className="fw-bold">Movie API</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse mx-4"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                to="/saved"
                className="nav-link col2-item m-auto"
                style={({ isActive }) => ({
                  color: isActive ? "#DE6C83" : "black",
                })}
              >
                Favorite
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link col2-item m-auto"
                style={({ isActive }) => ({
                  color: isActive ? "#DE6C83" : "black",
                })}
              >
                About
              </NavLink>
            </li>
          </ul>
          <div className="d-flex cari my-2">
            <input
              className="mx-3 my-2"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search . . ."
            ></input>
            <button onClick={navigateToSearch} style={{height:10}}>
            <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
