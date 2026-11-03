import {socials} from "@/data/content";

interface SocialsProps {
  type?: "icon";
  className?: string;
  itemClassName?: string;
}

export const Socials = ({type, className, itemClassName}: SocialsProps) => socials.length > 0 ? (
  <div className={className}>
    {socials.map((item, index) => (
      <a href={item.url} key={index} target="_blank" rel="noreferrer noopener" className={itemClassName} aria-label={item.network}>
        {type === 'icon' ? (
            <svg width={24} height={24}><use xlinkHref={`#icon-${item.network.toLowerCase()}`}/></svg>
          ) :
          (
            <span className="text-uppercase text-white text-mono letter-spacing-2">{item.network.toLowerCase()}</span>
          )
        }
      </a>
    ))}
  </div>
) : null;
