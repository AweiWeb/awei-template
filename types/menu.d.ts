interface MenuItem {
  title?: string;
  icon?: string;
  isActive?: boolean;
  route?: string;
}

interface IMenu extends MenuItem {
  children?: MenuItem[];
}
