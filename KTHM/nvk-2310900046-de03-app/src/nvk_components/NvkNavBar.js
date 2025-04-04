import React from 'react';
import { Link } from "react-router-dom";


function NvkNavBar() {
  return (
    <nav className="NvkNavBar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/nvk-student">nvk-student</Link>
        </li>
        <li>
          <Link to="/nvk-student-add">nvk-student-add</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NvkNavBar;