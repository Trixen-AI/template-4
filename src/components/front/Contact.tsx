import {Button} from "../global/Button";
import type {FrontPageACF} from "@/data/types";

export const Contact = ({data}: {data: FrontPageACF['contact']}) => {
  return (
    <section {...(data.id ? { id: data.id } : {})}>
      <div className="container">
        <div className="row">
          <div className="col-15 col-md-12 col-xl-10 bg-gray-300 d-flex align-items-center py-10 px-24 ps-md-44 ps-xl-0 mb-2">
            <p className="h1 mb-0 offset-xl-4">
              {data.titlepart1}
            </p>
          </div>
          <div className="col-3 col-md-2 mb-2">
            <div className="cell bg-primary">
              <div className="d-flex align-items-center justify-content-center text-white d-flex align-items-center">
                <svg width={44} height={44} className="w-md-64px w-xl-144px h-auto">
                  <use xlinkHref="#icon-back-arrow-alt" />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-10 col-xl-8 bg-gray-300 d-flex align-items-center py-10 px-24 ps-md-44 ps-xl-0 py-xl-44 mb-2 order-md-2 align-self-xl-start">
            <p className="h1 mb-0 offset-xl-5">
              {data.titlepart2}
            </p>
          </div>
          <div className="col-3 d-md-none mb-2 offset-1">
            <div className="cell bg-white">
            </div>
          </div>

          <div className="col-3 d-md-none mb-2">
            <div className="cell bg-gray-100">
            </div>
          </div>
          <div className="col-3 col-md-2 mb-2 offset-12 offset-md-2 offset-xl-4 order-md-1">
            <div className="cell bg-white">
              <div className="d-flex align-items-center justify-content-center d-flex align-items-center">
                <svg width={44} height={44} className="w-md-64px w-xl-144px h-auto">
                  <use xlinkHref="#icon-flyover" />
                </svg>
              </div>
            </div>
          </div>

          <div className="col-3 mb-2 d-md-none offset-3">
            <div className="cell bg-gray-100">
            </div>
          </div>

          <div className="col-3 col-md-2 mb-2 offset-9 offset-md-6 order-md-2 offset-xl-1 order-xl-3">
            <div className="cell bg-gray-300">
            </div>
          </div>

          <div className="col-18 col-md-8 col-xl-5 offset-md-9 offset-xl-2 mt-16 mt-md-56 mt-xl-80 order-md-2">
            {data.text && (
              <p className="mb-24 mb-md-40">{data.text}</p>
            )}
            {data.link?.url && (
              <Button
                title={data.link.title}
                url={data.link.url}
                target={data.link.target}
              />
            )}
          </div>
        </div>


      </div>
    </section>
  )
}
