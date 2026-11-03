import Link from "./Link";

interface ButtonProps {
  title: string;
  url: string;
  classes?: string;
  external?: boolean;
  icon?: string;
  target?: string | null;
}

export const Button = ({title, url, classes, external, icon, target}: ButtonProps) => {
  const iconSvg = icon ? (
    <svg className="ms-32" width={24} height={24}>
      <use xlinkHref={`#icon-${icon}`} />
    </svg>
  ) : '';

  if (!external && target !== '_blank') {
    return (
      <Link className={`btn ${classes || ''} ${icon ? 'py-10' : ''}`} to={url}>{title}{iconSvg}</Link>
    );
  }
  return (
    <a className={`btn ${classes || ''} ${icon ? 'py-10' : ''}`} target="_blank" rel="noopener noreferrer" href={url}>{title}{iconSvg}</a>
  );
};
