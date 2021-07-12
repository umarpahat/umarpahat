// import {
//   faChevronDown,
//   faChevronRight,
//   faChevronUp,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";
// import { Button, Dropdown, DropdownButton, Nav, Navbar } from "react-bootstrap";
// import { Link, useHistory } from "react-router-dom";
// //import "./MainNav.css";
// import Logo from "../component/img/Logo.png";

// function Header() {
//   var history = useHistory();
//   var path = history.location.pathname;

//   return (
//     <>
//       <Navbar className={"topNav header-shadow"} expand="lg">
//         <Link to="/">
//           <Navbar.Brand href="#home" className="mr-auto logosty moblogosty">
//             <img src={Logo} className="logosize img-fluid "></img>
//           </Navbar.Brand>
//         </Link>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto"></Nav>

//           <DropdownButton title="Services" className="navteaxt1 Btndrop mr-2">
//             <DropdownButton
//               onClick={() => {
//                 history.push("/pre-approved-loan");
//               }}
//               id={`dropdown-button-drop-right open1 `}
//               drop={"right"}
//               title="Personal Loan"
//               className="navteaxt1 Btndrop"
//             >
//               <Dropdown.Item as="button">EMI Loan</Dropdown.Item>

//               <Dropdown.Item as="button">Short term Loan</Dropdown.Item>
//             </DropdownButton>

//             <Link to="/pre-approved-loan">
//               <Dropdown.Item as="button">Preapproved loan</Dropdown.Item>
//             </Link>

//             <Link to="/pay-rent">
//               <Dropdown.Item as="button">PayRent</Dropdown.Item>
//             </Link>
//             <Dropdown.Item as="button">Gold</Dropdown.Item>
//             <Link to="/career-advisory">
//               <Dropdown.Item as="button">Credit Advisory</Dropdown.Item>
//             </Link>
//           </DropdownButton>
//           <div>
//             <div
//               onClick={() => {
//                 history.push("/pre-approved-loan");
//               }}
//               id={`dropdown-button-drop-right open1 `}
//               drop={"right"}
//               title="Personal Loan"
//               className="navteaxt1 "
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               {/* <FontAwesomeIcon icon={faChevronDown} /> */}
//             </div>
//           </div>

//           <div className="centerdotsclass">
//             <Link
//               to="/about-us"
//               className={`navteaxt nav-link mr-2  ${
//                 path === "/about-us" && "avtivenav"
//               }`}
//             >
//               About Us
//             </Link>
//             {path === "/about-us" && <p className={"blowDots"}></p>}
//           </div>

//           <div className="centerdotsclass">
//             <div>
//               <Link
//                 to="/contact-us"
//                 className={`navteaxt nav-link mr-2  ${
//                   path === "/contact" && "avtivenav "
//                 }`}
//               >
//                 Contact Us
//               </Link>
//             </div>
//             <div>
//               {path === "/contact-us" && <p className={"blowDots"}></p>}
//             </div>
//           </div>

//           {path === "/pay-rent" ? (
//             <Button variant="primary" className="btnpay">
//               Login
//             </Button>
//           ) : (
//             <Link to={"/pay-rent"}>
//               <Button variant="primary" className="btnpay">
//                 Pay Rent
//               </Button>
//             </Link>
//           )}

//           <Button variant="outline-secondary" className="btntopdownlod">
//             Download App
//           </Button>
//         </Navbar.Collapse>
//       </Navbar>
//     </>
//   );
// }

// export default Header;
