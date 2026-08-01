import { usePathname } from "next/navigation";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "../ui/navigation-menu";
import Link from "next/link";
import { links } from "./sidenav";
import { cn } from "@/lib/utils";

export default function MobileNav() {
    const pathname = usePathname();

    function isActive(href: string) {
        return href.startsWith('/dashboard/songs')
            ? pathname.startsWith('/dashboard/songs')
            : pathname === href;
    }

    function linkClassName(href: string) {
        return cn(isActive(href) && "bg-sidebar-accent text-sidebar-accent-foreground font-medium");
    }

    return (
        <div className="sticky top-0 z-10 flex w-full items-center border-b bg-background px-2">
            <NavigationMenu viewport={false} className="min-w-0 max-w-none flex-1 justify-start">
                <NavigationMenuList className="justify-start gap-1 overflow-x-auto">
                    {links.map((link) => (
                        <NavigationMenuItem key={link.href}>
                            <NavigationMenuLink asChild className={linkClassName(link.href)}>
                                <Link href={link.href}>
                                    <span>{link.label}</span>
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu viewport={false} className="max-w-none w-auto shrink-0 justify-end">
                <NavigationMenuList className="justify-end">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={linkClassName('/dashboard/account')}>
                            <Link href="/dashboard/account">Account</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}