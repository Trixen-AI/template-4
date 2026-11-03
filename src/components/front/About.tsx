import type {FrontPageACF} from "@/data/types";

export const About = ({data}: {data: FrontPageACF['about']}) => {
  return (
    <section {...(data.id ? { id: data.id } : {})} className="mb-110 mb-md-80 mb-lg-160">
      <div className="container">
        <div className="row align-items-xl-end">
          <div className="col-16 offset-1 offset-md-2 col-md-11 col-xl-7 mb-xl-130">
            {data.title && (
              <h2 className="mb-32 mb-md-44 mb-xl-0">{data.title}</h2>
            )}
          </div>
          <div className="col-16 offset-1 offset-md-2 col-md-11 mb-44 mb-md-100 col-xl-6 offset-xl-1 mb-xl-130">
            {data.text && (
              <p className="mb-0">{data.text}</p>
            )}
          </div>
          {data?.items && data?.items?.length > 0 && data.items.map( (item, index) => {
            return (
              <div className="col-18 col-md-9 mt-2" key={index}>
                <div className="px-16 pt-16 pb-32 pt-md-32 px-md-24 px-xl-32 pb-md-44 h-100 cell-border-gray-200" >
                  <svg width={64} height={64} className="w-md-100px h-auto d-block mb-24 mb-md-44 mb-xl-100">
                    <use xlinkHref={`#icon-${item.icon}`} />
                  </svg>
                  <div className="px-14">
                    <h3 className="h4 mb-16 mb-md-20">{item.title}</h3>
                    <p className="mb-0">{item.text}</p>
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
