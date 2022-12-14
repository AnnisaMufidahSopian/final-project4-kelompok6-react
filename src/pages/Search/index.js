import React from "react";
import { Outlet } from "react-router-dom";

function Cari() {
  return (
    <>
    <center>
      <h1>Your Movie Search</h1>
      <hr width="80%" />
    </center>
        <Outlet />
    </>
  );
}

export default Cari;
