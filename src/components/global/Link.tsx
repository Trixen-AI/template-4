import type {AnchorHTMLAttributes, ReactNode} from "react";
import {SITE_ORIGIN} from "@/lib/site";

const INTERNAL = /^\/(?!\/)/;

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "target"> & {
  to: string;
  target?: string | null;
  children?: ReactNode;
};

// Mirrors the source's Link: internal paths were Gatsby links (no target/rel), everything else a plain <a>.
const Link = ({children, to, target, ...other}: LinkProps) => {
  if (INTERNAL.test(to) && target !== "_blank") {
    return (
      <a href={`${SITE_ORIGIN}${to}`} {...other}>
        {children}
      </a>
    );
  }
  return (
    <a href={INTERNAL.test(to) ? `${SITE_ORIGIN}${to}` : to} {...other} target={target ?? undefined} rel={target === "_blank" ? "noopener" : undefined}>
      {children}
    </a>
  );
};

export default Link;
