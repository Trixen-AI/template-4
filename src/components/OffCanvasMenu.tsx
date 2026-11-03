import {useState} from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";

import {MenuMob} from "./MenuMob";
import {Socials} from "./global/Socials";

export const OffCanvasMenu = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow((s) => !s);
  const closeOffcanvas = () => setShow(false);

  return (
    <>
      <button
        className={`p-0 d-inline-flex d-lg-none justify-content-end zg-burger ms-auto me-10 me-md-18 ${show ? 'close' : ''}`}
        type="button"
        aria-label="menu toggle"
        onClick={handleToggle}>
        <span></span>
      </button>
      <Offcanvas
        className="d-lg-none container bg-white"
        show={show}
        scroll={false}
        backdrop={false}
        placement="top">
        <Offcanvas.Body className="bg-primary pt-24 px-18 px-md-46 pt-md-46 pb-80 d-flex flex-column justify-content-between">
          <Nav className={`w-100 align-self-stretch`} >
            <MenuMob menuName='MOBILE_NAV' onLinkClick={closeOffcanvas}/>
          </Nav>

          <Socials className="d-flex align-items-center flex-wrap" itemClassName="me-40 me-md-24 mt-16" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
