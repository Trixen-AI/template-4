import {useMenuItems} from "@/hooks/useMenuItems";
import Link from "./Link";

export const FooterLineNav = ({menuName, className = ''}: {menuName: string; className?: string}) => {
  const menu = useMenuItems(menuName);
  return menu.items.length > 0 ? (
    <ul className={`list-unstyled mb-0 d-flex flex-wrap ms-n32 ${className}`}>
      {menu.items.map((menuItem, index) => (
        <li className="nav-item ms-32 mb-16 mb-md-0" key={menuItem.id + index}>
          <Link className="nav-link text-seconadry" to={menuItem.url} target={menuItem.target}>{menuItem.label}</Link>
        </li>
      ))}
    </ul>
  ) : null;
};
