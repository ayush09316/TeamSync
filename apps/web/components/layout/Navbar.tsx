'use client';
import React from 'react';
import { Button } from '../ui/button';
import { navLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

const Navbar = () => {
  return (
    <header className="bg-black text-white p-4 sticky top-0 z-40 items-center border-b border-dark-200">
      <div className="flex justify-between px-8 relative items-center">
        <Link href={'/'} className="flex items-center cursor-pointer">
          <h1 className="font-bold text-xl">Team</h1>
          <Image src="/logo.webp" alt="TeamSync" width={45} height={45} />
          <h1 className="font-bold text-xl">Sync</h1>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            {navLinks.map((link, i) => (
              <React.Fragment key={i}>
                {link.subLinks ? (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent p-0 hover:text-success-100">
                      {link.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-dark-300 text-white">
                      <ul className="flex flex-col w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[600px] ">
                        {link.subLinks?.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink className="hover:text-success-100">
                        {link.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-4">
          <Button
            variant="ghost"
            className=" hover:text-success-100 h-8 text-[13px]"
          >
            Log In
          </Button>
          <Button className="btn-green hover:bg-success-100 h-8 text-[13px]">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
