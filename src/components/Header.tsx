import Nav from "react-bootstrap/Nav";

import {OffCanvasMenu} from "./OffCanvasMenu";
import {Logo} from "./Logo";
import {Button} from "./global/Button";
import {MenuDesktop} from "./MenuDesktop";
import {globalContact as contact} from "@/data/content";
import {SITE_ORIGIN} from "@/lib/site";

export const Header = () => (
  <header className="header py-16 py-md-20 py-lg-0 position-fixed bg-white">
    <a
      className="visually-hidden-focusable btn position-absolute btn-primary"
      href="#main">
      Skip to content
    </a>
    <div className="container">
      <div className="row justify-content-between align-items-center align-items-lg-stretch">
        <div className="col py-lg-28 align-self-center">
          <a aria-label="Home Page" className="ms-10 ms-lg-28 header-logo" href={`${SITE_ORIGIN}/`}>
            <Logo/>
          </a>
        </div>
        <div className="col d-flex justify-content-end">
          <Nav className="p-0 navbar navbar-expand-lg d-none d-lg-flex py-lg-8 me-80 me-xl-110 desktop-nav">
            <MenuDesktop menuName='DESKTOP_NAV' />
          </Nav>

          {contact.url ? (
            <Button
              url={contact.url}
              title={contact.title}
              external={contact.target === '_blank'}
              classes="d-none d-lg-flex"
            />
          ) : null}
          <OffCanvasMenu />
        </div>
      </div>
    </div>
  </header>
);
