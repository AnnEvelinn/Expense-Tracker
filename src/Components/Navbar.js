import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import { use, useEffect } from "react";
function Navbar( ){
   const location=useLocation();
    return (

     <nav className="navbar ">
      <h1 className="Logo">Expense Tracker&nbsp;&nbsp;</h1>
      
     <ul className="nav-links">   
        <li className={location.pathname==="/"?"active":""}>
      <Link to={"/"}>📊Dashboard</Link>

        </li>
        <li className={location.pathname==="/transaction"?"active":""}>
      <Link to={"/transaction"}>💸Transaction</Link>

        </li>
        <li className={location.pathname==="/report"?"active":""}>
      <Link to={"/report"}>💼Report</Link>

        </li>
        <li className={location.pathname==="/getquote"?"active":""}>
      <Link to={"/"}>💡Get Quote</Link>

        </li>
        <li className={location.pathname==="/reset"?"active":""}>
      <Link to={"/"}>🔁Reset</Link>

        </li>
     </ul>

     </nav>
);

}
export default  Navbar;