import {useMenuItems} from "@/hooks/useMenuItems";
import Link from "./Link";

export const FooterNav = ({menuName, className}: {menuName: string; className?: string}) => {
  const menu = useMenuItems(menuName);

  return menu.items.length > 0 ? (
    <div className={className}>
      <p className="title-small text-uppercase mb-40">{menu.name}</p>
      <ul className="list-unstyled mb-0">
        {menu.items.map((menuItem, index) => (
          <li className="nav-item mt-24 mt-lg-20 d-flex" key={menuItem.id + index}>
            <Link className="nav-link caption text-uppercase opacity-hover-06" to={menuItem.url} target={menuItem.target}>{menuItem.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};
