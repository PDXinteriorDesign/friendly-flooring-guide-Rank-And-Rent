
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Layers, Grid, Mountain, Blinds } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const MainNav = () => {
  const isMobile = useIsMobile();

  return (
    <div className="relative z-50 shadow-sm" 
      style={{
        backgroundImage: `url('/lovable-uploads/97bc7151-172f-486b-98db-d006004f6c43.png')`,
        backgroundSize: '300px',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="absolute inset-0 bg-earth-100/90 backdrop-blur-[2px]"></div>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between">
          <Link to="/" className="py-2 h-full">
            <img 
              src="/lovable-uploads/e7a6c80e-7321-4810-82d4-aa0d06900765.png" 
              alt="Flooring Quotes Vancouver" 
              className="h-full max-h-24 sm:max-h-32 w-auto object-contain"
            />
          </Link>
          
          <NavigationMenu className="py-2">
            <NavigationMenuList className="gap-1 sm:gap-2">
              <NavigationMenuItem>
                <Link to="/" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-2 sm:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                )}>
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-2 sm:px-4">Flooring Services</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-earth-100/95 backdrop-blur-sm shadow-lg">
                  <div className={cn(
                    "grid gap-3 p-4",
                    isMobile ? "w-[280px] grid-cols-1" : "w-[500px] md:grid-cols-2"
                  )}>
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
                    <Link to="/laminate-flooring-vancouver-wa" className="block p-3 space-y-1 hover:bg-accent rounded-lg">
                      <div className="flex items-center gap-2 font-medium">
                        <Layers className="w-4 h-4" />
                        Laminate Flooring
                      </div>
                      <p className="text-sm text-muted-foreground">Durable and affordable laminate solutions</p>
                    </Link>
                    <Link to="/tile-flooring-vancouver-wa" className="block p-3 space-y-1 hover:bg-accent rounded-lg">
                      <div className="flex items-center gap-2 font-medium">
                        <Grid className="w-4 h-4" />
                        Tile Flooring
                      </div>
                      <p className="text-sm text-muted-foreground">Custom tile installation for any space</p>
                    </Link>
                    <Link to="/natural-stone-vancouver-wa" className="block p-3 space-y-1 hover:bg-accent rounded-lg">
                      <div className="flex items-center gap-2 font-medium">
                        <Mountain className="w-4 h-4" />
                        Natural Stone
                      </div>
                      <p className="text-sm text-muted-foreground">Elegant natural stone flooring solutions</p>
                    </Link>
                    <Link to="/window-coverings-vancouver-wa" className="block p-3 space-y-1 hover:bg-accent rounded-lg">
                      <div className="flex items-center gap-2 font-medium">
                        <Blinds className="w-4 h-4" />
                        Window Coverings
                      </div>
                      <p className="text-sm text-muted-foreground">Custom window treatment solutions</p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/blog" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-2 sm:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                )}>
                  Blog
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/resources" className={cn(
                  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-2 sm:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                )}>
                  Resources
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
