import type {FrontPageACF} from "@/data/types";

export const Why = ({data}: {data: FrontPageACF['why']}) => {
  return (
    <section {...(data.id ? { id: data.id } : {})} className="mt-md-n24">
      <div className="container">
        <div className="row mb-2">
          <div className="col-15 offset-1 col-md-12 offset-md-2 col-lg-9 offset-lg-4 offset-xl-7 col-xl-7 pb-44 pb-lg-64">
            {data.title && (
              <h2 className="mb-24">{data.title}</h2>
            )}
            {data.text && (
              <p className="mb-0">{data.text}</p>
            )}
          </div>

          <div className="col-md-2 d-none d-md-block align-self-md-end offset-md-2 order-lg-first offset-lg-0">
            <div className="cell cell-border-gray-200 bg-gray-200"></div>
          </div>
          {data?.items && data?.items?.length > 0 && data.items.map( (item, index) => {
            return (
              <div className={`col-18 col-md-9 col-lg-6 mt-2`} key={index}>
                <div className={`zg-why-card bg-gray-100 cell-border-gray-200 px-16 pt-24 pb-32 px-md-24 py-md-44 px-xl-44 pt-xl-72 h-100`}>
                  <h3 className="h4 mb-20 mb-md-32">{item.title}</h3>
                  <p className="mb-0 text-prewrap">{item.text}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="row">
          <div className="col-2 mb-2 d-none d-md-none offset-16">
            <div className="cell"></div>
          </div>
          <div className="col-3 offset-9 col-md-2 mb-2 offset-md-9 offset-lg-10 offset-xl-10">
            <div className="cell cell-border-gray-200"></div>
          </div>
          <div className="col-3 offset-15 col-md-2 offset-md-14 d-lg-none">
            <div className="cell cell-border-gray-200 bg-gray-100"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
