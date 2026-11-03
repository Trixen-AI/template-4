import {SITE_ORIGIN} from "@/lib/site";
import type {FrontPageACF} from "@/data/types";

export const Suite = ({data}: {data: FrontPageACF['suite']}) => {
  return (
    <section {...(data.id ? { id: data.id } : {})} className={`mt-2 mb-56 mb-md-110 mb-xl-160`}>
      <div className="container">
        <div className="row align-items-xl-end mt-xl-n24">
          <div className="col-15 offset-1 offset-md-2 col-md-12 pb-44 pb-lg-64 align-self-md-end col-xl-6">
            {data.title && (
              <h2 className="mb-24">{data.title}</h2>
            )}
            {data.text && (
              <p className="mb-0">{data.text}</p>
            )}
          </div>
          <div className="d-none d-xl-block offset-xl-6 col-xl-1">
            <div className="cell bg-gray-100 cell-border-gray-200 mb-2"></div>
            <div className="cell no-border"></div>
          </div>
          <div className="d-none d-xl-block col-xl-1">
            <div className="cell bg-gray-100 cell-border-gray-200 y-n100 mb-4"></div>
            <div className="cell no-border"></div>
          </div>
          <div className="d-none d-md-block col-md-2 offset-md-2 offset-xl-0">
            <div className="cell bg-gray-100 cell-border-gray-200 d-xl-none"></div>
            <div className="cell bg-gray-100 cell-border-gray-200"></div>
          </div>
        </div>
        <div className="row">
          {data?.items && data?.items?.length > 0 && data.items.map( (item, index) => {
            return (
              <div className={`col-18 col-md-9 col-lg-6 mt-2`} key={index}>
                <div style={{minHeight : '328px'}} className={`position-relative cell-border-gray-200 bg-hover-gray-100 p-16 p-md-32 pt-24 p-md-24 py-md-28 px-xl-48 pb-xl-44 pt-xl-40 h-100`}>
                  <svg width={100} height={100} className="w-72px h-auto w-md-64px w-lg-72px w-xl-100px mb-32 mb-md-44 mb-xl-100 ms-md-n10 ms-xl-n14">
                    <use xlinkHref={`#icon-${item.icon}`} />
                  </svg>
                  <div className="ps-8 ps-md-0">
                    <h3 className="h4 mb-16 mb-md-20 d-flex align-items-center">
                      {(item.link?.url && item.link?.url !== '#') && (
                        <>
                          <a href={`${SITE_ORIGIN}${item.link.url}`} className={`text-black text-decoration-none stretched-link`}>
                            {item.title}
                          </a>
                          <svg className={`ms-10 ms-md-12 w-md-24px h-auto`} width="16" height="16">
                            <use xlinkHref="#icon-round-arrow-r"></use>
                          </svg>
                        </>
                      )}
                      {(!item.link?.url || item.link?.url === '#') && (
                        <>{item.title}</>
                      )}

                    </h3>
                    <p className="mb-0 text-prewrap">{item.text}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
