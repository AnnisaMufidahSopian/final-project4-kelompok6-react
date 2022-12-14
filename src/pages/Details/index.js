import React from "react";
import { Outlet } from "react-router-dom";

function Details() {
  return (
    <>
    <center>
      <h1>Detail Movie</h1>
      <hr width="80%" />
    </center>
      <div className="container mt-5">
        <Outlet />
      </div>
    </>
  );
}

export default Details;
