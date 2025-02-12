
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const MainNav = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavigationMenu className="py-4">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={cn(
                "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              )}>
                Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Flooring Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <Link to="/hardwood-flooring-vancouver-wa" className="block p-3 space-y-1 hover:bg-accent rounded-lg">
                    <div className="font-medium">Hardwood Flooring</div>
                    <p className="text-sm text-muted-foreground">Professional hardwood floor installation and refinishing</p>
                  </Link>
                  <Link to="/vinyl-flooring-vancouver-wa" className="block p-3 space-y-1 hover:bg-accent rounded-lg">
                    <div className="font-medium">Vinyl Flooring</div>
                    <p className="text-sm text-muted-foreground">Expert vinyl and luxury vinyl plank installation</p>
                  </Link>
                  <Link to="/carpet-installation-vancouver-wa" className="block p-3 space-y-1 hover:bg-accent rounded-lg">
                    <div className="font-medium">Carpet Installation</div>
                    <p className="text-sm text-muted-foreground">Professional carpet installation services</p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/blog" className={cn(
                "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              )}>
                Blog
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/resources" className={cn(
                "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              )}>
                Resources
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default MainNav;
