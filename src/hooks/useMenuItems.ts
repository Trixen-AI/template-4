import {menus} from "@/data/content";
import type {MenuItemNode} from "@/data/types";

export type MenuItem = MenuItemNode & {children: MenuItem[]};

const flatListToHierarchical = (data: MenuItemNode[]): MenuItem[] => {
  const tree: MenuItem[] = [];
  const childrenOf: Record<string, MenuItem[]> = {};
  data.forEach((item) => {
    childrenOf[item.id] = childrenOf[item.id] || [];
    const newItem: MenuItem = {...item, children: childrenOf[item.id]};
    if (item.parentId) {
      (childrenOf[item.parentId] = childrenOf[item.parentId] || []).push(newItem);
    } else {
      tree.push(newItem);
    }
  });
  return tree;
};

// Menus are static content, so the tree is built once per location at module load.
const cache = new Map<string, {items: MenuItem[]; name: string}>();

export const useMenuItems = (location: string) => {
  let nav = cache.get(location);
  if (!nav) {
    const menu = menus.find((item) => item.locations.includes(location));
    nav = menu ? {items: flatListToHierarchical(menu.items), name: menu.name} : {items: [], name: ''};
    cache.set(location, nav);
  }
  return nav;
};
