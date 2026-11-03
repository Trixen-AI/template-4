import {useState} from 'react';
import {Splide, SplideTrack, SplideSlide} from '@splidejs/react-splide';
import type {Splide as SplideCore} from '@splidejs/splide';
import {Card} from "../blog/Card";
import {Icon} from "../global/Icon";
import {posts} from "@/data/content";
import type {FrontPageACF} from "@/data/types";

const splideOptions = {
  rewind: true,
  perPage: 3,
  perMove: 1,
  gap: '2px',
  pagination: false,
  breakpoints: {
    767: {
      perPage: 1,
    },
    991: {
      perPage: 2,
    },
  }
};

const pageCount = (splide: SplideCore) => splide.length - (splide.options.perPage ?? 1) + 1;

export const News = ({data}: {data: FrontPageACF['news']}) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(posts.length);

  return (
    <section {...(data.id ? { id: data.id } : {})} className={"mb-110 mb-md-160 overflow-hidden"}>
      <div className="container">
        <div className="row">
          <div className="col-18 col-md-16 offset-md-2 mb-24 mb-md-40">
            {data.title && (
              <h2 className="mb-0 text-prewrap">{data.title}</h2>
            )}
          </div>
        </div>

        {posts.length > 0 && (
          <Splide hasTrack={false} aria-label={data.title}
                  className="zg-news-slider"
                  options={splideOptions}
                  onMounted={(splide: SplideCore) => { setTotalSlides(pageCount(splide)) }}
                  onUpdated={(splide: SplideCore) => { setTotalSlides(pageCount(splide)) }}
                  onMove={(_splide: SplideCore, destIndex: number) => { setCurrentSlide(destIndex + 1) }}
          >
            <div className="splide__arrows">
              <div className="row">
                <div className="col-18 col-md-16 offset-md-2 mb-44 mb-md-72 d-flex align-items-center">
                  <button className="splide__arrow splide__arrow--prev btn p-10">
                    <Icon icon={"arrow-l"}/>
                  </button>
                  <div className="title-small text-uppercase px-16">
                    {currentSlide} of {totalSlides}
                  </div>
                  <button className="splide__arrow splide__arrow--next btn p-10">
                    <Icon icon={"arrow-r"}/>
                  </button>
                </div>
              </div>
            </div>

            <SplideTrack>
              {posts.map((post) => (
                <SplideSlide key={post.databaseId}>
                  <Card post={post}/>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        )}
      </div>
    </section>
  );
};
