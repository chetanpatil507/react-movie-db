import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
} from "reactstrap";

const Header = ({ userFunc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const search = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md" light>
        <NavbarBrand href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
            alt=""
            className="main__logo"
          />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem className="nav__items">
              <form className="d-flex ">
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchValue}
                  onChange={search}
                />
                <Link to={`/`}>
                  <button
                    className="btn btn-outline-success nav__btn"
                    type="button"
                    onClick={() => {
                      userFunc(searchValue);
                    }}
                  >
                    SEARCh
                  </button>
                </Link>
              </form>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
