import Link from "./global/Link";
import {useMenuItems} from "@/hooks/useMenuItems";

interface MenuProps {
  menuName: string;
  onLinkClick?: () => void;
}

export const MenuDesktop = ({menuName, onLinkClick}: MenuProps) => {
  const menuItems = useMenuItems(menuName).items;

  return menuItems.length ? (
    <ul className="navbar-nav me-lg-auto mb-2 mb-lg-0 align-items-lg-center">
      {menuItems.map((menuItem, index) => {
        const key = menuItem.id + index;

        return menuItem.children.length ?
          <li className="nav-item ms-lg-40 dropdown" key={key}>
            <Link onClick={onLinkClick} target={menuItem.target} className="nav-link dropdown-toggle" to={menuItem.url}>{menuItem.label}</Link>
            <ul className={`dropdown-menu ${menuItem.children.length >= 4 ? 'two-col-menu d-flex flex-wrap p-16' : ''}`}>
              <li className={`nav-item d-flex nav-item-full-w d-flex mb-32`}>
                {menuItem.url !== '#' ? (
                  <Link onClick={onLinkClick} target={menuItem.target} className="w-100 position-relative nav-link text-uppercase d-flex align-items-center justify-content-between" to={menuItem.url}>
                    {menuItem.label}
                    <svg width={24} height={24} className={`ms-6 position-absolute end-0 me-8 top-50 translate-middle-y`}>
                      <use xlinkHref="#icon-arrow-r"/>
                    </svg>
                  </Link>
                ) : (
                  <p className={`nav-link pe-none mb-0 text-uppercase text-gray-400`}>{menuItem.label}</p>
                )}
              </li>
              {menuItem.children.map((childrenItem, index) => (
                <li className={`nav-item d-flex ${childrenItem.cssClasses.join(' ')}`} key={childrenItem.id + index}>
                  <Link onClick={onLinkClick} target={childrenItem.target} className="nav-link" to={childrenItem.url}>{childrenItem.label}</Link>
                </li>
              ))}
            </ul>
          </li>
          :
          <li className="nav-item ms-lg-40" key={key}>
            <Link onClick={onLinkClick} className="nav-link" to={menuItem.url} target={menuItem.target}>{menuItem.label}</Link>
          </li>;
      })}
    </ul>
  ) : null;
};
