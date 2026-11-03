import Link from "./global/Link";
import {useMenuItems} from "@/hooks/useMenuItems";

interface MenuProps {
  menuName: string;
  onLinkClick?: () => void;
}

export const MenuMob = ({menuName, onLinkClick}: MenuProps) => {
  const menuItems = useMenuItems(menuName).items;

  return menuItems.length ? (
    <ul className="navbar-nav mob-nav mb-2 mb-lg-0 align-items-lg-center w-100">
      {menuItems.map((menuItem, index) => {
        const key = menuItem.id + index;

        return menuItem.children.length ?
          <li className="nav-item mb-44 mb-md-64" key={key}>
            <div className="d-flex align-items-center nav-link mb-0">
              <Link onClick={onLinkClick} to={menuItem.url} className={"nav-link"} target={menuItem.target}>
                {menuItem.label}
              </Link>

              <svg className={`ms-12 w-md-44px h-auto`} width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5.33464 15.0001L4.16797 13.8334L12.168 5.83341H5.0013V4.16675L15.0013 4.16675V14.1667H13.3346V7.00008L5.33464 15.0001Z" fill="currentColor"/>
              </svg>
            </div>
            <ul className={`p-0 mob-sub-nav list-unstyled mt-24`}>
              {menuItem.children.map((childrenItem, index) => (
                <li className={`mt-20 mt-md-18`} key={childrenItem.id + index}>
                  <Link onClick={onLinkClick} target={childrenItem.target} className="nav-link" to={childrenItem.url}>{childrenItem.label}</Link>
                </li>
              ))}
            </ul>
          </li>
          :
          <li className="nav-item mb-44 mb-md-64" key={key}>
            <Link onClick={onLinkClick} className="nav-link" to={menuItem.url} target={menuItem.target}>{menuItem.label}</Link>
          </li>;
      })}
    </ul>
  ) : null;
};
