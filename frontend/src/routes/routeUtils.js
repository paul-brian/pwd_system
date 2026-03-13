import { menuItems } from "../config/menu";

export const getRouteMeta = (pathname) => {
  const match = menuItems.find(item =>
    pathname.startsWith(item.path)
  );

  return {
    title: match?.name || "Dashboard",
    icon: match?.icon || "dashboard",
    path: match?.path || "/",
  };
};