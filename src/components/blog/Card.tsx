import type {Post} from "@/data/types";
import {SITE_ORIGIN} from "@/lib/site";

const dateFormat = new Intl.DateTimeFormat('en-US', {month: 'long', day: 'numeric', year: 'numeric'});

export const Card = ({post}: {post: Post}) => {
  const {title, date, featuredImage, link, categories} = post;
  const href = `${SITE_ORIGIN}/content-hub${link}`;
  const formattedDate = dateFormat.format(new Date(date));

  return (
    <article className="zg-article-card">
      <a className="zg-article-card__img" href={href}>
        {featuredImage ? (
          <img loading={"lazy"} width={470} height={320} src={featuredImage.url} alt={featuredImage.altText}/>
        ) : (
          <img width={470} height={320} src={`${SITE_ORIGIN}/images/placeholder.jpg`} alt={title}/>
        )}
      </a>
      <div className="zg-article-card__inner">
        <div className="d-flex justify-content-between mb-24">
          <time dateTime={date} className="zg-article-card__date">{formattedDate}</time>
        </div>
        <h3 className="zg-article-card__title">
          <a href={href} dangerouslySetInnerHTML={{__html: title}}></a>
        </h3>
        <div className="mt-auto">
          {categories.map(category => (
            <span className="zg-term" key={category.slug}>{category.name}</span>
          ))}
        </div>
      </div>
    </article>
  );
};
