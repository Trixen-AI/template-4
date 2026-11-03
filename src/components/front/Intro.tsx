import {useEffect, useRef} from 'react';
import gsap from "gsap";
import bgImage from '@/assets/rif-hero.png';
import {Button} from "../global/Button";
import type {FrontPageACF} from "@/data/types";

export const Intro = ({data, about}: {data: FrontPageACF['intro']; about: FrontPageACF['about']}) => {
  const GridOverlay = useRef<SVGGElement>(null);
  const GridOverlayMd = useRef<SVGGElement>(null);
  const GridOverlayLg = useRef<SVGGElement>(null);

  useEffect(() => {
    // Covering cells fade out one by one in random order (0.5s spread), revealing the hero image.
    const tweens = [GridOverlay, GridOverlayMd, GridOverlayLg].flatMap((overlayRef) => {
      if (overlayRef.current && overlayRef.current.children?.length > 0) {
        return [gsap.to(overlayRef.current.children, {
          delay: 0.1, opacity: 0, duration: 0.01, ease: 'none', stagger: {
            from: "random",
            amount: 0.5
          }
        })];
      }
      return [];
    });
    return () => tweens.forEach((t) => t.kill());
  }, []);

  return (
    <section {...(data.id ? { id: data.id } : {})} className="pt-16 pt-md-24 pt-lg-0 mb-110 mb-md-160">
      <div className="container">
        <div className="row align-items-lg-center">
          <div className="col-16 col-md-14 col-lg-8 col-xxl-7 offset-lg-0 offset-1 position-relative z-1 px-lg-28">
            <h1 className="intro-title mb-16 mb-md-32 mb-xxl-64 zg-front-intro-title">
              {data.titlepart1} <svg className={`text-primary`} width="54" height="54"><use xlinkHref="#icon-round-arrow-r" /></svg> {data.titlepart2}
              {/*<svg width="54" height="54"><use xlinkHref="#icon-double-arrows" /></svg>*/}
            </h1>

            {data.text && (
              <p className="text-medium mb-16 mb-md-32 mb-xxl-64">{data.text}</p>
            )}
            {about.link?.url && (
              <Button
                title={about.link.title}
                url={about.link.url}
                target={about.link.target}
              />
            )}
          </div>
          <div className={`col-18 col-lg-10 offset-xxl-1 position-relative z-0 ${about?.link?.url ? 'mt-n48 mt-lg-0' : ''}`}>
            <div className="zg-front-intro" style={{backgroundImage: `url(${bgImage})`}}>
              <div className="m-n2 my-lg-0">
                <svg className={`d-block w-100 h-auto d-md-none cell-border-white`} width="332" height="387" viewBox="0 0 332 387" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <g>
                      <rect x="2" y="1" width="54" height="54" fill="white" stroke="#fff" strokeWidth="2"/>
                      <rect x="57" y="1" width="54" height="54" fill="white" stroke="#fff" strokeWidth="2"/>
                      <rect x="112" y="1" width="54" height="54" fill="white" stroke="#fff" strokeWidth="2"/>
                      <rect x="167" y="1" width="54" height="54" fill="white" stroke="#fff" strokeWidth="2"/>
                      <rect x="221" y="1" width="55" height="55" fill="#4B5CF0" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="276" y="1" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="2" y="57" width="53" height="53" fill="white" stroke="#fff" strokeWidth="2"/>
                      <rect x="57" y="57" width="53" height="53" fill="white" stroke="#fff" strokeWidth="2"/>
                      <rect x="112" y="57" width="53" height="53" fill="white" stroke="#fff" strokeWidth="2"/>
                      <rect x="167" y="57" width="53" height="53" fill="white" stroke="#fff" strokeWidth="2"/>
                      <rect x="221" y="56" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="276" y="56" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="111" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="56" y="111" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="111" y="111" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="166" y="111" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="221" y="111" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="276" y="111" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="166" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="56" y="166" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="111" y="166" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="166" y="166" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="221" y="166" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="276" y="166" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="221" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="56" y="221" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="111" y="221" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="166" y="221" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="221" y="221" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="276" y="221" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="276" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="56" y="276" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="111" y="276" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="166" y="276" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="2" y="333" width="55" height="55" fill="white" stroke="#fff" strokeWidth="2"/>
                      <rect x="57" y="333" width="55" height="55" fill="white" stroke="#fff" strokeWidth="2"/>
                      <rect x="111" y="331" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="166" y="331" width="55" height="55" stroke="#F0EBE6" strokeWidth="2"/>
                      <g>
                        <rect x="221" y="276" width="110" height="110" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                        <g>
                          <path
                                d="M253.92 302.48L267.641 302.48C271.794 302.48 275.327 303.959 278.245 306.916C281.163 309.874 282.619 313.413 282.619 317.532L282.619 350.489L294.768 338.288L298.08 341.616L280.258 359.52L262.437 341.616L265.749 338.288L277.893 350.489L277.893 317.532C277.893 314.68 276.894 312.251 274.896 310.244C272.898 308.237 270.48 307.233 267.641 307.233L253.92 307.233L253.92 302.48Z"
                                fill="#4B5CF0"/>
                        </g>
                      </g>
                    </g>
                    <g ref={GridOverlay}>
                      <rect x="221" y="1" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="276" y="1" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="221" y="56" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="276" y="56" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="111" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="56" y="111" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="111" y="111" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="166" y="111" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="221" y="111" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="276" y="111" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="166" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="56" y="166" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="111" y="166" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="166" y="166" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="221" y="166" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="276" y="166" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="221" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="56" y="221" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="111" y="221" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="166" y="221" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="221" y="221" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="276" y="221" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="276" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="56" y="276" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="111" y="276" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="166" y="276" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="111" y="331" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="166" y="331" width="55" height="55" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="221" y="276" width="110" height="110" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                    </g>
                  </g>
                </svg>

                <svg className={`d-block w-100 h-auto d-none d-md-block d-lg-none cell-border-white`} width="740" height="576" viewBox="0 0 740 576" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <g>
                      <rect x="2" y="1" width="82" height="82" fill="white" stroke="#fff" strokeWidth="2"/>
                      <rect x="84" y="1" width="82" height="82" fill="white" stroke="#fff" strokeWidth="2"/>
                      <rect x="166" y="1" width="82" height="82" fill="white" stroke="#fff" strokeWidth="2"/>
                      <rect x="248" y="1" width="82" height="82" fill="white" stroke="#fff" strokeWidth="2"/>
                      <rect x="329" y="1" width="82" height="82" fill="#4B5CF0" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="411" y="1" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="493" y="1" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="575" y="1" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="657" y="1" width="82" height="82" fill="#F0EBE6" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="2" y="84" width="82" height="82" fill="white" stroke="#fff" strokeWidth="2"/>
                      <rect x="84" y="84" width="82" height="82" fill="white" stroke="#fff" strokeWidth="2"/>
                      <rect x="166" y="84" width="82" height="82" fill="white" stroke="#fff" strokeWidth="2"/>
                      <rect x="248" y="84" width="80" height="80" fill="white" stroke="#fff" strokeWidth="2"/>
                      <rect x="411" y="83" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="493" y="83" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="657" y="83" width="82" height="82" fill="#F0EBE6" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="165" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="83" y="165" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="165" y="165" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="247" y="165" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="329" y="165" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="411" y="165" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="493" y="165" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="575" y="165" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="657" y="165" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="247" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="83" y="247" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="165" y="247" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="247" y="247" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="329" y="247" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="411" y="247" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="493" y="247" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="575" y="247" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="657" y="247" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="329" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="83" y="329" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="165" y="329" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="247" y="329" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="329" y="329" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="411" y="329" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="493" y="329" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="575" y="329" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="657" y="329" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="411" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="83" y="411" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="165" y="411" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="247" y="411" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="329" y="411" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="411" y="411" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="493" y="411" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="2" y="494" width="82" height="82" fill="white"/>
                      <rect x="84" y="494" width="82" height="82" fill="white"/>
                      <rect x="166" y="494" width="82" height="82" fill="white"/>
                      <g>
                        <rect x="575" y="411" width="164" height="164" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                        <g>
                          <path
                                d="M622.44 448.36L643.917 448.36C650.417 448.36 655.947 450.675 660.514 455.304C665.081 459.933 667.36 465.472 667.36 471.92L667.36 523.504L686.376 504.408L691.56 509.616L663.665 537.64L635.77 509.616L640.954 504.408L659.962 523.504L659.962 471.92C659.962 467.456 658.399 463.653 655.272 460.512C652.145 457.371 648.36 455.8 643.917 455.8L622.44 455.8L622.44 448.36Z"
                                fill="#4B5CF0"/>
                        </g>
                      </g>
                    </g>
                    <g ref={GridOverlayMd}>
                      <rect x="329" y="1" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="411" y="1" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="493" y="1" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="575" y="1" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="657" y="1" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="330" y="84" width="80" height="80" fill="white"/>
                      <rect x="411" y="83" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="493" y="83" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="576" y="84" width="80" height="80" fill="white"/>
                      <rect x="657" y="83" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="329" y="165" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="411" y="165" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="493" y="165" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="575" y="165" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="657" y="165" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="247" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="83" y="247" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="165" y="247" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="247" y="247" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="329" y="247" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="411" y="247" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="493" y="247" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="575" y="247" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="657" y="247" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="329" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="83" y="329" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="165" y="329" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="247" y="329" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="329" y="329" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="411" y="329" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="493" y="329" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="575" y="329" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="657" y="329" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="411" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="83" y="411" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="165" y="411" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="247" y="411" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="329" y="411" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="411" y="411" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="493" y="411" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="247" y="493" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="329" y="493" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="411" y="493" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="493" y="493" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="575" y="411" width="164" height="164" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                    </g>
                  </g>
                </svg>

                <svg className={`d-block w-100 h-auto d-none d-lg-block cell-border-white`} width="792" height="792" viewBox="0 0 792 792" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <g>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 160 2)" fill="#fff" stroke="#fff" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 318 2)" fill="#4B5CF0" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 476 2)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 634 2)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 792 2)" fill="#F0EBE6" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 160 160)" fill="#fff" stroke="#fff" strokeWidth="0"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 318 160)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 476 160)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 634 160)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 792 160)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 318 318)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 476 318)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 634 318)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 792 318)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 160 476)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 318 476)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 476 476)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 634 476)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 792 476)" fill="#F0EBE6" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 160 634)" fill="#fff" stroke="#fff" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 318 634)" fill="#fff" stroke="#fff" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 476 634)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 634 634)" stroke="#F0EBE6" strokeWidth="2"/>
                      <g>
                        <rect x="633" y="633" width="158" height="158" fill="#fff" stroke="#F0EBE6" strokeWidth="2"/>
                        <g>
                          <path
                            d="M677.44 667.36h21.477c6.5 0 12.03 2.315 16.597 6.944 4.567 4.629 6.846 10.168 6.846 16.616v51.584l19.016-19.096 5.184 5.208-27.895 28.024-27.895-28.024 5.184-5.208 19.008 19.096V690.92c0-4.464-1.563-8.267-4.69-11.408-3.127-3.141-6.912-4.712-11.355-4.712H677.44v-7.44Z"
                            fill="#4B5CF0"/>
                        </g>
                      </g>
                    </g>
                    <g fill="#fff" ref={GridOverlayLg}>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 318 2)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 476 2)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 634 2)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 792 2)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 318 160)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 476 160)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 634 160)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 792 160)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 160 318)" stroke="#F0EBE6" strokeWidth="2" />
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 318 318)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 476 318)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 634 318)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 792 318)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 160 476)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 318 476)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 476 476)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 634 476)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 792 476)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 476 634)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 634 634)" stroke="#F0EBE6" strokeWidth="2"/>
                      <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 792 634)" stroke="#F0EBE6" strokeWidth="2"/>
                    </g>
                  </g>
                </svg>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
