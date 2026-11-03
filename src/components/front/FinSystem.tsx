import bgImage from '@/assets/fin-bg-2.jpg';
import type {FrontPageACF} from "@/data/types";

const charIndex = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export const FinSystem = ({data}: {data: FrontPageACF['finsystem']}) => {
  return (
    <section {...(data.id ? { id: data.id } : {})}>
      <div className="container">
        <div className="row">
          <div className="col-18 col-md-14 mb-md-2 col-xl-10">
            <div className="d-flex align-items-center px-18 pt-48 pb-40 py-md-32 ps-md-80 ps-xl-0 bg-white cell-border-gray-200 h-100">
              {data.title && (
                <h2 className="mb-0 text-prewrap offset-xl-3">{data.title}</h2>
              )}
            </div>
          </div>
          <div className="col-18 col-md-4 mb-2 col-xl-8">
            <div className="d-none d-md-block m-n2">
              <svg className={`d-block d-xl-none w-100 h-auto`} width="166" height="330" viewBox="0 0 166 330" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="82" height="82" fill="#4B5CF0" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="1" y="83" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="1" y="165" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="1" y="247" width="82" height="82" fill="#FAF8F7" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="83" y="1" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="83" y="83" width="82" height="82" fill="#4B5CF0" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="83" y="165" width="82" height="82" fill="#4B5CF0" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="83" y="247" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
              </svg>
              <svg className={`d-none d-xl-block w-100 h-auto`} width="634" height="476" viewBox="0 0 634 476" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 634 2)" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 476 2)" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 318 2)" fill="#4B5CF0" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 160 2)" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 634 160)" fill="#4B5CF0" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 476 160)" fill="#4B5CF0" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 318 160)" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 160 160)" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 634 318)" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 476 318)" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 318 318)" fill="#FAF8F7" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="1" y="-1" width="158" height="158" transform="matrix(-1 0 0 1 160 318)" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
              </svg>

            </div>

            <div className="row d-md-none">
              <div className="col">
                <div className="cell cell-border-gray-200 bg-gray-100"></div>
              </div>
              <div className="col">
                <div className="cell cell-border-gray-200 bg-white"></div>
              </div>
              <div className="col">
                <div className="cell cell-border-gray-200 bg-primary"></div>
              </div>
              <div className="col">
                <div className="cell cell-border-gray-200 bg-primary"></div>
              </div>
              <div className="col">
                <div className="cell cell-border-gray-200 bg-white"></div>
              </div>
              <div className="col">
                <div className="cell cell-border-gray-200 bg-white"></div>
              </div>
            </div>
          </div>

          {data?.items && data?.items?.length > 0 && data.items.map((item, index) => (
            <div className={`col-18 col-lg-6 mb-2 ${index < 2 ? 'col-md-9' :''}`} key={index}>
              <article className="zg-fin-card d-flex flex-column align-items-start justify-content-end cell-border-gray-200 px-24 py-32 h-100 position-relative px-xl-48">
                <span className="text-mono title-small mb-24 mb-md-32">{charIndex[index]}.</span>
                {item.title && (
                  <h3 className="h4 mb-16 mb-md-32">{item.title}</h3>
                )}
                {item.text && (
                  <p className="mb-auto" dangerouslySetInnerHTML={{__html:item.text}}></p>
                )}
                {item?.link?.url && (
                  <a href={item.link.url} className="mt-24 mt-lg-44 btn-text text-uppercase stretched-link" aria-label={item.title}>
                    Read more
                  </a>
                )}
              </article>
            </div>
          ))}


        </div>

        <div className="row mt-n2">
          <div className="col-18 col-md-10">
            <div className="bg-cover mx-n2" style={{backgroundSize: 'cover',backgroundImage:`url(${bgImage})`}}>
              <svg className={`d-block d-md-none w-100 h-auto`} width="494" height="248" viewBox="0 0 494 248" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="83" y="1" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="165" y="1" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="247" y="1" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="329" y="1" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="411" y="1" width="82" height="82" fill="#4B5CF0" stroke="#F0EBE6" strokeWidth="2"/>
                <path d="M424 70.7742V66.5161H480.774V70.7742H424ZM424 33.9484V30.1806L452.387 14L480.774 30.1806V33.9484H424ZM433.523 29.6903H471.277L452.413 18.9032L433.548 29.6903H433.523Z" fill="white"/>
                <path d="M429.109 59.8324C429.935 54.4388 432.413 49.9743 436.516 46.4388C440.619 42.9033 445.393 41.1485 450.838 41.1485C454.58 41.1485 458.013 42.0001 461.135 43.7033C464.258 45.4066 466.864 47.7033 468.877 50.542V41.1227H473.032V59.8065H454.348V55.6517H467.226C465.755 52.5549 463.561 50.0517 460.645 48.142C457.729 46.2324 454.477 45.2775 450.89 45.2775C446.58 45.2775 442.787 46.6453 439.484 49.4066C436.18 52.1678 434.142 55.6259 433.316 59.8065H429.084L429.109 59.8324Z" fill="white"/>
                <rect x="1" y="83" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="83" y="83" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="165" y="83" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="247" y="83" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="329" y="83" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="411" y="83" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="1" y="165" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="83" y="165" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="165" y="165" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="247" y="165" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="329" y="165" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="411" y="165" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
              </svg>


              <svg className={`d-none d-md-block d-lg-none w-100 h-auto`} width="412" height="248" viewBox="0 0 412 248" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="1" y="83" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="1" y="165" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="83" y="1" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="83" y="83" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="83" y="165" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="165" y="1" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="165" y="83" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="165" y="165" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="247" y="1" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="247" y="83" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="247" y="165" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="329" y="83" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="329" y="165" width="82" height="82" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="329" y="1" width="82" height="82" fill="#4B5CF0" stroke="#F0EBE6" strokeWidth="2"/>
                <path d="M342 70.7742V66.5161H398.774V70.7742H342ZM342 33.9484V30.1806L370.387 14L398.774 30.1806V33.9484H342ZM351.523 29.6903H389.277L370.413 18.9032L351.548 29.6903H351.523Z" fill="white"/>
                <path d="M347.109 59.8324C347.935 54.4388 350.413 49.9743 354.516 46.4388C358.619 42.9033 363.393 41.1485 368.838 41.1485C372.58 41.1485 376.013 42.0001 379.135 43.7033C382.258 45.4066 384.864 47.7033 386.877 50.542V41.1227H391.032V59.8065H372.348V55.6517H385.226C383.755 52.5549 381.561 50.0517 378.645 48.142C375.729 46.2324 372.477 45.2775 368.89 45.2775C364.58 45.2775 360.787 46.6453 357.484 49.4066C354.18 52.1678 352.142 55.6259 351.316 59.8065H347.084L347.109 59.8324Z" fill="white"/>
              </svg>

              <svg className={`d-none d-lg-block w-100 h-auto`} width="792" height="318" viewBox="0 0 792 318" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="#F0EBE6" strokeWidth="2" d="M1 1h158v158H1z"/>
                <path stroke="#F0EBE6" strokeWidth="2" d="M159 1h158v158H159z"/>
                <path stroke="#F0EBE6" strokeWidth="2" d="M317 1h158v158H317z"/>
                <path stroke="#F0EBE6" strokeWidth="2" d="M475 1h158v158H475z"/>
                <path fill="#4B5CF0" stroke="#F0EBE6" strokeWidth="2" d="M633 1h158v158H633z"/>
                <path d="M661.6 131.794v-7.665h102.194v7.665H661.6Zm0-66.2869v-6.782L712.697 29.6l51.097 29.1251v6.782H661.6Zm17.141-7.6645h67.958l-33.956-19.4168-33.956 19.4168h-.046Z" fill="#fff"/>
                <path d="M670.797 112.098c1.486-9.708 5.946-17.7443 13.332-24.1082 7.385-6.3639 15.979-9.5226 25.78-9.5226 6.736 0 12.914 1.5329 18.534 4.5987 5.621 3.0658 10.313 7.2 13.936 12.3097V78.4208h7.479v33.6312h-33.631v-7.479h23.179c-2.648-5.5742-6.596-10.08-11.845-13.5174-5.249-3.4374-11.102-5.1561-17.559-5.1561-7.757 0-14.586 2.4619-20.532 7.4322-5.945 4.9704-9.615 11.1953-11.101 18.7203h-7.619l.047.046Z" fill="#fff"/>
                <path stroke="#F0EBE6" strokeWidth="2" d="M1 159h158v158H1z"/>
                <path stroke="#F0EBE6" strokeWidth="2" d="M159 159h158v158H159z"/>
                <path stroke="#F0EBE6" strokeWidth="2" d="M317 159h158v158H317z"/>
                <path stroke="#F0EBE6" strokeWidth="2" d="M475 159h158v158H475z"/>
                <path stroke="#F0EBE6" strokeWidth="2" d="M633 159h158v158H633z"/>
              </svg>
            </div>
          </div>

          <div className="col-18 col-md-8 d-none d-md-block mb-md-2 mb-lg-0">
            <div className="mx-n2">
              <svg className={`d-block d-lg-none w-100 h-auto`} width="330" height="248" viewBox="0 0 330 248" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="1" y="83" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="1" y="165" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="83" y="1" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="83" y="83" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="83" y="165" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="165" y="1" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="165" y="83" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="165" y="165" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="247" y="1" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="247" y="83" width="82" height="82" fill="white" stroke="#F0EBE6" strokeWidth="2"/>
                <rect x="247" y="165" width="82" height="82" fill="#FAF8F7" stroke="#F0EBE6" strokeWidth="2"/>
              </svg>
              <svg className={`d-none d-lg-block w-100 h-auto`} width="634" height="318" viewBox="0 0 634 318" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#fff" stroke="#F0EBE6" strokeWidth="2" d="M1 1h158v158H1z"/>
                <path fill="#fff" stroke="#F0EBE6" strokeWidth="2" d="M159 1h158v158H159z"/>
                <path fill="#fff" stroke="#F0EBE6" strokeWidth="2" d="M317 1h158v158H317z"/>
                <path fill="#fff" stroke="#F0EBE6" strokeWidth="2" d="M475 1h158v158H475z"/>
                <path fill="#fff" stroke="#F0EBE6" strokeWidth="2" d="M1 159h158v158H1z"/>
                <path fill="#fff" stroke="#F0EBE6" strokeWidth="2" d="M159 159h158v158H159z"/>
                <path fill="#fff" stroke="#F0EBE6" strokeWidth="2" d="M317 159h158v158H317z"/>
                <path fill="#FAF8F7" stroke="#F0EBE6" strokeWidth="2" d="M475 159h158v158H475z"/>
              </svg>
            </div>
          </div>
          <div className="col-2 mb-2 d-none d-md-block d-lg-none offset-16">
            <div className="cell"></div>
          </div>
          <div className="col-3 offset-12 col-md-2 mb-2 offset-md-14 offset-lg-2 offset-xl-4">
            <div className="cell cell-border-gray-200"></div>
          </div>
          <div className="col-3 offset-15 d-md-none">
            <div className="cell cell-border-gray-200 bg-gray-200"></div>
          </div>

        </div>
      </div>
    </section>
  )
}
