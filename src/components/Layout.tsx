import type {ReactNode} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {SvgSprite} from "./global/SvgSprite";

const Layout = ({children}: {children: ReactNode}) => (
  <>
    <Header/>
    <main id="main" className="pt-60 pt-md-84">
      {children}
    </main>
    <Footer/>
    <SvgSprite/>
  </>
);

export default Layout;
