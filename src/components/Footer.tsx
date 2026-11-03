import styled from "styled-components";
import {Logo} from "./Logo";

import {Socials} from "./global/Socials";
import {FooterNav} from "./global/FooterNav";
import Link from "./global/Link";
import {FooterLineNav} from "./global/FooterLineNav";
import {footer as footerOpts, globalContact as contactLink} from "@/data/content";

const SocialsWrap = styled.div`
  @media (min-width: 1200px) {
    aspect-ratio: 314/155;
  }
`
const YEAR = String(new Date().getFullYear());

export const Footer = () => {
  return (
    <footer className="pt-80 pt-lg-56 pb-32 pb-lg-40">
      <div className="container">
        <div className="row">
          <div className="col-3 col-md-2 mb-2">
            <div className="cell bg-gray-100"></div>
          </div>
          <div className="col-3 col-md-2 mb-2">
            <div className="cell bg-gray-100"></div>
          </div>
          <div className="col-12 col-md-14"></div>
          <div className="col-3 col-md-2">
            <div className="cell bg-gray-100">
              <div className="d-flex align-items-center justify-content-center p-6 p-md-10"><Logo /></div>
            </div>
          </div>

          <div className="col-3 offset-15 d-md-none">
            <div className="cell"></div>
          </div>

          <div className="col-18 col-xl-8 offset-xl-2 footer-grid-bg order-md-2 mt-md-80 mt-xl-60 mb-xl-60">
            <div className="row">
              <div className="col-9 col-md-5 col-lg-3 col-xl-5 d-flex flex-column d-md-block align-items-start">
                <FooterNav menuName="FOOTER_NAV1" className="mb-60 mb-md-0" />
                {contactLink.url && (
                  <Link className="mt-auto btn d-md-none" to={contactLink.url} target={contactLink.target}>{contactLink.title}</Link>
                )}
              </div>
              <div className="col-md-5 col-lg-3 offset-lg-2 col-xl-4 offset-xl-0 d-none d-md-block">
                <FooterNav menuName="FOOTER_NAV2"  className="ms-xl-n16"/>
              </div>
              <div className="col-9 col-md-4 col-lg-4 offset-lg-2 col-xl-5 offset-xl-0 offset-md-0 d-flex flex-column">
                <FooterNav menuName="FOOTER_NAV2"  className="mb-60 mb-lg-0 d-md-none"/>
                <FooterNav menuName="FOOTER_NAV3" className="mb-0" />
              </div>
              <div className="col-md-4 col-lg-3 offset-lg-1 col-xl-4 offset-xl-0 offset-md-0 d-none d-md-flex flex-column align-items-end">
                {contactLink.url && (
                  <Link className="btn text-uppercase d-none d-md-block mt-n12" to={contactLink.url} target={contactLink.target}>{contactLink.title}</Link>
                )}
              </div>
            </div>
          </div>

          <div className="col-18 order-md-2 mb-md-32 d-xl-none">
            <div className="row">
              <div className="col-3 col-md-2 offset-15 offset-md-2 d-xl-none mb-2">
                <div className="cell bg-gray-100"></div>
              </div>
              <div className="col-md-2 d-none d-md-block d-xl-none order-md-2">
                <div className="cell bg-gray-100 y-n100"></div>
              </div>
            </div>
          </div>

          <div className="col-2 d-none d-xl-block order-xl-4">
            <div className="cell bg-gray-100 y-100"></div>
          </div>
          <div className="col-18 col-md-8 col-lg-6 col-xl-4 offset-xl-0 mb-32 mb-md-0 offset-md-8 offset-lg-10 order-xl-4 align-self-xl-start">
            <SocialsWrap className="bg-primary px-16 py-32 py-md-16 py-xl-32 h-100 d-flex align-items-center justify-content-center">
              <Socials className="d-flex align-items-center justify-content-center " type="icon" itemClassName="text-white mx-13 opacity-hover-06" />
            </SocialsWrap>
          </div>

          <div className="col-18 col-md-12 col-xl-9 offset-xl-4 order-md-2 order-xl-4">
            <FooterLineNav menuName="FOOTER_BOTTOM" className="justify-content-between justify-content-md-start" />
          </div>

          <div className="col-18 col-md-6 col-xl-4 mt-13 mt-md-0 order-md-2 order-xl-4">
            {footerOpts.copyright && (
              <p className="mb-0 text-seconadry text-md-end">
                {footerOpts.copyright.replace('[year]', YEAR)}
              </p>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
