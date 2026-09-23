'use client'
import MobileNav from '@/components/dashboard/mobilenav';
import SideNav from '@/components/dashboard/sidenav';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Layout({ children }: { children: React.ReactNode }) {
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <div>
                <MobileNav />
                <main className="p-4">
                    {children}
                </main>
            </div>
        )
    } else {
        return (
            <SidebarProvider defaultOpen={true}>
                <SideNav />
                <main className="flex-1 p-6 md:p-12 min-w-0">
                    {children}
                </main>
            </SidebarProvider>
        )
    }
}
