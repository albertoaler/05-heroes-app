import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { Link, useLocation } from "react-router";


export const CustomMenu = () => {

  const { pathname } = useLocation();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Home Page */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild
            className={cn(isActive('/') && 'bg-slate-200 rouded-md p-2' + navigationMenuTriggerStyle())}
          >
            <Link to="/">Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Search page */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild
            className={cn(isActive('/search') && 'bg-slate-200 rouded-md p-2' + navigationMenuTriggerStyle())}
          >
            <Link to="/search">Búsqueda</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
